// Region and Model ID from Environment Variables
const AWS_REGION = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-east-1";
const BEDROCK_MODEL_ID = process.env.BEDROCK_MODEL_ID || "amazon.nova-2-lite-v1:0";

let bedrockClient = null;

async function getBedrockClient() {
  if (!bedrockClient) {
    const { BedrockRuntimeClient } = await import("@aws-sdk/client-bedrock-runtime");
    bedrockClient = new BedrockRuntimeClient({ region: AWS_REGION });
  }
  return bedrockClient;
}

// Standard CORS headers for API Gateway
const CORS_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "Access-Control-Allow-Methods": "OPTIONS,POST"
};

export const handler = async (event) => {
  // Handle CORS preflight OPTIONS request
  const httpMethod = event.httpMethod || event.requestContext?.http?.method || "POST";
  if (httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: "CORS preflight successful" })
    };
  }

  try {
    // Parse request body safely
    let body = {};
    if (event.body) {
      body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    } else if (typeof event === "object") {
      body = event;
    }

    // Determine path/route or action
    const path = event.path || event.rawPath || "";
    const action = body.action || (path.endsWith("/chat") ? "chat" : "explain");

    if (action === "chat" || path.endsWith("/chat")) {
      return await handleFollowUpChat(body);
    } else {
      return await handleExplainSchemes(body);
    }
  } catch (error) {
    console.error("Lambda handler error:", error);
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: "Invalid request payload or server failure",
        message: error.message
      })
    };
  }
};

/**
 * Handles scheme explanation & ranking via Amazon Bedrock
 */
async function handleExplainSchemes(body) {
  const profile = body.profile || {};
  const schemes = body.schemes || [];
  const lang = body.language || "en";
  const groundingContext = body.groundingContext || null;

  if (!schemes || schemes.length === 0) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "No candidate schemes provided" })
    };
  }

  const systemPrompt = `You are SchemeSaathi, a warm and compassionate AI assistant helping underprivileged Indians discover free government health schemes.

CRITICAL RULES:
- NEVER say someone definitely qualifies — always say "you may qualify" or "you are likely eligible"
- Always end each scheme with: "Verify eligibility at the official portal before applying"
- Respond in ${lang} language entirely
- Use simple words — 8th grade reading level maximum
- Be warm, encouraging, never bureaucratic
- DO NOT invent new schemes. Only use the schemes provided in the input list.

Your response MUST be valid JSON in this exact structure without markdown backticks:
{
  "greeting": "warm personalized greeting in ${lang}",
  "totalFound": ${schemes.length},
  "schemes": [
    {
      "id": "scheme_id",
      "urgency": "high|medium|low",
      "urgencyReason": "one sentence why urgent for this person",
      "whyYouMayQualify": "personalized 1-sentence explanation",
      "simpleBenefit": "benefit in plain everyday language",
      "immediateAction": "single most important thing to do today",
      "documentsNeeded": ["doc1", "doc2"],
      "nearestPlace": "where exactly to go",
      "estimatedTimeToApply": "e.g. 30 minutes at center"
    }
  ],
  "summary": "2 encouraging sentences summarizing what was found",
  "topPriority": "id of single most important scheme for this person",
  "disclaimer": "always verify at official portal — in ${lang}"
}`;

  const userMessage = `User profile:
- Name: ${profile.name || "Friend"}
- State: ${profile.stateName || profile.stateCode || "India"}
- Age: ${profile.age}
- Gender: ${profile.gender}
- Monthly income: ₹${profile.monthlyIncome}
- Family size: ${profile.familySize}
- Employment: ${profile.employmentType}
- Health needs: ${Array.isArray(profile.healthNeeds) ? profile.healthNeeds.join(", ") : "general"}
- Has Aadhaar: ${profile.hasAadhaar}
- Has ration card: ${profile.hasRationCard}
- Has bank account: ${profile.hasBankAccount}
- Language: ${lang}

Eligible candidate schemes filtered by deterministic rules (${schemes.length}):
${JSON.stringify(schemes.map(s => ({
  id: s.id,
  name: s.name,
  benefit: s.benefit,
  benefitAmount: s.benefitAmount,
  applicationSteps: s.applicationSteps,
  documentsNeeded: s.documentsNeeded,
  urgencyScore: s.urgencyScore
})), null, 2)}

${groundingContext ? `Official grounding context: ${JSON.stringify(groundingContext)}` : ""}

Rank by urgency for THIS specific person. Return valid JSON only.`;

  try {
    const aiOutput = await invokeBedrock(systemPrompt, userMessage);
    const cleanJsonText = extractJsonText(aiOutput);
    const parsedData = JSON.parse(cleanJsonText);

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify(parsedData)
    };
  } catch (err) {
    console.warn("Bedrock invocation note/fallback for /explain:", err.message);
    // Return structured fallback response so UI degrades gracefully
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify(buildServerFallbackResponse(schemes, profile, lang))
    };
  }
}

/**
 * Handles post-results follow-up chat via Amazon Bedrock
 */
async function handleFollowUpChat(body) {
  const question = body.question || "";
  const previousResults = body.previousResults || {};
  const profile = body.profile || {};
  const lang = body.language || "en";

  if (!question) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Missing user question" })
    };
  }

  const systemPrompt = `You are SchemeSaathi. The user has already received their scheme results.
Answer their follow-up question warmly, helpfully, and concisely in ${lang}.
Context: ${JSON.stringify({ profile, topSchemes: previousResults.schemes?.slice(0, 3) || [] })}
Keep response under 100 words. Always practical, clear, and empathetic. Never bureaucratic.`;

  try {
    const answer = await invokeBedrock(systemPrompt, question);
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ answer: answer.trim() })
    };
  } catch (err) {
    console.warn("Bedrock invocation note/fallback for /chat:", err.message);
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        answer: "You can visit the nearest Government Hospital or Common Service Centre (CSC) with your Aadhaar and Ration Card to get full guidance on applying."
      })
    };
  }
}

/**
 * Invokes Amazon Bedrock using ConverseCommand
 */
async function invokeBedrock(systemPrompt, userText) {
  const client = await getBedrockClient();
  const { ConverseCommand } = await import("@aws-sdk/client-bedrock-runtime");

  const command = new ConverseCommand({
    modelId: BEDROCK_MODEL_ID,
    messages: [
      {
        role: "user",
        content: [{ text: userText }]
      }
    ],
    system: [
      { text: systemPrompt }
    ],
    inferenceConfig: {
      maxTokens: 2000,
      temperature: 0.2
    }
  });

  const response = await client.send(command);
  const responseText = response.output?.message?.content?.[0]?.text;
  if (!responseText) {
    throw new Error("Empty text response returned from Amazon Bedrock");
  }
  return responseText;
}

/**
 * Cleans response string to extract pure JSON
 */
function extractJsonText(text) {
  let cleaned = text.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.replace(/^```json/, "").replace(/```$/, "").trim();
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```/, "").replace(/```$/, "").trim();
  }
  return cleaned;
}

/**
 * Fallback generator on backend error
 */
function buildServerFallbackResponse(schemes, profile, lang) {
  return {
    greeting: `Hello ${profile.name || "Friend"}, here are the health schemes matching your profile.`,
    totalFound: schemes.length,
    schemes: schemes.slice(0, 6).map(s => ({
      id: s.id,
      name: s.name,
      nameLocal: s.name,
      urgency: s.urgencyScore > 80 ? "high" : "medium",
      urgencyReason: "Essential hospitalization and surgical benefit for your family.",
      whyYouMayQualify: "You match the state and income eligibility criteria.",
      simpleBenefit: s.benefit,
      immediateAction: s.applicationSteps?.[0] || "Visit nearest hospital",
      documentsNeeded: s.documentsNeeded || ["Aadhaar card"],
      nearestPlace: s.nearestCenterType || "Empanelled Hospital",
      estimatedTimeToApply: "30-60 minutes at center"
    })),
    summary: "Please review the recommended schemes and carry your Aadhaar card to the nearest hospital to apply.",
    topPriority: schemes[0]?.id || "",
    disclaimer: "Always verify eligibility at the official government portal before applying.",
    isFallback: true
  };
}

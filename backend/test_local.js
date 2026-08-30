import { handler } from './index.mjs';

async function runTests() {
  console.log("==========================================");
  console.log("RUNNING SCHEMASAATHI BACKEND LOCAL TESTS");
  console.log("==========================================\n");

  let passed = 0;
  let total = 0;

  function assert(condition, testName) {
    total++;
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${testName}`);
    }
  }

  // TEST 1: CORS Options request
  try {
    const res = await handler({ httpMethod: "OPTIONS" });
    assert(res.statusCode === 200, "CORS Preflight OPTIONS returns status 200");
    assert(res.headers["Access-Control-Allow-Origin"] === "*", "CORS Preflight includes Access-Control-Allow-Origin: *");
  } catch (err) {
    assert(false, `CORS OPTIONS test failed: ${err.message}`);
  }

  // TEST 2: Missing candidate schemes returns HTTP 400
  try {
    const res = await handler({
      path: "/api/explain",
      body: JSON.stringify({ profile: { name: "Test" }, schemes: [] })
    });
    assert(res.statusCode === 400, "Empty schemes list returns HTTP 400");
  } catch (err) {
    assert(false, `Empty schemes test failed: ${err.message}`);
  }

  // TEST 3: Valid Payload Format & Local Server Fallback Handling
  try {
    const sampleProfile = {
      name: "Ramu",
      stateName: "Tamil Nadu",
      age: 42,
      gender: "male",
      monthlyIncome: 8000,
      familySize: 4,
      employmentType: "daily_wage",
      healthNeeds: ["surgery"],
      hasAadhaar: true,
      hasRationCard: true,
      hasBankAccount: true
    };
    const sampleSchemes = [
      {
        id: "pmjay",
        name: "Ayushman Bharat PM-JAY",
        benefit: "₹5,00,000 health insurance per family per year",
        benefitAmount: 500000,
        applicationSteps: ["Visit nearest hospital"],
        documentsNeeded: ["Aadhaar card"],
        urgencyScore: 95
      }
    ];

    const res = await handler({
      path: "/api/explain",
      body: JSON.stringify({
        profile: sampleProfile,
        schemes: sampleSchemes,
        language: "ta"
      })
    });

    assert(res.statusCode === 200, "/api/explain handler returns status 200");
    const data = JSON.parse(res.body);
    assert(data.totalFound === 1, "Response totalFound matches input scheme count");
    assert(Array.isArray(data.schemes) && data.schemes.length > 0, "Response includes non-empty schemes array");
    assert(data.schemes[0].id === "pmjay", "Response scheme ID matches input scheme ID");
    assert(typeof data.disclaimer === "string", "Response includes disclaimer text");
  } catch (err) {
    assert(false, `Explain payload test failed: ${err.message}`);
  }

  // TEST 4: Follow-Up Chat Payload Format & Response
  try {
    const res = await handler({
      path: "/api/chat",
      body: JSON.stringify({
        question: "आयुष्मान कार्ड कैसे बनवाएं?",
        previousResults: { schemes: [{ id: "pmjay" }] },
        profile: { stateName: "Uttar Pradesh" },
        language: "hi"
      })
    });

    assert(res.statusCode === 200, "/api/chat handler returns status 200");
    const data = JSON.parse(res.body);
    assert(typeof data.answer === "string" && data.answer.length > 0, "/api/chat returns non-empty answer string");
  } catch (err) {
    assert(false, `Chat payload test failed: ${err.message}`);
  }

  console.log(`\n==========================================`);
  console.log(`TEST SUMMARY: ${passed}/${total} TESTS PASSED`);
  console.log(`==========================================\n`);

  if (passed !== total) {
    process.exit(1);
  }
}

runTests();

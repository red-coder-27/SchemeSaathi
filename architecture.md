# SchemeSaathi — Architecture

## System Overview

SchemeSaathi is a client-side Progressive Web Application.
There is no backend server. All logic runs in the browser.
The only external calls are to:
- Microsoft Graph API (Work IQ grounding)
- Anthropic Claude API (AI reasoning)
Both calls fail gracefully with a local fallback.

## Full Architecture Diagram

```mermaid
flowchart TD
    USER["👤 User\nMobile or Desktop\n12 languages — voice or text"]

    subgraph Browser ["Browser — Runs Entirely Client-Side"]
        SW["sw.js\nService Worker\nCache-first offline routing"]
        HTML["index.html\nSingle page app\nProfile wizard → Results → Chat"]
        CSS["styles.css\nWarm Government design\nARIA accessible"]
        I18N["i18n.js\n12 language translations\nRTL support for Urdu"]

        subgraph Agent ["agent.js — 5-Step AI Pipeline"]
            STEP1["Step 1\nLocal Eligibility Filter\nOn-device, instant"]
            STEP2["Step 2\nWork IQ Grounding\nMicrosoft Graph API"]
            STEP3["Step 3\nClaude API Call\nRanking + explanation"]
            STEP4["Step 4\nResults Renderer\nScheme cards + chat"]
            STEP5["Step 5\nFallback Engine\nOffline simulation"]
        end

        DB["schemes.js\n32 government schemes\n15 central + 17 state"]
    end

    subgraph External ["External APIs"]
        WORKIQ["Microsoft Work IQ\ngraph.microsoft.com\nSearch + document grounding"]
        CLAUDE["Anthropic Claude\napi.anthropic.com\nclaude-sonnet-4-20250514"]
        WHATSAPP["WhatsApp\nwa.me deep link\nPre-filled in user language"]
    end

    USER -->|Profile input| HTML
    HTML --> STEP1
    DB --> STEP1
    STEP1 -->|Filtered schemes| STEP2
    STEP2 <-->|OAuth token + query| WORKIQ
    STEP2 -->|Grounded context| STEP3
    STEP3 <-->|System prompt + profile| CLAUDE
    STEP3 -->|Ranked JSON| STEP4
    STEP4 -->|Follow-up questions| STEP3
    STEP4 -->|Share button| WHATSAPP
    STEP1 -->|If offline| STEP5
    STEP2 -->|If API fails| STEP5
    STEP3 -->|If API fails| STEP5
    SW -.->|Serves cached assets| HTML
    I18N -.->|UI translations| HTML
    CSS -.->|Styles| HTML
```

## Data Flow — Single User Journey

```
1. User opens app (served from cache if offline — sw.js)
2. User selects language (i18n.js loads translations)
3. User fills profile form — voice or text input
4. "Find my schemes" button pressed
5. Step 1: filterSchemesByProfile() runs locally against schemes.js
   → Returns N eligible schemes in ~10ms
6. Step 2: groundWithWorkIQ() calls Microsoft Graph Search
   → Returns official document summaries for grounding context
   → On failure: returns { groundingSource: "local_fallback" }
7. Step 3: explainWithClaude() sends profile + filtered schemes
   + grounding context to Claude API
   → Returns ranked JSON with urgency, explanation, action steps
   → On failure: buildFallbackResponse() runs locally
8. Step 4: Results rendered as scheme cards
   → Each card shows: urgency badge, benefit amount, why you qualify,
     documents needed, official website link, WhatsApp share button
9. Follow-up chat: answerFollowUp() handles questions using Claude
   → On failure: keyword-based local responses from i18n.js
```

## File Dependency Map

```
index.html
  ├── styles.css
  ├── schemes.js        (loaded first — no dependencies)
  ├── i18n.js           (loaded second — no dependencies)
  └── agent.js          (loaded last — depends on schemes.js, i18n.js)

sw.js                   (registered by index.html — independent)
manifest.json           (referenced by index.html — independent)
```

## Security Notes

- No user data is stored on any server
- Profile data lives only in browser memory (cleared on page close)
- API keys are entered by the user and stored in localStorage only
- No analytics, no tracking, no cookies
- All external API calls use HTTPS
- Work IQ token scoped to read-only: Files.Read, Sites.Read.All

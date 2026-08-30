import { readFileSync } from 'fs';
import { runInNewContext } from 'vm';

console.log("=================================================");
console.log("SCHEMASAATHI FULL APPLICATION & ELIGIBILITY TESTS");
console.log("=================================================\n");

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

// Load browser script files into isolated sandbox context
const schemesCode = readFileSync('./schemes.js', 'utf8');
const i18nCode = readFileSync('./i18n.js', 'utf8');
const agentCode = readFileSync('./agent.js', 'utf8');

const sandbox = {
  console: { log: () => {}, info: () => {}, warn: () => {}, error: () => {} },
  localStorage: {
    getItem: (key) => null,
    setItem: (key, val) => {}
  },
  window: {},
  setTimeout: (fn, ms) => fn(),
  fetch: async () => ({ ok: false, status: 500 })
};

// Append exports to global context
const fullScript = `
${schemesCode}
${i18nCode}
${agentCode}

globalThis.SCHEMES = SCHEMES;
globalThis.LANGUAGES = LANGUAGES;
globalThis.TRANSLATIONS = TRANSLATIONS;
globalThis.filterSchemesByProfile = filterSchemesByProfile;
globalThis.explainWithClaude = explainWithClaude;
globalThis.answerFollowUp = answerFollowUp;
globalThis.buildSmartLocalResponse = buildSmartLocalResponse;
`;

runInNewContext(fullScript, sandbox);

const { filterSchemesByProfile, explainWithClaude, answerFollowUp, SCHEMES } = sandbox;

// 1. DATASET CHECKS
assert(Array.isArray(SCHEMES.central) && SCHEMES.central.length >= 15, "SCHEMES dataset includes at least 15 central schemes");
assert(SCHEMES.states && Object.keys(SCHEMES.states).length > 0, "SCHEMES dataset includes state-specific scheme mapping");

// 2. DETERMINISTIC ELIGIBILITY ENGINE TESTS

// Test A: Low Income Daily Wage Worker (should qualify for PM-JAY & TN State schemes)
const profileLowIncome = {
  name: "Ramu",
  stateCode: "TN",
  stateName: "Tamil Nadu",
  age: 42,
  gender: "male",
  monthlyIncome: 5000, // ₹60,000 / yr <= ₹72,000 CMCHIS limit
  familySize: 4,
  employmentType: "daily_wage",
  healthNeeds: ["surgery"],
  hasAadhaar: true,
  hasRationCard: true,
  hasBankAccount: true
};

const matchesLowIncome = filterSchemesByProfile(profileLowIncome);
assert(matchesLowIncome.some(s => s.id === "pmjay"), "Low income daily wage worker qualifies for Ayushman Bharat PM-JAY");
assert(matchesLowIncome.some(s => s.id === "tn_cchis"), "Tamil Nadu resident earning <= ₹72k qualifies for CMCHIS state scheme");

// Test B: High Income Salaried Employee (should NOT qualify for BPL/income restricted schemes)
const profileHighIncome = {
  name: "Priya",
  stateCode: "TN",
  stateName: "Tamil Nadu",
  age: 35,
  gender: "female",
  monthlyIncome: 60000, // ₹7,20,000 / yr > PM-JAY limit
  familySize: 3,
  employmentType: "salaried",
  healthNeeds: ["general"],
  hasAadhaar: true,
  hasRationCard: false,
  hasBankAccount: true
};

const matchesHighIncome = filterSchemesByProfile(profileHighIncome);
assert(!matchesHighIncome.some(s => s.id === "pmjay"), "High income employee (>₹1.2L/yr) is excluded from PM-JAY BPL filter");

// Test C: Pregnant Female (should qualify for Janani Suraksha Yojana JSY)
const profilePregnant = {
  name: "Anitha",
  stateCode: "BR",
  stateName: "Bihar",
  age: 24,
  gender: "female",
  monthlyIncome: 5000,
  familySize: 2,
  employmentType: "unemployed",
  healthNeeds: ["pregnancy"],
  isPregnant: true,
  hasAadhaar: true,
  hasRationCard: true,
  hasBankAccount: true
};

const matchesPregnant = filterSchemesByProfile(profilePregnant);
assert(matchesPregnant.some(s => s.id === "jsy"), "Pregnant woman qualifies for Janani Suraksha Yojana (JSY)");

// Test D: Non-pregnant male (should NOT qualify for JSY)
const profileMaleNoPreg = {
  name: "Kumar",
  stateCode: "BR",
  stateName: "Bihar",
  age: 28,
  gender: "male",
  monthlyIncome: 5000,
  familySize: 2,
  employmentType: "daily_wage",
  healthNeeds: ["general"],
  isPregnant: false,
  hasAadhaar: true,
  hasRationCard: true,
  hasBankAccount: true
};

const matchesMaleNoPreg = filterSchemesByProfile(profileMaleNoPreg);
assert(!matchesMaleNoPreg.some(s => s.id === "jsy"), "Non-pregnant male is strictly excluded from JSY maternity scheme");

// Test E: Senior Citizen (should qualify for NPHE 60+)
const profileSenior = {
  name: "Grandpa",
  stateCode: "KA",
  stateName: "Karnataka",
  age: 68,
  gender: "male",
  monthlyIncome: 4000,
  familySize: 1,
  employmentType: "unemployed",
  healthNeeds: ["elderly"],
  hasAadhaar: true,
  hasRationCard: true,
  hasBankAccount: true
};

const matchesSenior = filterSchemesByProfile(profileSenior);
assert(matchesSenior.some(s => s.id === "nphe"), "Senior citizen (68 yrs) qualifies for NPHE elderly healthcare scheme");

// Test F: Young adult (should NOT qualify for NPHE 60+)
const profileYoung = {
  name: "Rahul",
  stateCode: "KA",
  stateName: "Karnataka",
  age: 25,
  gender: "male",
  monthlyIncome: 4000,
  familySize: 1,
  employmentType: "daily_wage",
  healthNeeds: ["general"],
  hasAadhaar: true,
  hasRationCard: true,
  hasBankAccount: true
};

const matchesYoung = filterSchemesByProfile(profileYoung);
assert(!matchesYoung.some(s => s.id === "nphe"), "25-year-old young adult is excluded from NPHE elderly scheme");

// 3. FRONTEND FALLBACK ENGINE TESTS
async function testFallback() {
  const fallbackResult = await explainWithClaude(matchesLowIncome, profileLowIncome, "ta", null);
  assert(fallbackResult && fallbackResult.schemes && fallbackResult.schemes.length > 0, "Local fallback generator produces valid structured output");
  assert(typeof fallbackResult.greeting === "string" && fallbackResult.greeting.length > 0, "Fallback response includes localized greeting");
  assert(typeof fallbackResult.disclaimer === "string", "Fallback response preserves statutory disclaimer");

  const chatAnswer = await answerFollowUp("How do I apply?", fallbackResult, profileLowIncome, "ta");
  assert(typeof chatAnswer === "string" && chatAnswer.length > 0, "Follow-up chat fallback produces valid localized answer");
}

testFallback().then(() => {
  console.log(`\n=================================================`);
  console.log(`TEST SUMMARY: ${passed}/${total} TESTS PASSED`);
  console.log(`=================================================\n`);
  if (passed !== total) process.exit(1);
});

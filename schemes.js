const SCHEMES = {
  central: [
    {
      id: "pmjay",
      name: "Ayushman Bharat PM-JAY",
      nameLocal: {
        hi: "आयुष्मान भारत पीएम-जेएवाई",
        ta: "ஆயுஷ்மான் பாரத் பிஎம்-ஜேஏஒய்",
        te: "ఆయుష్మాన్ భారత్ పిఎం-జేఏవై",
        kn: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಪಿಎಂ-ಜೆಎವೈ",
        ml: "ആയുഷ്മാൻ ഭാരത് പിഎം-ജെഎഐ",
        mr: "आयुष्मान भारत पीएम-जेएवाई",
        bn: "আয়ুষ্মান ভারত পিএম-জেএওয়াই",
        gu: "આયુષ્માન ભારત પીએમ-જેએવાય",
        or: "ଆୟୁଷ୍ମାନ ଭାରତ ପିଏମ-ଜେଏୱାଇ",
        pa: "ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ ਪੀਐਮ-ਜੇਏਵਾਈ",
        ur: "آیوشمان بھارت پی ایم جے اے وائی",
        as: "আয়ুষ্মান ভাৰত পিএম-জেএৱাই"
      },
      category: "health_insurance",
      states: "all",
      eligibility: {
        maxAnnualIncome: 120000,
        minAge: 0,
        maxAge: 120,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: false,
        specialConditions: ["BPL family", "SECC 2011 database listed"]
      },
      benefit: "₹5,00,000 health insurance per family per year",
      benefitAmount: 500000,
      benefitType: "insurance",
      urgencyScore: 95,
      applicationSteps: [
        "Visit nearest empanelled government hospital",
        "Carry Aadhaar card of any family member",
        "Ask for Ayushman Bharat desk at the hospital",
        "Get your PM-JAY card made on the spot — it is free"
      ],
      documentsNeeded: ["Aadhaar card", "Ration card (if available)", "Mobile number"],
      officialWebsite: "https://pmjay.gov.in",
      nearestCenterType: "Empanelled hospital or Common Service Centre (CSC)",
      tags: ["insurance", "hospitalization", "family", "surgery", "bpl"]
    },
    {
      id: "pmsby",
      name: "Pradhan Mantri Suraksha Bima Yojana",
      nameLocal: {
        hi: "प्रधानमंत्री सुरक्षा बीमा योजना",
        ta: "பிரதான் மந்திரி சுரக்ஷா பீமா யோஜனா",
        te: "ప్రధాన మంత్రి సురక్షా బీమా యోజన",
        kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಸುರಕ್ಷಾ ಬಿಮಾ ಯೋಜನೆ",
        ml: "പ്രധാൻ മന്ത്രി സുരക്ഷാ ബീമാ യോജന",
        mr: "पंतप्रधान सुरक्षा विमा योजना",
        bn: "প্রধানমন্ত্রী সুরক্ষা বিমা যোজনা",
        gu: "પ્રધાનમંત્રી સુરક્ષા બીમા યોજના",
        or: "ପ୍ରଧାନମନ୍ତ୍ରୀ ସୁରକ୍ଷା ବୀମା ଯୋଜନା",
        pa: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਸੁਰੱਖਿਆ ਬੀਮਾ ਯੋਜਨਾ",
        ur: "پردھان منتری سرکشا بیما یوجنا",
        as: "প্ৰধানমন্ত্ৰী সুৰক্ষা বীমা যোজনা"
      },
      category: "accident_insurance",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 18,
        maxAge: 70,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: true,
        specialConditions: ["Must have bank account linked with auto-debit"]
      },
      benefit: "₹2,00,000 accident death/disability insurance at ₹20/year",
      benefitAmount: 200000,
      benefitType: "insurance",
      urgencyScore: 75,
      applicationSteps: [
        "Visit your bank branch where you have a savings account",
        "Submit PMSBY enrollment form",
        "Enable auto-debit consent for annual premium of ₹20"
      ],
      documentsNeeded: ["Aadhaar card", "Bank passbook", "Mobile number"],
      officialWebsite: "https://jansuraksha.gov.in",
      nearestCenterType: "Your bank branch",
      tags: ["insurance", "accident", "disability", "cheap"]
    },
    {
      id: "pmjjby",
      name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
      nameLocal: {
        hi: "प्रधानमंत्री जीवन ज्योति बीमा योजना",
        ta: "பிரதான் மந்திரி ஜீவன் ஜோதி பீமா யோஜனா",
        te: "ప్రధాన మంత్రి జీవన్ జ్యోతి బీమా యోజన",
        kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಜೀವನ್ ಜ್ಯೋತಿ ಬಿಮಾ ಯೋಜನೆ",
        ml: "പ്രധാൻ മന്ത്രി ജീവൻ ജ്യോതി ബീമാ യോജന",
        mr: "पंतप्रधान जीवन ज्योती विमा योजना",
        bn: "প্রধানমন্ত্রী জীবন জ্যোতি বিমা যোজনা",
        gu: "પ્રધાનમંત્રી જીવન જ્યોતિ બીમા યોજના",
        or: "ପ୍ରଧାନମନ୍ତ୍ରୀ ଜୀବନ ଜ୍ୟୋତି ବୀମା ଯୋଜନା",
        pa: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਜੀਵਨ ਜ್ಯੋਤੀ ਬੀਮਾ ਯੋਜਨਾ",
        ur: "پردھان منتری جیون جیوتی بیما یوجنا",
        as: "প্ৰধানমন্ত্ৰী জীৱন জ্যোতি বীমা যোজনা"
      },
      category: "life_insurance",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 18,
        maxAge: 50,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: true,
        specialConditions: ["Must have bank account linked with auto-debit"]
      },
      benefit: "₹2,00,000 life insurance coverage at ₹436/year",
      benefitAmount: 200000,
      benefitType: "insurance",
      urgencyScore: 70,
      applicationSteps: [
        "Visit your bank branch or log in to mobile banking",
        "Submit PMJJBY consent-cum-declaration form",
        "Ensure balance is available for ₹436 annual auto-debit"
      ],
      documentsNeeded: ["Aadhaar card", "Bank passbook", "Consent form"],
      officialWebsite: "https://jansuraksha.gov.in",
      nearestCenterType: "Your bank branch",
      tags: ["insurance", "life", "cheap", "family"]
    },
    {
      id: "jsy",
      name: "Janani Suraksha Yojana",
      nameLocal: {
        hi: "जननी सुरक्षा योजना",
        ta: "ஜனனி சுரக்ஷா யோஜனா",
        te: "జనని సురక్ష యోజన",
        kn: "ಜನನಿ ಸುರಕ್ಷಾ ಯೋಜನೆ",
        ml: "ജനനി സുരക്ഷാ യോജന",
        mr: "जननी सुरक्षा योजना",
        bn: "জননী সুরক্ষা যোজনা",
        gu: "જનની સુરક્ષા યોજના",
        or: "ଜନନୀ ସୁରକ୍ଷା ଯୋଜନା",
        pa: "ਜਨਨੀ ਸੁਰੱਖਿਆ ਯੋਜਨਾ",
        ur: "جننی سرکشا یوجنا",
        as: "জননী সুৰক্ষা যোজনা"
      },
      category: "maternity",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 19,
        maxAge: 45,
        gender: "female",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: true,
        specialConditions: ["Must be pregnant", "Institutional delivery in government or accredited private hospital"]
      },
      benefit: "₹1,400 cash assistance for rural mothers, ₹1,000 for urban mothers",
      benefitAmount: 1400,
      benefitType: "cash",
      urgencyScore: 90,
      applicationSteps: [
        "Register pregnancy at nearest government primary health centre (PHC) via ASHA worker",
        "Deliver child in a government hospital or accredited private hospital",
        "Submit bank details to ASHA worker for direct cash transfer"
      ],
      documentsNeeded: ["Aadhaar card", "MCP Card (Mother Child Protection Card)", "Bank passbook", "Delivery Certificate"],
      officialWebsite: "https://nhm.gov.in",
      nearestCenterType: "Primary Health Centre (PHC) or Community Health Centre (CHC)",
      tags: ["pregnancy", "maternity", "delivery", "baby", "cash"]
    },
    {
      id: "rsby",
      name: "Rashtriya Swasthya Bima Yojana",
      nameLocal: {
        hi: "राष्ट्रीय स्वास्थ्य बीमा योजना",
        ta: "ராஷ்ட்ரிய ஸ்வஸ்திய பீமா யோஜனா",
        te: "రాష్ట్రీయ స్వస్థ్య బీమా యోజన",
        kn: "ರಾಷ್ಟ್ರೀಯ ಸ್ವಾಸ್ಥ್ಯ ಬಿಮಾ ಯೋಜನೆ",
        ml: "രാഷ്ട്രീയ സ്വാസ്ഥ്യ ബീമാ യോജന",
        mr: "राष्ट्रीय स्वास्थ्य विमा योजना",
        bn: "রাষ্ট্রীয় স্বাস্থ্য বিমা যোজনা",
        gu: "રાષ્ટ્રીય સ્વાસ્થ્ય બીમા યોજના",
        or: "ରାଷ୍ଟ୍ରୀୟ ସ୍ଵାସ୍ଥ୍ୟ ବୀମା ଯୋଜନା",
        pa: "ਰਾਸ਼ਟਰੀ ਸਵਾਸਥ ਬੀਮਾ ਯੋਜਨਾ",
        ur: "راشٹریہ سوستھیہ بیما یوجنا",
        as: "ৰাষ্ট্ৰীয় স্বাস্থ্য বীমা যোজনা"
      },
      category: "health_insurance",
      states: "all",
      eligibility: {
        maxAnnualIncome: 100000,
        minAge: 0,
        maxAge: 120,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
        requiresRationCard: true,
        requiresAadhaar: true,
        requiresBankAccount: false,
        specialConditions: ["BPL (Below Poverty Line) worker in unorganized sector"]
      },
      benefit: "₹30,000 yearly hospitalization coverage for a 5-member family",
      benefitAmount: 30000,
      benefitType: "insurance",
      urgencyScore: 80,
      applicationSteps: [
        "Visit local verification center when the RSBY enrollment team visits your village/district",
        "Pay ₹30 registration fee",
        "Get biometric smart card printed instantly"
      ],
      documentsNeeded: ["Ration card (BPL)", "Aadhaar card", "Panchayat/Municipality certificate"],
      officialWebsite: "http://www.rsby.gov.in",
      nearestCenterType: "District Key Manager or local government hospital",
      tags: ["hospitalization", "bpl", "unorganized", "insurance"]
    },
    {
      id: "nphe",
      name: "National Programme for Healthcare of Elderly",
      nameLocal: {
        hi: "राष्ट्रीय वृद्धजन स्वास्थ्य देखभाल कार्यक्रम",
        ta: "முதியோர்களுக்கான தேசிய சுகாதார திட்டம்",
        te: "వృద్ధుల జాతీయ ఆరోగ్య సంరక్షణ కార్యక్రమం",
        kn: "ಹಿರಿಯ ನಾಗರಿಕರ ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮ",
        ml: "വയോജന ആരോഗ്യ സംരക്ഷണ ദേശീയ പദ്ധതി",
        mr: "राष्ट्रीय ज्येष्ठ नागरिक आरोग्य योजना",
        bn: "জাতীয় প্রবীণ স্বাস্থ্য পরিচর্যা কর্মসূচি",
        gu: "રાષ્ટ્રીય વૃદ્ધ સ્વાસ્થ્ય સંભાળ કાર્યક્રમ",
        or: "ଜାତୀୟ ବୃଦ୍ଧ ସ୍ଵାସ୍ଥ୍ୟ ସେବା କାର୍ଯ୍ୟକ୍ରମ",
        pa: "ਬਜ਼ੁਰਗਾਂ ਦੀ ਸਿਹਤ ਸੰਭਾਲ ਲਈ ਰਾਸ਼ਟਰੀ ਪ੍ਰੋਗਰਾਮ",
        ur: "بزرگوں کی صحت کی دیکھ بھال کا قومی پروگرام",
        as: "ৰাষ্ট্ৰীয় বৃদ্ধ স্বাস্থ্য পৰিচৰ্যা কাৰ্যসূচী"
      },
      category: "elderly_care",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 60,
        maxAge: 120,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: false,
        specialConditions: ["Must be a senior citizen"]
      },
      benefit: "Free OPD services, medicines, assistive devices, and dedicated geriatric wards",
      benefitAmount: 0,
      benefitType: "free_service",
      urgencyScore: 85,
      applicationSteps: [
        "Go to the designated geriatric OPD counter at any district/sub-district government hospital",
        "Show proof of age (Aadhaar or Voter ID)",
        "Receive free consultation, medicines, and diagnostic tests"
      ],
      documentsNeeded: ["Aadhaar card", "Voter ID card (Age proof)"],
      officialWebsite: "https://main.mohfw.gov.in",
      nearestCenterType: "District Government Hospital or Community Health Centre (CHC)",
      tags: ["elderly", "senior", "free_consultation", "opd"]
    },
    {
      id: "esis",
      name: "Employees' State Insurance (ESI) Scheme",
      nameLocal: {
        hi: "कर्मचारी राज्य बीमा योजना",
        ta: "தொழிலாளர் அரசு காப்பீட்டுத் திட்டம்",
        te: "ఉద్యోగుల రాష్ట్ర బీమా పథకం",
        kn: "ನೌಕರರ ರಾಜ್ಯ ವಿಮಾ ಯೋಜನೆ",
        ml: "തൊഴിലാളി സംസ്ഥാന ഇൻഷുറൻസ് പദ്ധതി",
        mr: "कर्मचारी राज्य विमा योजना",
        bn: "কর্মচারী রাজ্য বিমা যোজনা",
        gu: "કર્મચારી રાજ્ય વીમા યોજના",
        or: "କର୍ମଚାରୀ ରାଜ୍ୟ ବୀମା ଯୋଜନା",
        pa: "ਕਰਮਚਾਰੀ ਰਾਜ ਬੀਮਾ ਯੋਜਨਾ",
        ur: "ملازمین کی ریاستی انشورنس اسکیم",
        as: "কৰ্মচাৰী ৰাজ্যিক বীমা আঁচনি"
      },
      category: "health_insurance",
      states: "all",
      eligibility: {
        maxAnnualIncome: 252000,
        minAge: 15,
        maxAge: 65,
        gender: "all",
        employmentTypes: ["salaried"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: true,
        specialConditions: ["Monthly wage must be ₹21,000 or less", "Must work in factory/establishment with 10+ employees"]
      },
      benefit: "Full medical care for self and dependents + sickness and maternity cash benefit",
      benefitAmount: 100000,
      benefitType: "insurance",
      urgencyScore: 70,
      applicationSteps: [
        "Confirm ESIC registration with your employer",
        "Get your Pehchan (ESI) card from employer or download via portal",
        "Visit ESI dispensaries or empanelled hospitals for cashless treatment"
      ],
      documentsNeeded: ["Aadhaar card", "Employer certificate", "Wage slip", "Pehchan card"],
      officialWebsite: "https://www.esic.gov.in",
      nearestCenterType: "ESI Dispensary or ESI Hospital",
      tags: ["salaried", "factory", "worker", "insurance"]
    },
    {
      id: "niramaya",
      name: "Niramaya Health Insurance",
      nameLocal: {
        hi: "निरामय स्वास्थ्य बीमा योजना",
        ta: "நிராமயா காப்பீட்டுத் திட்டம்",
        te: "నిరామయ ఆరోగ్య బీమా పథకం",
        kn: "ನಿರಾಮಯ ಆರೋಗ್ಯ ವಿಮಾ ಯೋಜನೆ",
        ml: "നിരാമയ ആരോഗ്യ ഇൻഷുറൻസ് പദ്ധതി",
        mr: "निरामय आरोग्य विमा योजना",
        bn: "নিরাময় স্বাস্থ্য বিমা যোজনা",
        gu: "નિરામય સ્વાસ્થ્ય વીમા યોજના",
        or: "ନିରାମୟ ସ୍ଵାସ୍ଥ୍ୟ ବୀମਾ ଯୋଜନା",
        pa: "ਨਿਰਾਮਈਆ ਸਿਹਤ ਬੀਮਾ ਯੋਜਨਾ",
        ur: "نیرامیا ہیلتھ انشورنس",
        as: "নিৰাময় স্বাস্থ্য বীমা আঁচনি"
      },
      category: "disability_support",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 0,
        maxAge: 120,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: true,
        specialConditions: ["Must have Autism, Cerebral Palsy, Mental Retardation or Multiple Disabilities"]
      },
      benefit: "₹1,00,000 health insurance cover for persons with developmental disabilities",
      benefitAmount: 100000,
      benefitType: "insurance",
      urgencyScore: 90,
      applicationSteps: [
        "Register online on The National Trust portal or through a registered local organization (NGO)",
        "Pay registration fee of ₹250 (BPL families pay ₹50)",
        "Receive Niramaya health card"
      ],
      documentsNeeded: ["Disability certificate", "Aadhaar card", "Income certificate", "BPL Ration card (for fee concession)"],
      officialWebsite: "https://www.thenationaltrust.gov.in",
      nearestCenterType: "Registered Local NGO / Social Welfare Department",
      tags: ["disability", "special_needs", "insurance", "rehabilitation"]
    },
    {
      id: "uip",
      name: "Universal Immunisation Programme",
      nameLocal: {
        hi: "सार्वभौमिक टीकाकरण कार्यक्रम",
        ta: "உலகளாவிய தடுப்பூசி திட்டம்",
        te: "సార్వత్రిక టీకా కార్యక్రమం",
        kn: "ಸಾರ್ವತ್ರಿಕ ಲಸಿಕಾ ಕಾರ್ಯಕ್ರಮ",
        ml: "സാർവത്രിക പ്രതിരോധ കുത്തിവയ്പ്പ് പദ്ധതി",
        mr: "सार्वत्रिक लसीकरण कार्यक्रम",
        bn: "সার্বজনীন টিকাকরণ কর্মসূচি",
        gu: "સાર્વત્રિક રસીકરણ કાર્યક્રમ",
        or: "ସାର୍ବଜନୀନ ଟୀକାକରଣ କାର୍ଯ୍ୟକ୍ରମ",
        pa: "ਯੂਨੀਵਰਸਲ ਟੀਕਾਕਰਨ ਪ੍ਰੋਗਰਾਮ",
        ur: "عالمی حفاظتی ٹیکہ جات کا پروگرام",
        as: "সাৰ্বজনীন টিকাকৰণ কাৰ্যসূচী"
      },
      category: "vaccination",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 0,
        maxAge: 5,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: false,
        requiresBankAccount: false,
        specialConditions: ["Child under 5 years old or pregnant mother"]
      },
      benefit: "Free vaccines against 12 life-threatening diseases (Polio, BCG, Measles, etc.)",
      benefitAmount: 0,
      benefitType: "free_service",
      urgencyScore: 85,
      applicationSteps: [
        "Take your child to nearest Anganwadi centre or government primary health centre (PHC)",
        "Collect immunization card",
        "Follow immunization schedule for regular free vaccine doses"
      ],
      documentsNeeded: ["Child's birth proof", "Mother's Aadhaar card (optional)"],
      officialWebsite: "https://nhm.gov.in",
      nearestCenterType: "Anganwadi centre or local government clinic/PHC",
      tags: ["vaccination", "baby", "children", "prevention", "free"]
    },
    {
      id: "pmpndp",
      name: "PM National Dialysis Programme",
      nameLocal: {
        hi: "प्रधानमंत्री राष्ट्रीय डायलिसिस कार्यक्रम",
        ta: "பிரதமரின் தேசிய டயாலிசிஸ் திட்டம்",
        te: "ప్రధాన మంత్రి జాతీయ డయాలసిస్ కార్యక్రమం",
        kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ರಾಷ್ಟ್ರೀಯ ಡಯಾಲಿಸಿಸ್ ಕಾರ್ಯಕ್ರಮ",
        ml: "പ്രധാനമന്ത്രിയുടെ ദേശീയ ഡയാലിസിസ് പദ്ധതി",
        mr: "पंतप्रधान राष्ट्रीय डायलिसिस योजना",
        bn: "প্রধানমন্ত্রী জাতীয় ডায়ালিসিস কর্মসূচি",
        gu: "પ્રધાનમંત્રી રાષ્ટ્રીય ડાયાલિસિસ કાર્યક્રમ",
        or: "ପ୍ରଧାନମନ୍ତ୍ରى ଜାତୀୟ ଡାୟାଲିସିସ୍ କାର୍ଯ୍ୟକ୍ରମ",
        pa: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਰਾਸ਼ਟਰੀ ਡਾਇਲਸਿਸ ਪ੍ਰੋਗਰਾਮ",
        ur: "وزیر اعظم قومی ڈائلیسس پروگرام",
        as: "প্ৰধানমন্ত্ৰী ৰাষ্ট্ৰীয় ডায়ালাইছিছ কাৰ্যসূচী"
      },
      category: "dialysis",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 0,
        maxAge: 120,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: true,
        requiresAadhaar: true,
        requiresBankAccount: false,
        specialConditions: ["BPL (Below Poverty Line) patient requiring renal dialysis support"]
      },
      benefit: "Free dialysis service at district hospitals for BPL; low-cost dialysis for APL patients",
      benefitAmount: 50000,
      benefitType: "free_service",
      urgencyScore: 95,
      applicationSteps: [
        "Get dialysis advice from a government nephrologist",
        "Visit the dialysis unit of the nearest empanelled district government hospital",
        "Produce BPL proof to receive free service booking slots"
      ],
      documentsNeeded: ["BPL Ration card", "Doctor's reference letter", "Aadhaar card"],
      officialWebsite: "https://nhm.gov.in",
      nearestCenterType: "District Government Hospital Dialysis Centre",
      tags: ["dialysis", "kidney", "renal", "bpl", "hospitalization"]
    },
    {
      id: "bsy",
      name: "Balika Samridhi Yojana",
      nameLocal: {
        hi: "बालिका समृद्धि योजना",
        ta: "பாலிகா சம்ரிதி யோஜனா",
        te: "బాలికా సమృద్ధి యోజన",
        kn: "ಬಾಲಿಕಾ ಸಮೃದ್ಧಿ ಯೋಜನೆ",
        ml: "ബാലികാ സമൃദ്ധി യോജന",
        mr: "बालिका समृद्धी योजना",
        bn: "বালিকা সমৃদ্ধি যোজনা",
        gu: "બાલિકા સમૃદ્ધિ યોજના",
        or: "ବାଳିକା ସମୃଦ୍ଧି ଯୋଜନା",
        pa: "ਬਾਲਿਕਾ ਸਮ੍ਰਿਧੀ ਯੋਜਨਾ",
        ur: "بالیکا سمردھی یوجنا",
        as: "বালিকা সমৃদ্ধি যোজনা"
      },
      category: "girl_child",
      states: "all",
      eligibility: {
        maxAnnualIncome: 100000,
        minAge: 0,
        maxAge: 18,
        gender: "female",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
        requiresRationCard: true,
        requiresAadhaar: false,
        requiresBankAccount: true,
        specialConditions: ["Must be a girl child born in a BPL family (max 2 girls per family)"]
      },
      benefit: "₹500 post-birth cash grant + annual educational scholarships till class 10",
      benefitAmount: 15000,
      benefitType: "cash",
      urgencyScore: 70,
      applicationSteps: [
        "Obtain application form from local Anganwadi worker or health functionary",
        "Submit the form after the birth of the girl child",
        "Open a bank/post office account in the child's name for scholarship fund accumulation"
      ],
      documentsNeeded: ["Birth certificate", "BPL Ration card", "Parents' Aadhaar card", "Bank passbook"],
      officialWebsite: "https://wcd.nic.in",
      nearestCenterType: "Anganwadi Centre or Integrated Child Development Services (ICDS) office",
      tags: ["girl", "scholarship", "bpl", "baby", "education"]
    },
    {
      id: "nmhp",
      name: "National Mental Health Programme",
      nameLocal: {
        hi: "राष्ट्रीय मानसिक स्वास्थ्य कार्यक्रम",
        ta: "தேசிய மனநல திட்டம்",
        te: "జాతీయ మానసిక ఆరోగ్య కార్యక్రమం",
        kn: "ರಾಷ್ಟ್ರೀಯ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮ",
        ml: "ദേശീയ മാനസികാരോഗ്യ പദ്ധതി",
        mr: "राष्ट्रीय मानसिक आरोग्य योजना",
        bn: "জাতীয় মানসিক স্বাস্থ্য কর্মসূচি",
        gu: "રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય કાર્યક્રમ",
        or: "ଜାତীয় ମାନସିକ ସ୍ଵାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକ୍ରମ",
        pa: "ਰਾਸ਼ਟਰੀ ਮਾਨਸਿਕ ਸਿਹਤ ਪ੍ਰੋਗਰਾम",
        ur: "قومی دماغی صحت کا پروگرام",
        as: "ৰাষ্ট্ৰীয় মানসিক স্বাস্থ্য কাৰ্যসূচী"
      },
      category: "mental_health",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 0,
        maxAge: 120,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: false,
        requiresBankAccount: false,
        specialConditions: ["Any citizen suffering from distress or mental health disorders"]
      },
      benefit: "Free counseling, psychiatric OPD consults, and essential medicines at district clinics",
      benefitAmount: 0,
      benefitType: "free_service",
      urgencyScore: 75,
      applicationSteps: [
        "Visit the District Mental Health Clinic at your district hospital",
        "Request consultation with psychiatrist or clinical psychologist",
        "Collect recommended medications from the hospital counter free of charge"
      ],
      documentsNeeded: ["Aadhaar card (optional)", "District hospital registration card"],
      officialWebsite: "https://main.mohfw.gov.in",
      nearestCenterType: "District Hospital / Mental Health Clinic",
      tags: ["mental_health", "counseling", "psychology", "free", "distress"]
    },
    {
      id: "pmmvy",
      name: "Pradhan Mantri Matru Vandana Yojana",
      nameLocal: {
        hi: "प्रधानमंत्री मातृ वंदना योजना",
        ta: "பிரதான் மந்திரி மாத்ரு வந்தனா யோஜனா",
        te: "ప్రధాన మంత్రి మాతృ వందన యోజన",
        kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಮಾತೃ ವಂದನಾ ಯೋಜನೆ",
        ml: "പ്രധാൻ മന്ത്രി മാതൃ വന്ദേന യോജന",
        mr: "पंतप्रधान मातृ वंदना योजना",
        bn: "প্রধানমন্ত্রী মাতৃ বন্দনা যোজনা",
        gu: "પ્રધાનમંત્રી માતૃ વંદના યોજના",
        or: "ପ୍ରଧାନମନ୍ତ୍ରୀ ମାତୃ ବନ୍ଦନା ଯୋଜନା",
        pa: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਮਾਤਰੂ ਵੰਦਨਾ ਯੋਜਨਾ",
        ur: "پردھان منتری ماترو وندنا یوجنا",
        as: "প্ৰধানমন্ত্ৰী মাতৃ বন্দনা যোজনা"
      },
      category: "maternity",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 19,
        maxAge: 50,
        gender: "female",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
        requiresRationCard: false,
        requiresAadhaar: true,
        requiresBankAccount: true,
        specialConditions: ["Pregnant or lactating mothers for the first living child of family"]
      },
      benefit: "Cash incentive of ₹5,000 paid in three installments directly to bank account",
      benefitAmount: 5000,
      benefitType: "cash",
      urgencyScore: 85,
      applicationSteps: [
        "Register pregnancy at nearest Anganwadi Centre within 150 days of LMP",
        "Fill Form 1A and submit required document copies to Anganwadi worker",
        "Installments credited automatically post health checkups and baby vaccination cycles"
      ],
      documentsNeeded: ["Aadhaar card", "MCP Card", "Bank passbook", "Identity proof of husband"],
      officialWebsite: "https://wcd.nic.in",
      nearestCenterType: "Anganwadi Centre / Local health centre",
      tags: ["pregnancy", "maternity", "baby", "cash"]
    },
    {
      id: "mi",
      name: "Mission Indradhanush",
      nameLocal: {
        hi: "मिशन इन्द्रधनुष",
        ta: "மிஷன் இந்திரதனுஷ்",
        te: "మిషన్ ఇంద్రధనుస్సు",
        kn: "ಮಿಷನ್ ಇಂದ್ರಧನುಷ್",
        ml: "മിഷൻ ഇന്ദ്രധനുഷ്",
        mr: "मिशन इंद्रधनुष",
        bn: "মিশন ইন্দ্রধনুশ",
        gu: "મિશન ઇન્દ્રધનુષ",
        or: "ମିଶନ ଇନ୍ଦ୍ରଧନୁଷ",
        pa: "ਮਿਸ਼ਨ ਇੰਦਰਧਨੁਸ਼",
        ur: "مشن اندر دھنش",
        as: "মিছন ইন্দ্ৰধনু"
      },
      category: "vaccination",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 0,
        maxAge: 2,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: false,
        requiresBankAccount: false,
        specialConditions: ["Unvaccinated or partially vaccinated children under age 2, or pregnant women"]
      },
      benefit: "Special immunization drives targeting high-risk areas to give all missed vaccine doses free",
      benefitAmount: 0,
      benefitType: "free_service",
      urgencyScore: 90,
      applicationSteps: [
        "Locate immunization booths set up in your locality during Mission Indradhanush vaccination week",
        "Carry any previous immunization record card",
        "Get the child/pregnant woman vaccinated on the spot"
      ],
      documentsNeeded: ["Previous immunization record card (optional)"],
      officialWebsite: "https://nhm.gov.in",
      nearestCenterType: "Local immunization camp / Sub-centre",
      tags: ["vaccination", "baby", "health_drive", "free"]
    },
    {
      id: "abhwc",
      name: "Ayushman Bharat Health & Wellness Centres",
      nameLocal: {
        hi: "आयुष्मान भारत आरोग्य मंदिर",
        ta: "ஆயுஷ்மான் பாரத் சுகாதார நல்வாழ்வு மையம்",
        te: "ఆయుష్మాన్ భారత్ ఆరోగ్య కేంద్రాలు",
        kn: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆರೋಗ್ಯ ಮತ್ತು ಕ್ಷೇಮ ಕೇಂದ್ರಗಳು",
        ml: "ആയുഷ്മാൻ ഭാരത് ആരോഗ്യ ക്ഷേമ കേന്ദ്രങ്ങൾ",
        mr: "आयुष्मान भारत आरोग्य मंदिर",
        bn: "আয়ুষ্মান ভারত স্বাস্থ্য ও সুস্থতা কেন্দ্র",
        gu: "આયુષ્માન ભારત હેલ્થ એન્ડ વેલનેસ સેન્ટર",
        or: "ଆୟୁଷ୍ମାନ ଭାରତ ସ୍ଵାସ୍ଥ୍ୟ ଓ କଲ୍ୟାଣ କେନ୍ଦ୍ର",
        pa: "ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ ਸਿਹਤ ਅਤੇ ਤੰਦਰੁਸਤੀ ਕੇਂਦਰ",
        ur: "आयुष्मान भारत हेल्थ एंड वेलनेस सेंटर",
        as: "আয়ুষ্মান ভাৰত স্বাস্থ্য আৰু কল্যাণ কেন্দ্ৰ"
      },
      category: "primary_care",
      states: "all",
      eligibility: {
        maxAnnualIncome: null,
        minAge: 0,
        maxAge: 120,
        gender: "all",
        employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
        requiresRationCard: false,
        requiresAadhaar: false,
        requiresBankAccount: false,
        specialConditions: ["Open to all Indian residents, no restriction"]
      },
      benefit: "Free diagnostic tests, primary care consulting, Yoga sessions, and essential medicines",
      benefitAmount: 0,
      benefitType: "free_service",
      urgencyScore: 60,
      applicationSteps: [
        "Walk in to your nearest Ayushman Bharat Health & Wellness Centre / Sub-centre",
        "Register your name at the counter",
        "Consult medical officer or Community Health Officer (CHO) for free checkup and wellness tests"
      ],
      documentsNeeded: ["Aadhaar card (recommended for health record link)"],
      officialWebsite: "https://ab-hwc.nhp.gov.in",
      nearestCenterType: "Local Health & Wellness Centre (HWC) in your village/locality",
      tags: ["primary_care", "free_tests", "medicines", "wellness", "yoga"]
    }
  ],
  states: {
    TN: [
      {
        id: "tn_cchis",
        name: "Chief Minister's Comprehensive Health Insurance Scheme",
        nameLocal: {
          ta: "முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்",
          en: "Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS)"
        },
        category: "health_insurance",
        states: "TN",
        eligibility: {
          maxAnnualIncome: 72000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Family resident of Tamil Nadu", "Income certificate from Revenue department required"]
        },
        benefit: "₹5,00,000 cashless hospitalization cover per family per year for 1000+ medical procedures",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Obtain family income certificate from local Village Administrative Officer (VAO)",
          "Visit the CMCHIS kiosk at your District Collectorate",
          "Provide biometric details, Aadhaar card, and Ration card",
          "Get the CMCHIS smart card generated"
        ],
        documentsNeeded: ["Smart Ration card", "Aadhaar card of all family members", "Income certificate (under ₹72,000/year)"],
        officialWebsite: "https://www.cmchistn.com",
        nearestCenterType: "District Collectorate Kiosk",
        tags: ["tamilnadu", "insurance", "cashless", "surgery"]
      },
      {
        id: "tn_tnhsp",
        name: "TNHSP Free Medicines Scheme",
        nameLocal: {
          ta: "இலவச மருந்துத் திட்டம்",
          en: "TNHSP Free Essential Drugs Scheme"
        },
        category: "primary_care",
        states: "TN",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
          requiresRationCard: false,
          requiresAadhaar: false,
          requiresBankAccount: false,
          specialConditions: ["Patient receiving treatment at government hospitals in Tamil Nadu"]
        },
        benefit: "Access to 342 essential medicines and diagnostic services free at all public health facilities",
        benefitAmount: 0,
        benefitType: "free_service",
        urgencyScore: 75,
        applicationSteps: [
          "Visit any Tamil Nadu government hospital or Primary Health Centre",
          "Get diagnosis and prescription from government doctor",
          "Show prescription to the in-house pharmacy counter to collect medicines for free"
        ],
        documentsNeeded: ["OPD card / Doctor prescription"],
        officialWebsite: "https://www.tnhealth.tn.gov.in",
        nearestCenterType: "Government Hospital or Primary Health Centre (PHC)",
        tags: ["tamilnadu", "medicines", "free_medicine", "pharmacy"]
      },
      {
        id: "tn_mrmbs",
        name: "Dr. Muthulakshmi Reddy Maternity Benefit Scheme",
        nameLocal: {
          ta: "டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவித் திட்டம்",
          en: "Dr. Muthulakshmi Reddy Maternity Benefit Scheme"
        },
        category: "maternity",
        states: "TN",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 19,
          maxAge: 45,
          gender: "female",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: true,
          specialConditions: ["Pregnant mother residing in Tamil Nadu", "Below Poverty Line (BPL)", "Government hospital utilization"]
        },
        benefit: "Financial assistance of ₹18,000 paid in 5 installments (cash + nutrition kit)",
        benefitAmount: 18000,
        benefitType: "cash",
        urgencyScore: 90,
        applicationSteps: [
          "Register pregnancy at nearest government PHC/Urban Primary Health Centre before 12 weeks",
          "Submit Smart Card details and Aadhaar to health nurse",
          "Collect nutrition kit (Poshan Kit) at PHC; cash will transfer directly to bank account on milestones"
        ],
        documentsNeeded: ["Smart Ration card", "Aadhaar card", "PICME Registration Number", "Bank passbook"],
        officialWebsite: "https://www.tnhealth.tn.gov.in",
        nearestCenterType: "Primary Health Centre (PHC) or Community Health Nurse",
        tags: ["tamilnadu", "pregnancy", "maternity", "cash", "nutrition"]
      }
    ],
    MH: [
      {
        id: "mh_mjpjay",
        name: "Mahatma Jyotiba Phule Jan Arogya Yojana",
        nameLocal: {
          mr: "महात्मा ज्योतिबा फुले जन आरोग्य योजना",
          en: "Mahatma Jyotiba Phule Jan Arogya Yojana"
        },
        category: "health_insurance",
        states: "MH",
        eligibility: {
          maxAnnualIncome: 100000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Holder of Yellow, Orange, Antyodaya or Annapurna Ration Card in Maharashtra"]
        },
        benefit: "Cashless medical insurance coverage of up to ₹1,50,000 per family per year for 971 therapies/procedures",
        benefitAmount: 150000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Identify an empanelled government or private hospital in Maharashtra",
          "Meet the Aarogyamitra at the hospital desk",
          "Provide Aadhaar and eligible Ration card for verification",
          "Get admission and cashless treatment approval from the portal"
        ],
        documentsNeeded: ["Yellow or Orange Ration card", "Aadhaar card / Voter ID", "Doctor diagnosis sheet"],
        officialWebsite: "https://www.jeevandayee.gov.in",
        nearestCenterType: "Aarogyamitra desk at any empanelled hospital in Maharashtra",
        tags: ["maharashtra", "insurance", "cashless", "bpl"]
      }
    ],
    KA: [
      {
        id: "ka_ak",
        name: "Arogya Karnataka Scheme",
        nameLocal: {
          kn: "ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಯೋಜನೆ",
          en: "Arogya Karnataka Scheme"
        },
        category: "health_insurance",
        states: "KA",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
          requiresRationCard: false,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Karnataka", "Divided into Eligible Category (Free for BPL) and General Category (Low-cost co-payment)"]
        },
        benefit: "Up to ₹5,00,000 per year free for BPL family (co-branded with PMJAY), and subsidised costs for APL families",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Visit nearest government health facility / Registration centre in Karnataka",
          "Present your Aadhaar card and Ration card to get an 'ArkaID' health card",
          "Show your ArkaID for cashless treatment reference when admitted"
        ],
        documentsNeeded: ["Aadhaar card", "Ration card (BPL card for complete free cover)"],
        officialWebsite: "https://arogya.karnataka.gov.in",
        nearestCenterType: "Government Hospital or Arogya Karnataka Registration desk",
        tags: ["karnataka", "insurance", "cashless", "universal"]
      },
      {
        id: "ka_va",
        name: "Vajpayee Arogyashree Scheme",
        nameLocal: {
          kn: "ವಾಜಪೇಯಿ ಆರೋಗ್ಯಶ್ರೀ ಯೋಜನೆ",
          en: "Vajpayee Arogyashree Scheme"
        },
        category: "health_insurance",
        states: "KA",
        eligibility: {
          maxAnnualIncome: 120000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Karnataka resident holding BPL card", "Covers major critical illnesses like cancer, cardiac, neurological"]
        },
        benefit: "Cashless coverage of up to ₹5,00,000 for critical surgeries and hospitalizations in super-specialty units",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 90,
        applicationSteps: [
          "Get diagnosed for critical illness at a local government referral hospital",
          "Contact Arogyamitra at the referral desk to approve online requisition",
          "Report to the empanelled private super-specialty hospital for cashless surgery scheduling"
        ],
        documentsNeeded: ["BPL Card (Ration card)", "Aadhaar card", "Referral letter from government hospital"],
        officialWebsite: "https://arogya.karnataka.gov.in",
        nearestCenterType: "Empanelled Super-specialty Hospital or government referral hub",
        tags: ["karnataka", "bpl", "surgery", "critical_illness", "insurance"]
      }
    ],
    AP: [
      {
        id: "ap_ysr",
        name: "Dr. YSR Aarogyasri Health Scheme",
        nameLocal: {
          te: "డాక్టర్ వైఎస్ఆర్ ఆరోగ్యశ్రీ పథకం",
          en: "Dr. YSR Aarogyasri Health Scheme"
        },
        category: "health_insurance",
        states: "AP",
        eligibility: {
          maxAnnualIncome: 500000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Andhra Pradesh", "Must hold Rice card / BPL Ration Card"]
        },
        benefit: "Cashless treatment of up to ₹5,00,000 per family per year for 2500+ procedures, covering post-discharge care",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Visit any health kiosk/government hospital in Andhra Pradesh",
          "Contact the Aarogyamitra helper at the health desk",
          "Provide Rice Card or Aadhaar details to match database",
          "Aarogyamitra coordinates cashless authorization with hospital doctors"
        ],
        documentsNeeded: ["AP Rice card / Aarogyasri trust card", "Aadhaar card"],
        officialWebsite: "https://www.ysraarogyasri.ap.gov.in",
        nearestCenterType: "Aarogyamitra helpdesk at any public or registered private hospital",
        tags: ["andhrapradesh", "insurance", "cashless", "rice_card"]
      }
    ],
    TG: [
      {
        id: "tg_as",
        name: "Aarogyasri Health Care Trust",
        nameLocal: {
          te: "ఆరోగ్యశ్రీ హెల్త్ కేర్ ట్రస్ట్ పథకం",
          en: "Telangana Aarogyasri Scheme"
        },
        category: "health_insurance",
        states: "TG",
        eligibility: {
          maxAnnualIncome: 150000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Telangana State", "Must hold Food Security Card (FSC) / BPL card"]
        },
        benefit: "₹5,00,000 cashless medical care per family per year for surgical and therapy treatments",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Consult general physician at a network hospital in Telangana",
          "Approach Aarogyasri desk setup within the hospital premises",
          "Provide biometric auth or FSC Ration card scan",
          "Trust pre-authorization team reviews and clears patient bill cashless"
        ],
        documentsNeeded: ["Food Security Card (Ration card)", "Aadhaar card"],
        officialWebsite: "https://aarogyasri.telangana.gov.in",
        nearestCenterType: "Empanelled Network Hospital Aarogyasri Counter",
        tags: ["telangana", "insurance", "cashless", "bpl"]
      }
    ],
    KL: [
      {
        id: "kl_khs",
        name: "Karunya Health Scheme (KASP)",
        nameLocal: {
          ml: "കാരുണ്യ ആരോഗ്യ സുരക്ഷാ പദ്ധതി",
          en: "Karunya Health Security Scheme"
        },
        category: "health_insurance",
        states: "KL",
        eligibility: {
          maxAnnualIncome: 300000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Kerala", "Income certificate or BPL/APL family status list match"]
        },
        benefit: "Cashless treatment of up to ₹3,00,000 for families for kidney, cancer, cardiovascular diseases, and transplant care",
        benefitAmount: 300000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Obtain disease and cost estimate from treating government hospital specialist in Kerala",
          "Visit Karunya desk at the hospital or apply via District Lottery Welfare office",
          "Submit estimation details along with Aadhaar and Ration card details",
          "Funds are disbursed cashless directly to hospital account"
        ],
        documentsNeeded: ["Ration card", "Income certificate", "Aadhaar card", "Medical estimation report from doctor"],
        officialWebsite: "http://www.karunya.kerala.gov.in",
        nearestCenterType: "KASP Desk at Government Medical Colleges / District collectorate",
        tags: ["kerala", "insurance", "cancer", "catastrophic", "cashless"]
      }
    ],
    WB: [
      {
        id: "wb_ss",
        name: "Swasthya Sathi Scheme",
        nameLocal: {
          bn: "স্বাস্থ্য সাথী প্রকল্প",
          en: "Swasthya Sathi Scheme"
        },
        category: "health_insurance",
        states: "WB",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
          requiresRationCard: false,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["West Bengal resident family", "Health card is officially issued in the name of the eldest female member of the family"]
        },
        benefit: "Basic health cover of ₹5,00,000 per family per year for tertiary and secondary hospitalization",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Fill Form A or Form B distributed during local Duare Sarkar (Government at your doorstep) camps in Bengal",
          "Submit family details to camp desk operator",
          "Get smart card printed at the camp following biometric scanning of the eldest female head",
          "Card works for cashless admissions instantly at network hospitals"
        ],
        documentsNeeded: ["Aadhaar card", "Ration card / Khadya Sathi card", "Duare Sarkar application receipt"],
        officialWebsite: "https://swasthyasathi.gov.in",
        nearestCenterType: "Duare Sarkar Camp or Municipality/Panchayat office",
        tags: ["westbengal", "insurance", "female_head", "cashless"]
      }
    ],
    GJ: [
      {
        id: "gj_mavy",
        name: "Mukhyamantri Amrutam (MA) Vatsalya Yojana",
        nameLocal: {
          gu: "મુખ્યમંત્રી અમૃતમ વાત્સલ્ય યોજના",
          en: "Mukhyamantri Amrutam Vatsalya Yojana"
        },
        category: "health_insurance",
        states: "GJ",
        eligibility: {
          maxAnnualIncome: 400000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Gujarat", "Ration Card holder", "Income under ₹4,00,000 per year"]
        },
        benefit: "Cashless medical treatment of up to ₹3,00,000 per family per year for major illnesses and surgeries",
        benefitAmount: 300000,
        benefitType: "insurance",
        urgencyScore: 90,
        applicationSteps: [
          "Visit the civic centre (Jan Seva Kendra) at the taluka/district headquarter in Gujarat",
          "Provide Income certificate verified by Mamlatdar/TDO",
          "Biometrics and photos are captured on spot",
          "Get the MA Card issued instantly"
        ],
        documentsNeeded: ["Aadhaar card", "Income certificate", "Ration Card", "Identity proof"],
        officialWebsite: "https://www.magujarat.com",
        nearestCenterType: "Jan Seva Kendra / District Civil Hospital",
        tags: ["gujarat", "insurance", "cashless", "surgery"]
      }
    ],
    RJ: [
      {
        id: "rj_ccsby",
        name: "Chief Minister Chiranjeevi Swasthya Bima Yojana",
        nameLocal: {
          hi: "मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा योजना",
          en: "Mukhyamantri Chiranjeevi Swasthya Bima Yojana"
        },
        category: "health_insurance",
        states: "RJ",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
          requiresRationCard: false,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident family of Rajasthan", "Free for BPL, small farmers, and contract workers; Others can pay nominal ₹850/year premium"]
        },
        benefit: "Up to ₹25,00,000 medical insurance cover per family per year (highest state coverage in India)",
        benefitAmount: 2500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Register online on Rajasthan Single Sign-On (SSO) portal or via E-Mitra kiosk",
          "Submit Jan Aadhaar Card number for family details verification",
          "Pay ₹850 premium if not categorized under free category; get registration receipt printout",
          "Present Jan Aadhaar Card at hospital reception for cashless treatment access"
        ],
        documentsNeeded: ["Jan Aadhaar Card", "Aadhaar Card", "E-mitra receipt"],
        officialWebsite: "https://chiranjeevi.rajasthan.gov.in",
        nearestCenterType: "E-Mitra Kiosk in Rajasthan",
        tags: ["rajasthan", "insurance", "highest_cover", "cashless", "jan_aadhaar"]
      }
    ],
    BR: [
      {
        id: "br_mcsj",
        name: "Mukhyamantri Chikitsa Sahayata Kosh BR",
        nameLocal: {
          hi: "मुख्यमंत्री चिकित्सा सहायता कोष बिहार",
          en: "Bihar Chief Minister Medical Assistance Fund"
        },
        category: "health_support",
        states: "BR",
        eligibility: {
          maxAnnualIncome: 150000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: true,
          specialConditions: ["Resident of Bihar state", "Must hold BPL ration card or income certificate under limit", "For treatment of critical ailments"]
        },
        benefit: "One-time financial grant of ₹10,000 to ₹1,50,000 for critical surgeries/medical procedures",
        benefitAmount: 150000,
        benefitType: "cash_grant",
        urgencyScore: 90,
        applicationSteps: [
          "Obtain an application form from your District Magistrate office or Civil Surgeon office in Bihar",
          "Attach treating hospital prescription, diagnosis reports, and cost estimate",
          "Get the form signed by Civil Surgeon and submit to DM office",
          "Fund approved is directly paid to the treating hospital account"
        ],
        documentsNeeded: ["BPL Ration Card", "Aadhaar Card", "Hospital diagnosis report & surgery cost estimation", "Income certificate"],
        officialWebsite: "https://health.bihar.gov.in",
        nearestCenterType: "District Civil Surgeon Office / Collectorate in Bihar",
        tags: ["bihar", "grant", "critical_care", "surgery"]
      }
    ],
    UP: [
      {
        id: "up_mjsay",
        name: "Mukhyamantri Jan Arogya Yojana UP",
        nameLocal: {
          hi: "मुख्यमंत्री जन आरोग्य योजना उत्तर प्रदेश",
          en: "UP Chief Minister Jan Arogya Yojana"
        },
        category: "health_insurance",
        states: "UP",
        eligibility: {
          maxAnnualIncome: 100000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Uttar Pradesh", "Ration card holder omitted from PMJAY list but verified under BPL criteria"]
        },
        benefit: "₹5,00,000 health insurance cover per family per year for tertiary and secondary hospitalization care",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Check name in UP Jan Arogya list at nearest government hospital kiosk",
          "Present Aadhaar card and Ration card to local health worker / kiosk representative",
          "Get biometric verification done",
          "Receive free CM Jan Arogya card for cashless network hospital admissions"
        ],
        documentsNeeded: ["Aadhaar card", "Ration card", "UP Resident Certificate"],
        officialWebsite: "https://uphealth.up.nic.in",
        nearestCenterType: "District Government Hospital Kiosk / CSC",
        tags: ["uttarpradesh", "insurance", "cashless", "bpl"]
      }
    ],
    PB: [
      {
        id: "pb_ssby",
        name: "Sarbat Sehat Bima Yojana (AB-SSBY)",
        nameLocal: {
          pa: "ਸਰਬੱਤ ਸਿਹਤ ਬੀਮਾ ਯੋਜਨਾ",
          en: "Sarbat Sehat Bima Yojana Punjab"
        },
        category: "health_insurance",
        states: "PB",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Punjab", "Covers smart ration card holders, marginal farmers, construction workers, small traders"]
        },
        benefit: "₹5,00,000 cashless health insurance cover per family per year at public and private hospitals in Punjab",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Check eligibility status online or visit nearest Common Service Centre (CSC) in Punjab",
          "Present Aadhaar card, smart ration card, or construction worker registration card",
          "Generate your SSBY e-card for cashless checkin at hospital receptions"
        ],
        documentsNeeded: ["Aadhaar card", "Smart Ration card / Farmer ID card", "Mobile number"],
        officialWebsite: "https://www.shapunjab.in",
        nearestCenterType: "Common Service Centre (CSC) or local government hospital",
        tags: ["punjab", "insurance", "farmer", "cashless"]
      }
    ],
    OR: [
      {
        id: "or_bsky",
        name: "Biju Swasthya Kalyan Yojana",
        nameLocal: {
          or: "ବିଜୁ ସ୍ଵାସ୍ଥ្យ କଲ୍ୟାଣ ଯୋଜନା",
          en: "Biju Swasthya Kalyan Yojana Odisha"
        },
        category: "health_insurance",
        states: "OR",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "other"],
          requiresRationCard: true,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Odisha state", "Must hold National Food Security Act (NFSA) / State Food Security Scheme (SFSS) card"]
        },
        benefit: "₹5,00,000 cover for male/general and ₹10,00,000 for female family members per year for tertiary care",
        benefitAmount: 500000,
        benefitType: "insurance",
        urgencyScore: 95,
        applicationSteps: [
          "Odisha government automatically links all NFSA/SFSS cardholders to BSKY system",
          "Present your BSKY health card or Smart Ration Card at BSKY desk of empanelled hospital",
          "Swasthya Mitra at the hospital initiates biometric verification and processes cashless approval"
        ],
        documentsNeeded: ["NFSA/SFSS Smart Card", "Aadhaar Card"],
        officialWebsite: "https://www.bsky.odisha.gov.in",
        nearestCenterType: "BSKY Helpdesk at any empanelled hospital in Odisha",
        tags: ["odisha", "insurance", "female_benefit", "cashless", "bpl"]
      }
    ],
    AS: [
      {
        id: "as_aaa",
        name: "Atal Amrit Abhiyan",
        nameLocal: {
          as: "অটল অমৃত অভিযান",
          en: "Atal Amrit Abhiyan Assam"
        },
        category: "health_insurance",
        states: "AS",
        eligibility: {
          maxAnnualIncome: 120000,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer"],
          requiresRationCard: false,
          requiresAadhaar: true,
          requiresBankAccount: false,
          specialConditions: ["Resident of Assam state", "Income certificate from Circle Officer, covers 6 critical disease categories (Cardiovascular, Renal, Cancer, Burn, Neurological, Neonatal)"]
        },
        benefit: "₹2,00,000 cashless medical care coverage per year per individual for critical illnesses",
        benefitAmount: 200000,
        benefitType: "insurance",
        urgencyScore: 90,
        applicationSteps: [
          "Visit the Atal Amrit enrollment camp at your local block headquarter in Assam",
          "Pay ₹10 card registration fee",
          "Provide biometrics and submit verified family income certificate",
          "Get the laminated AAA health card"
        ],
        documentsNeeded: ["Aadhaar card", "Income certificate (under ₹1.2 Lakhs/year)", "Assam voter ID/residency certificate"],
        officialWebsite: "https://atalamritabhiyan.assam.gov.in",
        nearestCenterType: "Block Office / local government hospital booth",
        tags: ["assam", "insurance", "critical_illness", "cashless"]
      }
    ],
    DL: [
      {
        id: "dl_mnc",
        name: "Aam Aadmi Mohalla Clinic Network",
        nameLocal: {
          hi: "आम आदमी मोहल्ला क्लिनिक",
          en: "Mohalla Clinic Delhi"
        },
        category: "primary_care",
        states: "DL",
        eligibility: {
          maxAnnualIncome: null,
          minAge: 0,
          maxAge: 120,
          gender: "all",
          employmentTypes: ["daily_wage", "unemployed", "self_employed", "farmer", "salaried", "other"],
          requiresRationCard: false,
          requiresAadhaar: false,
          requiresBankAccount: false,
          specialConditions: ["Open to all residents of Delhi, no eligibility restrictions"]
        },
        benefit: "Free outpatient consultation, 212 types of diagnostic tests, and over 100 essential medicines",
        benefitAmount: 0,
        benefitType: "free_service",
        urgencyScore: 75,
        applicationSteps: [
          "Walk in to your nearest Mohalla Clinic in Delhi during clinic hours (generally 8 AM to 2 PM)",
          "Register your name at the registration desk",
          "Get examined by doctor, take free diagnostic blood tests if required, and collect medicines on spot"
        ],
        documentsNeeded: ["Any ID proof (recommended, but not mandatory)"],
        officialWebsite: "https://delhi.gov.in",
        nearestCenterType: "Local Mohalla Clinic in your neighborhood",
        tags: ["delhi", "primary_care", "free_medicine", "free_tests", "opd"]
      }
    ]
  }
};

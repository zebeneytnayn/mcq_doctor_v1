export interface Question {
  id: number;
  specialty: string;
  subtopic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const questions: Question[] = [
  // Cardiology Questions
  {
    id: 1,
    specialty: "Cardiology",
    subtopic: "Arrhythmias",
    difficulty: "Medium",
    question: "A 68-year-old male presents with palpitations and dizziness. ECG shows irregularly irregular rhythm with absence of P waves and variable R-R intervals. What is the most appropriate initial management?",
    options: {
      A: "Immediate cardioversion",
      B: "Rate control with beta-blockers",
      C: "Adenosine 6mg IV push",
      D: "Observation only"
    },
    correctAnswer: "B",
    explanation: "This patient has atrial fibrillation (AF). Initial management focuses on rate control unless the patient is hemodynamically unstable. Beta-blockers or calcium channel blockers are first-line for rate control in stable AF."
  },
  {
    id: 2,
    specialty: "Cardiology",
    subtopic: "Heart Failure",
    difficulty: "Hard",
    question: "A 55-year-old woman with known heart failure with reduced ejection fraction (HFrEF) presents with worsening dyspnea. Current medications include lisinopril, metoprolol, and furosemide. Which medication should be added next according to guidelines?",
    options: {
      A: "Digoxin",
      B: "Spironolactone",
      C: "Hydralazine",
      D: "Amlodipine"
    },
    correctAnswer: "B",
    explanation: "Mineralocorticoid receptor antagonists (MRAs) like spironolactone are guideline-directed medical therapy for HFrEF and have been shown to reduce mortality. They should be added to ACE inhibitors and beta-blockers in appropriate patients."
  },
  {
    id: 3,
    specialty: "Cardiology",
    subtopic: "Acute Coronary Syndrome",
    difficulty: "Medium",
    question: "A 62-year-old diabetic male presents with chest pain for 2 hours. ECG shows ST-segment elevation in leads II, III, and aVF. Which coronary artery is most likely occluded?",
    options: {
      A: "Left anterior descending artery",
      B: "Left circumflex artery",
      C: "Right coronary artery",
      D: "Left main coronary artery"
    },
    correctAnswer: "C",
    explanation: "ST-elevation in the inferior leads (II, III, aVF) indicates inferior wall MI, which is typically caused by occlusion of the right coronary artery (RCA) in most patients."
  },
  {
    id: 4,
    specialty: "Cardiology",
    subtopic: "Valvular Disease",
    difficulty: "Easy",
    question: "A patient with severe aortic stenosis typically presents with which classic triad of symptoms?",
    options: {
      A: "Chest pain, syncope, and dyspnea",
      B: "Fever, rash, and joint pain",
      C: "Headache, visual changes, and seizures",
      D: "Cough, hemoptysis, and wheezing"
    },
    correctAnswer: "A",
    explanation: "The classic triad of severe aortic stenosis includes angina (chest pain), syncope, and dyspnea on exertion. These symptoms indicate critical stenosis and warrant intervention."
  },
  {
    id: 5,
    specialty: "Cardiology",
    subtopic: "Hypertension",
    difficulty: "Easy",
    question: "A 45-year-old African American male is newly diagnosed with hypertension (BP 158/96). He has no other comorbidities. What is the most appropriate first-line antihypertensive?",
    options: {
      A: "ACE inhibitor",
      B: "Calcium channel blocker",
      C: "Beta-blocker",
      D: "Alpha-blocker"
    },
    correctAnswer: "B",
    explanation: "For African American patients without compelling indications, calcium channel blockers or thiazide diuretics are preferred first-line agents as they have been shown to be more effective than ACE inhibitors in this population."
  },

  // Surgery Questions
  {
    id: 6,
    specialty: "Surgery",
    subtopic: "Acute Abdomen",
    difficulty: "Medium",
    question: "A 35-year-old woman presents with sudden onset right lower quadrant pain, nausea, and fever. On examination, there is rebound tenderness at McBurney's point. What is the most likely diagnosis?",
    options: {
      A: "Acute cholecystitis",
      B: "Acute appendicitis",
      C: "Ectopic pregnancy",
      D: "Ovarian torsion"
    },
    correctAnswer: "B",
    explanation: "McBurney's point tenderness (located 1/3 the distance from the anterior superior iliac spine to the umbilicus) is a classic finding in acute appendicitis, along with fever, nausea, and RLQ pain."
  },
  {
    id: 7,
    specialty: "Surgery",
    subtopic: "Trauma",
    difficulty: "Hard",
    question: "A 28-year-old male involved in a motor vehicle accident presents with hypotension, distended neck veins, and muffled heart sounds. What is the most appropriate immediate intervention?",
    options: {
      A: "Chest tube insertion",
      B: "Pericardiocentesis",
      C: "Emergency thoracotomy",
      D: "Fluid resuscitation"
    },
    correctAnswer: "B",
    explanation: "This patient presents with Beck's triad (hypotension, distended neck veins, muffled heart sounds) indicating cardiac tamponade. Immediate pericardiocentesis is required to relieve the pressure on the heart."
  },
  {
    id: 8,
    specialty: "Surgery",
    subtopic: "Hernias",
    difficulty: "Easy",
    question: "Which type of hernia passes through Hesselbach's triangle?",
    options: {
      A: "Indirect inguinal hernia",
      B: "Direct inguinal hernia",
      C: "Femoral hernia",
      D: "Umbilical hernia"
    },
    correctAnswer: "B",
    explanation: "Direct inguinal hernias protrude through Hesselbach's triangle (bounded by the inguinal ligament, inferior epigastric vessels, and rectus abdominis muscle), while indirect hernias pass through the internal inguinal ring."
  },
  {
    id: 9,
    specialty: "Surgery",
    subtopic: "Vascular",
    difficulty: "Medium",
    question: "A 70-year-old male smoker presents with severe tearing chest pain radiating to the back. CT angiography shows widening of the mediastinum. What is the most likely diagnosis?",
    options: {
      A: "Myocardial infarction",
      B: "Pulmonary embolism",
      C: "Aortic dissection",
      D: "Esophageal rupture"
    },
    correctAnswer: "C",
    explanation: "Tearing chest pain radiating to the back with widened mediastinum on imaging is classic for aortic dissection. Risk factors include hypertension, smoking, and advanced age."
  },
  {
    id: 10,
    specialty: "Surgery",
    subtopic: "Breast",
    difficulty: "Easy",
    question: "A 52-year-old woman has a 2cm breast mass. Biopsy shows invasive ductal carcinoma. Sentinel lymph node is negative. What is the appropriate surgical management?",
    options: {
      A: "Lumpectomy with radiation",
      B: "Mastectomy only",
      C: "Lumpectomy only",
      D: "No surgery needed"
    },
    correctAnswer: "A",
    explanation: "For early-stage breast cancer with negative lymph nodes, breast-conserving therapy (lumpectomy with radiation) is equivalent to mastectomy in terms of survival and is the preferred option when feasible."
  },

  // Internal Medicine Questions
  {
    id: 11,
    specialty: "Internal Medicine",
    subtopic: "Endocrinology",
    difficulty: "Medium",
    question: "A 42-year-old woman presents with weight gain, purple striae, and easy bruising. Laboratory studies show elevated 24-hour urinary cortisol and failure to suppress with low-dose dexamethasone. What is the next best step?",
    options: {
      A: "Abdominal CT",
      B: "High-dose dexamethasone suppression test",
      C: "ACTH level",
      D: "Pituitary MRI"
    },
    correctAnswer: "C",
    explanation: "After confirming hypercortisolism, the next step is to measure ACTH level to differentiate between ACTH-dependent (pituitary or ectopic) and ACTH-independent (adrenal) causes of Cushing's syndrome."
  },
  {
    id: 12,
    specialty: "Internal Medicine",
    subtopic: "Nephrology",
    difficulty: "Hard",
    question: "A patient with chronic kidney disease has a serum potassium of 6.8 mEq/L. ECG shows peaked T waves. What is the first medication to administer?",
    options: {
      A: "Insulin and dextrose",
      B: "Calcium gluconate",
      C: "Sodium polystyrene sulfonate",
      D: "Furosemide"
    },
    correctAnswer: "B",
    explanation: "In severe hyperkalemia with ECG changes, calcium gluconate should be given first to stabilize cardiac membranes and prevent arrhythmias. Then, measures to shift potassium intracellularly (insulin/dextrose) and remove it from the body can follow."
  },
  {
    id: 13,
    specialty: "Internal Medicine",
    subtopic: "Gastroenterology",
    difficulty: "Medium",
    question: "A 45-year-old man with chronic hepatitis C develops ascites and peripheral edema. Paracentesis shows SAAG >1.1 g/dL. What does this indicate?",
    options: {
      A: "Infectious peritonitis",
      B: "Portal hypertension",
      C: "Malignant ascites",
      D: "Nephrotic syndrome"
    },
    correctAnswer: "B",
    explanation: "Serum-ascites albumin gradient (SAAG) >1.1 g/dL indicates portal hypertension-related ascites, commonly seen in cirrhosis. SAAG <1.1 suggests other causes like malignancy or infection."
  },
  {
    id: 14,
    specialty: "Internal Medicine",
    subtopic: "Rheumatology",
    difficulty: "Easy",
    question: "A 30-year-old woman presents with joint pain, malar rash, and photosensitivity. ANA is positive. What is the most likely diagnosis?",
    options: {
      A: "Rheumatoid arthritis",
      B: "Systemic lupus erythematosus",
      C: "Dermatomyositis",
      D: "Scleroderma"
    },
    correctAnswer: "B",
    explanation: "The combination of malar rash, photosensitivity, arthritis, and positive ANA is highly suggestive of systemic lupus erythematosus (SLE). These are part of the diagnostic criteria for SLE."
  },
  {
    id: 15,
    specialty: "Internal Medicine",
    subtopic: "Pulmonology",
    difficulty: "Medium",
    question: "A 65-year-old smoker presents with chronic cough and dyspnea. Spirometry shows FEV1/FVC ratio of 0.65. What is the diagnosis?",
    options: {
      A: "Asthma",
      B: "Chronic obstructive pulmonary disease",
      C: "Interstitial lung disease",
      D: "Pulmonary hypertension"
    },
    correctAnswer: "B",
    explanation: "FEV1/FVC ratio <0.70 indicates obstructive lung disease. In a smoker with chronic symptoms, COPD is the most likely diagnosis. Asthma would typically show reversibility with bronchodilators."
  },

  // Neurology Questions
  {
    id: 16,
    specialty: "Neurology",
    subtopic: "Stroke",
    difficulty: "Hard",
    question: "A 70-year-old man presents with sudden onset right-sided weakness and aphasia 2 hours ago. CT head shows no hemorrhage. BP is 185/110. What is the contraindication to thrombolysis?",
    options: {
      A: "Blood pressure elevation",
      B: "Age over 65",
      C: "Time of symptom onset",
      D: "Presence of aphasia"
    },
    correctAnswer: "A",
    explanation: "Blood pressure >185/110 mmHg is a relative contraindication to thrombolysis and must be lowered to <185/110 before tPA can be administered. The other options are not contraindications within the 4.5-hour window."
  },
  {
    id: 17,
    specialty: "Neurology",
    subtopic: "Seizures",
    difficulty: "Medium",
    question: "A 25-year-old woman has a witnessed tonic-clonic seizure. It is her first seizure. What is the most appropriate next step?",
    options: {
      A: "Start antiepileptic medication",
      B: "MRI brain and EEG",
      C: "Lumbar puncture",
      D: "Observation only"
    },
    correctAnswer: "B",
    explanation: "After a first seizure, workup should include brain imaging (MRI preferred) and EEG to identify structural lesions or epileptiform activity. Antiepileptic medication is typically not started after a single unprovoked seizure unless high risk of recurrence."
  },
  {
    id: 18,
    specialty: "Neurology",
    subtopic: "Movement Disorders",
    difficulty: "Easy",
    question: "A 68-year-old man presents with resting tremor, bradykinesia, and rigidity. What is the most likely diagnosis?",
    options: {
      A: "Essential tremor",
      B: "Parkinson's disease",
      C: "Huntington's disease",
      D: "Multiple sclerosis"
    },
    correctAnswer: "B",
    explanation: "The classic triad of Parkinson's disease is resting tremor, bradykinesia, and rigidity. Essential tremor typically occurs with action/intention, not at rest."
  },
  {
    id: 19,
    specialty: "Neurology",
    subtopic: "Headache",
    difficulty: "Medium",
    question: "A 28-year-old woman has recurrent unilateral throbbing headaches with photophobia and nausea lasting 6-24 hours. What is the most appropriate abortive treatment?",
    options: {
      A: "Propranolol",
      B: "Sumatriptan",
      C: "Acetaminophen",
      D: "Verapamil"
    },
    correctAnswer: "B",
    explanation: "This patient has migraine headaches. Triptans (like sumatriptan) are first-line abortive therapy for moderate to severe migraines. Propranolol and verapamil are prophylactic medications."
  },
  {
    id: 20,
    specialty: "Neurology",
    subtopic: "Dementia",
    difficulty: "Easy",
    question: "A 75-year-old presents with progressive memory loss over 2 years. Mini-Mental State Examination score is 18/30. What is the most likely diagnosis?",
    options: {
      A: "Delirium",
      B: "Alzheimer's disease",
      C: "Depression",
      D: "Normal aging"
    },
    correctAnswer: "B",
    explanation: "Progressive memory loss with cognitive impairment (MMSE <24 indicates cognitive impairment) over years is most consistent with Alzheimer's disease, the most common cause of dementia in the elderly."
  },

  // Pediatrics Questions
  {
    id: 21,
    specialty: "Pediatrics",
    subtopic: "Infectious Disease",
    difficulty: "Medium",
    question: "A 4-year-old presents with barking cough, stridor, and respiratory distress worse at night. What is the most likely diagnosis?",
    options: {
      A: "Epiglottitis",
      B: "Croup",
      C: "Bronchiolitis",
      D: "Asthma exacerbation"
    },
    correctAnswer: "B",
    explanation: "Croup (laryngotracheobronchitis) presents with barking cough, stridor, and symptoms worse at night. It's typically caused by parainfluenza virus and affects children 6 months to 3 years old."
  },
  {
    id: 22,
    specialty: "Pediatrics",
    subtopic: "Development",
    difficulty: "Easy",
    question: "At what age should a child typically be able to walk independently?",
    options: {
      A: "6 months",
      B: "9 months",
      C: "12 months",
      D: "18 months"
    },
    correctAnswer: "C",
    explanation: "Most children walk independently between 12-15 months. Walking before 12 months is early, and inability to walk by 18 months warrants evaluation for developmental delay."
  },
  {
    id: 23,
    specialty: "Pediatrics",
    subtopic: "Congenital Disorders",
    difficulty: "Hard",
    question: "A newborn presents with cyanosis that does not improve with oxygen. Echocardiogram shows no mixing between systemic and pulmonary circulation. What medication should be started immediately?",
    options: {
      A: "Digoxin",
      B: "Furosemide",
      C: "Prostaglandin E1",
      D: "Epinephrine"
    },
    correctAnswer: "C",
    explanation: "This describes a ductal-dependent congenital heart lesion. Prostaglandin E1 (PGE1) must be started immediately to maintain ductal patency and allow mixing of oxygenated and deoxygenated blood until definitive surgical correction."
  },
  {
    id: 24,
    specialty: "Pediatrics",
    subtopic: "Gastroenterology",
    difficulty: "Medium",
    question: "A 3-week-old infant presents with projectile non-bilious vomiting after feeds. On exam, you palpate an olive-shaped mass in the epigastrium. What is the diagnosis?",
    options: {
      A: "Gastroesophageal reflux",
      B: "Pyloric stenosis",
      C: "Intussusception",
      D: "Malrotation with volvulus"
    },
    correctAnswer: "B",
    explanation: "Pyloric stenosis typically presents at 3-6 weeks with projectile non-bilious vomiting and a palpable 'olive' mass (hypertrophied pylorus). Treatment is surgical pyloromyotomy."
  },
  {
    id: 25,
    specialty: "Pediatrics",
    subtopic: "Immunizations",
    difficulty: "Easy",
    question: "At what age should the first dose of MMR vaccine be administered?",
    options: {
      A: "6 months",
      B: "12 months",
      C: "18 months",
      D: "2 years"
    },
    correctAnswer: "B",
    explanation: "The first dose of MMR (measles, mumps, rubella) vaccine is recommended at 12-15 months of age, with a second dose at 4-6 years."
  },

  // Psychiatry Questions
  {
    id: 26,
    specialty: "Psychiatry",
    subtopic: "Mood Disorders",
    difficulty: "Medium",
    question: "A 35-year-old woman has been feeling depressed for 3 weeks with poor sleep, decreased appetite, and suicidal thoughts. What is the most appropriate first-line treatment?",
    options: {
      A: "Cognitive behavioral therapy alone",
      B: "SSRI antidepressant",
      C: "Benzodiazepine",
      D: "Electroconvulsive therapy"
    },
    correctAnswer: "B",
    explanation: "For moderate to severe major depressive disorder with suicidal ideation, pharmacotherapy with an SSRI is first-line treatment. CBT can be added, and ECT is reserved for treatment-resistant cases or severe cases requiring rapid response."
  },
  {
    id: 27,
    specialty: "Psychiatry",
    subtopic: "Psychosis",
    difficulty: "Hard",
    question: "A 22-year-old male has auditory hallucinations and delusions for 8 months with social withdrawal. What is the first-line medication class?",
    options: {
      A: "First-generation antipsychotic",
      B: "Second-generation antipsychotic",
      C: "Mood stabilizer",
      D: "Antidepressant"
    },
    correctAnswer: "B",
    explanation: "Second-generation (atypical) antipsychotics are first-line for schizophrenia due to lower risk of extrapyramidal side effects compared to first-generation antipsychotics, with similar efficacy."
  },
  {
    id: 28,
    specialty: "Psychiatry",
    subtopic: "Anxiety Disorders",
    difficulty: "Easy",
    question: "A patient has recurrent panic attacks with fear of having another attack and avoidance of situations where attacks have occurred. What is the diagnosis?",
    options: {
      A: "Generalized anxiety disorder",
      B: "Panic disorder",
      C: "Social anxiety disorder",
      D: "Specific phobia"
    },
    correctAnswer: "B",
    explanation: "Panic disorder is characterized by recurrent unexpected panic attacks with persistent worry about future attacks and/or avoidance behaviors. This distinguishes it from isolated panic attacks."
  },
  {
    id: 29,
    specialty: "Psychiatry",
    subtopic: "Substance Use",
    difficulty: "Medium",
    question: "A chronic alcoholic presents with confusion, ataxia, and ophthalmoplegia. What vitamin deficiency is most likely?",
    options: {
      A: "Vitamin B12",
      B: "Vitamin B1 (thiamine)",
      C: "Vitamin D",
      D: "Folate"
    },
    correctAnswer: "B",
    explanation: "Wernicke's encephalopathy, presenting with the classic triad of confusion, ataxia, and ophthalmoplegia, is caused by thiamine (vitamin B1) deficiency, common in chronic alcoholism. Treatment is immediate IV thiamine."
  },
  {
    id: 30,
    specialty: "Psychiatry",
    subtopic: "Child Psychiatry",
    difficulty: "Easy",
    question: "A 7-year-old boy has difficulty paying attention in class, is easily distracted, and frequently interrupts others. What is the most likely diagnosis?",
    options: {
      A: "Oppositional defiant disorder",
      B: "Autism spectrum disorder",
      C: "Attention deficit hyperactivity disorder",
      D: "Conduct disorder"
    },
    correctAnswer: "C",
    explanation: "Symptoms of inattention, distractibility, and impulsivity (interrupting) are characteristic of ADHD. Diagnosis requires symptoms present in multiple settings for at least 6 months."
  },

  // Obstetrics & Gynecology Questions
  {
    id: 31,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Obstetrics",
    difficulty: "Hard",
    question: "A pregnant woman at 32 weeks presents with severe headache, visual changes, and BP 170/110. Labs show platelets 80,000 and elevated liver enzymes. What is the diagnosis?",
    options: {
      A: "Gestational hypertension",
      B: "Preeclampsia",
      C: "HELLP syndrome",
      D: "Eclampsia"
    },
    correctAnswer: "C",
    explanation: "HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) is a severe form of preeclampsia. The combination of thrombocytopenia, elevated liver enzymes, and severe hypertension with symptoms confirms this diagnosis."
  },
  {
    id: 32,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Gynecology",
    difficulty: "Medium",
    question: "A 28-year-old woman has severe dysmenorrhea, dyspareunia, and chronic pelvic pain. Laparoscopy shows endometrial tissue outside the uterus. What is the diagnosis?",
    options: {
      A: "Adenomyosis",
      B: "Endometriosis",
      C: "Pelvic inflammatory disease",
      D: "Uterine fibroids"
    },
    correctAnswer: "B",
    explanation: "Endometriosis is characterized by endometrial tissue outside the uterus, causing dysmenorrhea, dyspareunia, and chronic pelvic pain. Laparoscopy with visualization of endometrial implants is the gold standard for diagnosis."
  },
  {
    id: 33,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Reproductive Endocrinology",
    difficulty: "Easy",
    question: "A 35-year-old woman has irregular periods, hirsutism, and acne. Ultrasound shows multiple small ovarian cysts. What is the most likely diagnosis?",
    options: {
      A: "Ovarian cancer",
      B: "Polycystic ovary syndrome",
      C: "Premature ovarian failure",
      D: "Hypothyroidism"
    },
    correctAnswer: "B",
    explanation: "PCOS is characterized by irregular periods, hyperandrogenism (hirsutism, acne), and polycystic ovaries on ultrasound. It's the most common endocrine disorder in women of reproductive age."
  },
  {
    id: 34,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Menopause",
    difficulty: "Easy",
    question: "A 52-year-old woman complains of hot flashes, night sweats, and vaginal dryness. She has not had a period in 14 months. What is the most appropriate treatment?",
    options: {
      A: "Oral contraceptives",
      B: "Hormone replacement therapy",
      C: "Clomiphene citrate",
      D: "No treatment needed"
    },
    correctAnswer: "B",
    explanation: "This patient is experiencing menopausal symptoms. Hormone replacement therapy (estrogen with or without progesterone) is the most effective treatment for vasomotor symptoms and urogenital atrophy in appropriate candidates."
  },
  {
    id: 35,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Cervical Pathology",
    difficulty: "Medium",
    question: "A 25-year-old woman has an abnormal Pap smear showing high-grade squamous intraepithelial lesion (HSIL). What is the next step?",
    options: {
      A: "Repeat Pap smear in 1 year",
      B: "HPV testing",
      C: "Colposcopy with biopsy",
      D: "Immediate hysterectomy"
    },
    correctAnswer: "C",
    explanation: "HSIL on Pap smear requires immediate colposcopy with directed biopsy to rule out invasive cancer and determine extent of disease. This is necessary regardless of HPV status."
  },

  // Emergency Medicine Questions
  {
    id: 36,
    specialty: "Emergency Medicine",
    subtopic: "Toxicology",
    difficulty: "Medium",
    question: "A patient presents with pinpoint pupils, respiratory depression, and altered mental status. What is the most appropriate immediate treatment?",
    options: {
      A: "Flumazenil",
      B: "Naloxone",
      C: "Atropine",
      D: "Activated charcoal"
    },
    correctAnswer: "B",
    explanation: "This classic triad indicates opioid toxicity. Naloxone is the specific antidote for opioid overdose and should be administered immediately to reverse respiratory depression."
  },
  {
    id: 37,
    specialty: "Emergency Medicine",
    subtopic: "Trauma",
    difficulty: "Hard",
    question: "A patient with penetrating chest trauma has absent breath sounds on the left, hypotension, and tracheal deviation to the right. What is the immediate management?",
    options: {
      A: "Chest X-ray",
      B: "Needle decompression",
      C: "Intubation",
      D: "CT chest"
    },
    correctAnswer: "B",
    explanation: "This is tension pneumothorax - a clinical diagnosis. Immediate needle decompression (2nd intercostal space, midclavicular line) is required before any imaging. Tracheal deviation is a late finding indicating severe tension."
  },
  {
    id: 38,
    specialty: "Emergency Medicine",
    subtopic: "Environmental",
    difficulty: "Medium",
    question: "A hiker presents with core temperature of 28°C (82°F), confusion, and bradycardia. What is the appropriate rewarming method?",
    options: {
      A: "Warm blankets only",
      B: "Warm IV fluids and active external rewarming",
      C: "Active internal rewarming (warmed humidified oxygen, body cavity lavage)",
      D: "No intervention needed"
    },
    correctAnswer: "C",
    explanation: "Core temperature <28°C indicates severe hypothermia requiring active internal rewarming methods. Passive and active external rewarming alone are insufficient and may cause complications."
  },
  {
    id: 39,
    specialty: "Emergency Medicine",
    subtopic: "Cardiac Arrest",
    difficulty: "Easy",
    question: "During CPR, what is the recommended compression to ventilation ratio for single-rescuer adult CPR?",
    options: {
      A: "15:2",
      B: "30:2",
      C: "5:1",
      D: "100:2"
    },
    correctAnswer: "B",
    explanation: "The current AHA guidelines recommend a 30:2 compression to ventilation ratio for single-rescuer adult CPR. This applies to all single rescuer scenarios."
  },
  {
    id: 40,
    specialty: "Emergency Medicine",
    subtopic: "Anaphylaxis",
    difficulty: "Easy",
    question: "A patient develops hives, wheezing, and hypotension after eating peanuts. What is the first-line treatment?",
    options: {
      A: "Diphenhydramine",
      B: "Epinephrine IM",
      C: "Methylprednisolone",
      D: "Albuterol nebulizer"
    },
    correctAnswer: "B",
    explanation: "Epinephrine IM (0.3-0.5mg of 1:1000 solution) is the first-line treatment for anaphylaxis. Antihistamines and steroids are adjunctive but should not delay epinephrine administration."
  },

  // Dermatology Questions
  {
    id: 41,
    specialty: "Dermatology",
    subtopic: "Skin Cancer",
    difficulty: "Medium",
    question: "A 65-year-old farmer presents with a pearly nodule with telangiectasias on the nose. What is the most likely diagnosis?",
    options: {
      A: "Melanoma",
      B: "Basal cell carcinoma",
      C: "Squamous cell carcinoma",
      D: "Seborrheic keratosis"
    },
    correctAnswer: "B",
    explanation: "Basal cell carcinoma typically presents as a pearly, translucent nodule with telangiectasias, often on sun-exposed areas. It's the most common skin cancer and most common in fair-skinned individuals with sun exposure."
  },
  {
    id: 42,
    specialty: "Dermatology",
    subtopic: "Inflammatory Conditions",
    difficulty: "Easy",
    question: "A patient presents with well-demarcated erythematous plaques with silvery scales on the extensor surfaces of elbows and knees. What is the diagnosis?",
    options: {
      A: "Eczema",
      B: "Psoriasis",
      C: "Tinea corporis",
      D: "Contact dermatitis"
    },
    correctAnswer: "B",
    explanation: "Psoriasis classically presents with well-demarcated erythematous plaques with silvery scales, typically on extensor surfaces (elbows, knees) and scalp. The Auspitz sign (pinpoint bleeding when scales are removed) may be present."
  },
  {
    id: 43,
    specialty: "Dermatology",
    subtopic: "Infectious Disease",
    difficulty: "Medium",
    question: "A patient has a painful vesicular rash in a dermatomal distribution on one side of the chest. What is the appropriate treatment?",
    options: {
      A: "Topical corticosteroid",
      B: "Oral acyclovir",
      C: "Topical antibiotics",
      D: "Observation only"
    },
    correctAnswer: "B",
    explanation: "This describes herpes zoster (shingles). Oral antiviral therapy (acyclovir, valacyclovir, or famciclovir) should be started within 72 hours of rash onset to reduce duration and severity of symptoms and risk of post-herpetic neuralgia."
  },
  {
    id: 44,
    specialty: "Dermatology",
    subtopic: "Melanoma",
    difficulty: "Hard",
    question: "A pigmented lesion has asymmetry, irregular borders, color variation, diameter >6mm, and has been evolving. Biopsy confirms melanoma with Breslow depth of 2.5mm. What is the next step?",
    options: {
      A: "Observation only",
      B: "Wide local excision with 1cm margins",
      C: "Wide local excision with 2cm margins and sentinel lymph node biopsy",
      D: "Radiation therapy"
    },
    correctAnswer: "C",
    explanation: "For melanoma with Breslow depth 1-2mm or greater, wide local excision with appropriate margins (2cm for >2mm depth) and sentinel lymph node biopsy is recommended for staging and prognostic information."
  },
  {
    id: 45,
    specialty: "Dermatology",
    subtopic: "Acne",
    difficulty: "Easy",
    question: "A 16-year-old presents with comedones and inflammatory papules on the face. What is the first-line topical treatment?",
    options: {
      A: "Topical retinoid",
      B: "Oral antibiotics",
      C: "Isotretinoin",
      D: "Oral contraceptives"
    },
    correctAnswer: "A",
    explanation: "Topical retinoids (tretinoin, adapalene) are first-line treatment for acne vulgaris. They normalize follicular keratinization and have anti-inflammatory effects. Benzoyl peroxide is also first-line and can be combined with retinoids."
  },

  // Ophthalmology Questions
  {
    id: 46,
    specialty: "Ophthalmology",
    subtopic: "Glaucoma",
    difficulty: "Medium",
    question: "A 70-year-old diabetic has gradual peripheral vision loss. Intraocular pressure is 28 mmHg with optic disc cupping. What is the diagnosis?",
    options: {
      A: "Cataracts",
      B: "Open-angle glaucoma",
      C: "Diabetic retinopathy",
      D: "Macular degeneration"
    },
    correctAnswer: "B",
    explanation: "Elevated intraocular pressure, optic disc cupping, and peripheral visual field loss are characteristic of open-angle glaucoma, the most common form. It typically presents gradually and painlessly."
  },
  {
    id: 47,
    specialty: "Ophthalmology",
    subtopic: "Acute Vision Loss",
    difficulty: "Hard",
    question: "A 75-year-old presents with sudden painless vision loss in one eye. Fundoscopy shows a cherry-red spot at the macula. What is the diagnosis?",
    options: {
      A: "Retinal detachment",
      B: "Central retinal artery occlusion",
      C: "Central retinal vein occlusion",
      D: "Vitreous hemorrhage"
    },
    correctAnswer: "B",
    explanation: "Central retinal artery occlusion presents with sudden painless monocular vision loss and a cherry-red spot (normal fovea surrounded by pale ischemic retina). It's an ophthalmologic emergency requiring immediate treatment."
  },
  {
    id: 48,
    specialty: "Ophthalmology",
    subtopic: "Red Eye",
    difficulty: "Easy",
    question: "A patient presents with red eye, photophobia, and decreased vision. Slit lamp shows cells and flare in the anterior chamber. What is the diagnosis?",
    options: {
      A: "Conjunctivitis",
      B: "Anterior uveitis",
      C: "Corneal abrasion",
      D: "Subconjunctival hemorrhage"
    },
    correctAnswer: "B",
    explanation: "Anterior uveitis (iritis) presents with red eye, photophobia, pain, and decreased vision. Slit lamp examination showing cells and flare (protein) in the anterior chamber confirms the diagnosis. Treatment is topical corticosteroids."
  },
  {
    id: 49,
    specialty: "Ophthalmology",
    subtopic: "Diabetic Eye Disease",
    difficulty: "Medium",
    question: "A diabetic patient has microaneurysms, dot-blot hemorrhages, and cotton wool spots on fundoscopy. What stage of diabetic retinopathy is this?",
    options: {
      A: "No retinopathy",
      B: "Mild nonproliferative",
      C: "Moderate nonproliferative",
      D: "Proliferative"
    },
    correctAnswer: "C",
    explanation: "Moderate nonproliferative diabetic retinopathy shows microaneurysms, dot-blot hemorrhages, and cotton wool spots. Proliferative disease would show neovascularization. This stage requires close monitoring and optimal glycemic control."
  },
  {
    id: 50,
    specialty: "Ophthalmology",
    subtopic: "Trauma",
    difficulty: "Easy",
    question: "A welder presents with severe eye pain and tearing 6 hours after welding without eye protection. Fluorescein staining shows punctate epithelial defects. What is the diagnosis?",
    options: {
      A: "Corneal foreign body",
      B: "UV keratitis",
      C: "Chemical burn",
      D: "Acute angle-closure glaucoma"
    },
    correctAnswer: "B",
    explanation: "UV keratitis (welder's flash, arc eye) occurs after UV exposure without protection. Symptoms develop 6-12 hours later with severe pain, tearing, and punctate epithelial defects on fluorescein staining. Treatment is supportive with pain control."
  },

  // Orthopedics Questions
  {
    id: 51,
    specialty: "Orthopedics",
    subtopic: "Fractures",
    difficulty: "Medium",
    question: "A patient falls on an outstretched hand. X-ray shows a fracture through the distal radius with dorsal angulation. What is this fracture called?",
    options: {
      A: "Smith fracture",
      B: "Colles fracture",
      C: "Scaphoid fracture",
      D: "Monteggia fracture"
    },
    correctAnswer: "B",
    explanation: "Colles fracture is a distal radius fracture with dorsal angulation, typically from fall on outstretched hand (FOOSH). Smith fracture has volar (palmar) angulation. Colles is more common."
  },
  {
    id: 52,
    specialty: "Orthopedics",
    subtopic: "Sports Medicine",
    difficulty: "Hard",
    question: "An athlete has acute knee pain after twisting injury. Exam shows positive Lachman test and anterior drawer test. What is the most likely injury?",
    options: {
      A: "Medial collateral ligament tear",
      B: "Anterior cruciate ligament tear",
      C: "Posterior cruciate ligament tear",
      D: "Meniscal tear"
    },
    correctAnswer: "B",
    explanation: "Positive Lachman and anterior drawer tests indicate anterior cruciate ligament (ACL) injury. ACL tears commonly occur with twisting injuries during sports. MRI confirms diagnosis."
  },
  {
    id: 53,
    specialty: "Orthopedics",
    subtopic: "Pediatric Orthopedics",
    difficulty: "Medium",
    question: "A 12-year-old obese boy has insidious onset hip and knee pain with limited hip internal rotation. X-ray shows posterior displacement of femoral epiphysis. What is the diagnosis?",
    options: {
      A: "Legg-Calvé-Perthes disease",
      B: "Slipped capital femoral epiphysis",
      C: "Developmental dysplasia of the hip",
      D: "Septic arthritis"
    },
    correctAnswer: "B",
    explanation: "Slipped capital femoral epiphysis (SCFE) typically occurs in obese adolescent boys with hip/knee pain and limited internal rotation. X-ray shows posterior-inferior displacement of femoral epiphysis. Urgent orthopedic referral is needed."
  },
  {
    id: 54,
    specialty: "Orthopedics",
    subtopic: "Spine",
    difficulty: "Easy",
    question: "A patient has low back pain radiating down the posterior leg with positive straight leg raise test. What is the most likely diagnosis?",
    options: {
      A: "Spinal stenosis",
      B: "Lumbar disc herniation",
      C: "Compression fracture",
      D: "Ankylosing spondylitis"
    },
    correctAnswer: "B",
    explanation: "Radicular pain (sciatica) with positive straight leg raise indicates nerve root compression, most commonly from lumbar disc herniation. The L5-S1 level is most frequently affected."
  },
  {
    id: 55,
    specialty: "Orthopedics",
    subtopic: "Shoulder",
    difficulty: "Medium",
    question: "A 55-year-old has chronic shoulder pain worse with overhead activities. Exam shows positive Neer and Hawkins tests. What is the most likely diagnosis?",
    options: {
      A: "Rotator cuff tear",
      B: "Shoulder impingement syndrome",
      C: "Adhesive capsulitis",
      D: "Glenohumeral arthritis"
    },
    correctAnswer: "B",
    explanation: "Shoulder impingement syndrome presents with pain during overhead activities. Neer test (pain with passive forward flexion) and Hawkins test (pain with internal rotation of flexed shoulder) are positive. This may progress to rotator cuff tear if untreated."
  },

  // Urology Questions
  {
    id: 56,
    specialty: "Urology",
    subtopic: "Urolithiasis",
    difficulty: "Medium",
    question: "A 35-year-old male has sudden severe left flank pain radiating to groin with hematuria. CT shows a 4mm stone in the left ureter. What is the most appropriate management?",
    options: {
      A: "Immediate lithotripsy",
      B: "Hydration and pain control",
      C: "Emergency surgery",
      D: "Antibiotics"
    },
    correctAnswer: "B",
    explanation: "Stones <5mm typically pass spontaneously. Conservative management with hydration, pain control (NSAIDs), and possible medical expulsive therapy (alpha-blockers) is appropriate. Intervention is needed for larger stones, infection, or persistent symptoms."
  },
  {
    id: 57,
    specialty: "Urology",
    subtopic: "Prostate",
    difficulty: "Hard",
    question: "A 68-year-old has elevated PSA of 8.5 ng/mL. Digital rectal exam shows nodular prostate. Biopsy shows Gleason score 7 (3+4) adenocarcinoma. What is the next step?",
    options: {
      A: "Observation only",
      B: "Staging with imaging",
      C: "Immediate radical prostatectomy",
      D: "Androgen deprivation therapy"
    },
    correctAnswer: "B",
    explanation: "After prostate cancer diagnosis, staging is essential before treatment planning. This includes imaging (CT/MRI pelvis, bone scan) to assess local extent and metastases. Treatment options depend on stage, grade, PSA level, and patient factors."
  },
  {
    id: 58,
    specialty: "Urology",
    subtopic: "Hematuria",
    difficulty: "Easy",
    question: "A 60-year-old smoker presents with painless gross hematuria. What is the most concerning diagnosis that must be ruled out?",
    options: {
      A: "Urinary tract infection",
      B: "Bladder cancer",
      C: "Kidney stone",
      D: "Benign prostatic hyperplasia"
    },
    correctAnswer: "B",
    explanation: "Painless gross hematuria in a smoker is bladder cancer until proven otherwise. Cystoscopy and upper tract imaging are required. Risk factors include smoking, age >50, and chemical exposures."
  },
  {
    id: 59,
    specialty: "Urology",
    subtopic: "Testicular",
    difficulty: "Medium",
    question: "A 25-year-old male presents with painless testicular mass. Ultrasound shows solid intratesticular mass. What tumor marker should be checked?",
    options: {
      A: "PSA",
      B: "CEA",
      C: "AFP and beta-hCG",
      D: "CA 19-9"
    },
    correctAnswer: "C",
    explanation: "For suspected testicular cancer, AFP (alpha-fetoprotein) and beta-hCG are important tumor markers for diagnosis, prognosis, and monitoring. LDH is also checked. These help differentiate seminoma from non-seminomatous germ cell tumors."
  },
  {
    id: 60,
    specialty: "Urology",
    subtopic: "Erectile Dysfunction",
    difficulty: "Easy",
    question: "A 55-year-old diabetic with hypertension complains of erectile dysfunction. What is the first-line treatment?",
    options: {
      A: "Testosterone replacement",
      B: "PDE5 inhibitor (sildenafil)",
      C: "Intracavernosal injection",
      D: "Penile prosthesis"
    },
    correctAnswer: "B",
    explanation: "PDE5 inhibitors (sildenafil, tadalafil, vardenafil) are first-line treatment for erectile dysfunction in most patients. They are effective, well-tolerated, and non-invasive. Contraindicated with nitrates."
  },

  // Additional Cardiology
  {
    id: 61,
    specialty: "Cardiology",
    subtopic: "Pericardial Disease",
    difficulty: "Medium",
    question: "A patient has pleuritic chest pain relieved by sitting forward. ECG shows diffuse ST elevation with PR depression. What is the diagnosis?",
    options: {
      A: "Myocardial infarction",
      B: "Acute pericarditis",
      C: "Pulmonary embolism",
      D: "Pneumonia"
    },
    correctAnswer: "B",
    explanation: "Acute pericarditis presents with pleuritic chest pain improved by sitting forward. ECG shows diffuse ST elevation (unlike localized in MI) and PR depression. Pericardial friction rub may be heard on exam."
  },
  {
    id: 62,
    specialty: "Cardiology",
    subtopic: "Cardiomyopathy",
    difficulty: "Hard",
    question: "A young athlete has sudden cardiac death during basketball. Autopsy shows asymmetric septal hypertrophy. What was the likely diagnosis?",
    options: {
      A: "Dilated cardiomyopathy",
      B: "Hypertrophic cardiomyopathy",
      C: "Arrhythmogenic right ventricular dysplasia",
      D: "Myocarditis"
    },
    correctAnswer: "B",
    explanation: "Hypertrophic cardiomyopathy (HCM) is the most common cause of sudden cardiac death in young athletes. Asymmetric septal hypertrophy is characteristic. Screening with ECG and echo is important for athletes."
  },

  // Additional Surgery
  {
    id: 63,
    specialty: "Surgery",
    subtopic: "Biliary Disease",
    difficulty: "Medium",
    question: "A 40-year-old obese female has right upper quadrant pain after fatty meals. Ultrasound shows gallstones. What is the definitive treatment?",
    options: {
      A: "Antibiotics",
      B: "Low-fat diet",
      C: "Laparoscopic cholecystectomy",
      D: "Lithotripsy"
    },
    correctAnswer: "C",
    explanation: "Symptomatic cholelithiasis is treated with laparoscopic cholecystectomy. This prevents complications like acute cholecystitis, choledocholithiasis, and gallstone pancreatitis. Surgery is the only definitive treatment."
  },
  {
    id: 64,
    specialty: "Surgery",
    subtopic: "Colorectal",
    difficulty: "Hard",
    question: "A 65-year-old has change in bowel habits and iron deficiency anemia. Colonoscopy shows mass in ascending colon. Biopsy confirms adenocarcinoma. What is the appropriate surgery?",
    options: {
      A: "Left hemicolectomy",
      B: "Right hemicolectomy",
      C: "Sigmoid colectomy",
      D: "Transanal excision"
    },
    correctAnswer: "B",
    explanation: "Right-sided colon cancers (cecum, ascending colon, hepatic flexure) are treated with right hemicolectomy. This removes the tumor with adequate margins and regional lymph nodes for staging."
  },

  // Additional Internal Medicine
  {
    id: 65,
    specialty: "Internal Medicine",
    subtopic: "Hematology",
    difficulty: "Medium",
    question: "A patient has fatigue and pallor. Labs show Hgb 8 g/dL, MCV 68 fL, low ferritin. What is the most likely diagnosis?",
    options: {
      A: "Vitamin B12 deficiency",
      B: "Iron deficiency anemia",
      C: "Thalassemia",
      D: "Anemia of chronic disease"
    },
    correctAnswer: "B",
    explanation: "Microcytic anemia (low MCV) with low ferritin indicates iron deficiency anemia. Common causes include GI blood loss, menstruation, and poor intake. Further workup should identify the source of iron loss."
  },
  {
    id: 66,
    specialty: "Internal Medicine",
    subtopic: "Infectious Disease",
    difficulty: "Hard",
    question: "A patient with HIV (CD4 count 80) has fever, headache, and altered mental status. CSF shows high opening pressure, low glucose, and India ink stain shows encapsulated yeast. What is the diagnosis?",
    options: {
      A: "Bacterial meningitis",
      B: "Cryptococcal meningitis",
      C: "Toxoplasmosis",
      D: "Primary CNS lymphoma"
    },
    correctAnswer: "B",
    explanation: "Cryptococcal meningitis is common in AIDS patients with CD4 <100. CSF shows high opening pressure, encapsulated yeast on India ink stain. Treatment is amphotericin B plus flucytosine, followed by fluconazole maintenance."
  },

  // Additional Neurology
  {
    id: 67,
    specialty: "Neurology",
    subtopic: "Multiple Sclerosis",
    difficulty: "Medium",
    question: "A 28-year-old woman has episodes of vision loss, weakness, and sensory symptoms separated in time and space. MRI shows periventricular white matter lesions. What is the diagnosis?",
    options: {
      A: "Stroke",
      B: "Brain tumor",
      C: "Multiple sclerosis",
      D: "Migraine"
    },
    correctAnswer: "C",
    explanation: "Multiple sclerosis presents with neurologic symptoms separated in time and space (different CNS locations at different times). MRI shows demyelinating lesions, often periventricular. Young women are most commonly affected."
  },
  {
    id: 68,
    specialty: "Neurology",
    subtopic: "Peripheral Neuropathy",
    difficulty: "Easy",
    question: "A diabetic patient complains of burning pain and numbness in both feet in a stocking distribution. What is the most likely diagnosis?",
    options: {
      A: "Radiculopathy",
      B: "Peripheral arterial disease",
      C: "Diabetic peripheral neuropathy",
      D: "Restless leg syndrome"
    },
    correctAnswer: "C",
    explanation: "Diabetic peripheral neuropathy typically presents with symmetric distal sensory symptoms in a stocking-glove distribution. It's the most common complication of diabetes. Good glycemic control can prevent progression."
  },

  // Additional Pediatrics
  {
    id: 69,
    specialty: "Pediatrics",
    subtopic: "Respiratory",
    difficulty: "Medium",
    question: "A 6-month-old has wheezing, tachypnea, and increased work of breathing during winter. What is the most likely diagnosis?",
    options: {
      A: "Pneumonia",
      B: "Bronchiolitis",
      C: "Asthma",
      D: "Foreign body aspiration"
    },
    correctAnswer: "B",
    explanation: "Bronchiolitis, typically caused by RSV, affects infants <2 years, especially during winter months. It presents with wheezing, tachypnea, and respiratory distress. Treatment is supportive."
  },
  {
    id: 70,
    specialty: "Pediatrics",
    subtopic: "Hematology",
    difficulty: "Hard",
    question: "An African American infant has dactylitis and severe pain crises. Hemoglobin electrophoresis shows HbS. What is the diagnosis?",
    options: {
      A: "Thalassemia",
      B: "Sickle cell disease",
      C: "Iron deficiency anemia",
      D: "G6PD deficiency"
    },
    correctAnswer: "B",
    explanation: "Sickle cell disease presents with pain crises and dactylitis (hand-foot syndrome) in infants. HbS on electrophoresis confirms diagnosis. Newborn screening allows early intervention with penicillin prophylaxis and vaccinations."
  },

  // Additional Psychiatry
  {
    id: 71,
    specialty: "Psychiatry",
    subtopic: "Bipolar Disorder",
    difficulty: "Medium",
    question: "A 30-year-old has episodes of elevated mood, decreased need for sleep, and increased goal-directed activity lasting 1 week, alternating with depressive episodes. What is the diagnosis?",
    options: {
      A: "Major depressive disorder",
      B: "Bipolar I disorder",
      C: "Bipolar II disorder",
      D: "Cyclothymic disorder"
    },
    correctAnswer: "B",
    explanation: "Bipolar I disorder requires at least one manic episode (lasting ≥1 week with elevated mood, decreased sleep, increased activity). Depressive episodes are common but not required for diagnosis. Treatment includes mood stabilizers."
  },
  {
    id: 72,
    specialty: "Psychiatry",
    subtopic: "Personality Disorders",
    difficulty: "Easy",
    question: "A patient has a pervasive pattern of instability in relationships, self-image, and affects, with marked impulsivity and fear of abandonment. What personality disorder is this?",
    options: {
      A: "Antisocial personality disorder",
      B: "Borderline personality disorder",
      C: "Narcissistic personality disorder",
      D: "Histrionic personality disorder"
    },
    correctAnswer: "B",
    explanation: "Borderline personality disorder is characterized by instability in relationships, self-image, and mood, with impulsivity and intense fear of abandonment. Dialectical behavior therapy (DBT) is the treatment of choice."
  },

  // Additional OB/GYN
  {
    id: 73,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Contraception",
    difficulty: "Easy",
    question: "A 25-year-old with history of DVT asks about contraception. Which method is contraindicated?",
    options: {
      A: "Copper IUD",
      B: "Progestin-only pill",
      C: "Combined oral contraceptive",
      D: "Levonorgestrel IUD"
    },
    correctAnswer: "C",
    explanation: "Combined oral contraceptives (containing estrogen) are contraindicated in women with history of venous thromboembolism due to increased clotting risk. Progestin-only methods and IUDs are safe alternatives."
  },
  {
    id: 74,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Ectopic Pregnancy",
    difficulty: "Medium",
    question: "A woman has positive pregnancy test, abdominal pain, and vaginal bleeding. Transvaginal ultrasound shows no intrauterine pregnancy and beta-hCG is 2000 mIU/mL. What is the most likely diagnosis?",
    options: {
      A: "Normal early pregnancy",
      B: "Ectopic pregnancy",
      C: "Threatened abortion",
      D: "Molar pregnancy"
    },
    correctAnswer: "B",
    explanation: "Beta-hCG >1500-2000 mIU/mL (discriminatory zone) without intrauterine pregnancy on transvaginal ultrasound suggests ectopic pregnancy. Further evaluation with serial hCG and possible laparoscopy is needed."
  },

  // Additional Emergency Medicine
  {
    id: 75,
    specialty: "Emergency Medicine",
    subtopic: "Burns",
    difficulty: "Medium",
    question: "A patient has burns covering the entire anterior chest and abdomen. Using the Rule of Nines, what percentage of body surface area is burned?",
    options: {
      A: "9%",
      B: "18%",
      C: "27%",
      D: "36%"
    },
    correctAnswer: "B",
    explanation: "By the Rule of Nines, the anterior trunk (chest and abdomen) represents 18% of total body surface area (9% for anterior chest, 9% for anterior abdomen). This helps calculate fluid resuscitation needs."
  },
  {
    id: 76,
    specialty: "Emergency Medicine",
    subtopic: "Sepsis",
    difficulty: "Hard",
    question: "A patient with suspected sepsis has lactate 4.5 mmol/L, BP 85/50 despite 30mL/kg fluid resuscitation. What is the next step in management?",
    options: {
      A: "More IV fluids",
      B: "Start vasopressors",
      C: "Blood transfusion",
      D: "Steroids"
    },
    correctAnswer: "B",
    explanation: "This patient has septic shock (hypotension despite adequate fluid resuscitation and elevated lactate). Vasopressors (norepinephrine first-line) should be started promptly along with antibiotics and source control."
  },

  // Additional Dermatology
  {
    id: 77,
    specialty: "Dermatology",
    subtopic: "Autoimmune",
    difficulty: "Medium",
    question: "A patient has tense bullae on flexor surfaces. Skin biopsy with immunofluorescence shows linear IgG and C3 at the basement membrane zone. What is the diagnosis?",
    options: {
      A: "Pemphigus vulgaris",
      B: "Bullous pemphigoid",
      C: "Dermatitis herpetiformis",
      D: "Stevens-Johnson syndrome"
    },
    correctAnswer: "B",
    explanation: "Bullous pemphigoid presents with tense bullae (vs flaccid in pemphigus) and shows linear IgG/C3 at basement membrane. It's more common in elderly and treated with systemic corticosteroids."
  },
  {
    id: 78,
    specialty: "Dermatology",
    subtopic: "Hair Disorders",
    difficulty: "Easy",
    question: "A patient has well-circumscribed patches of complete hair loss on the scalp with no scaling or inflammation. What is the most likely diagnosis?",
    options: {
      A: "Tinea capitis",
      B: "Alopecia areata",
      C: "Androgenetic alopecia",
      D: "Trichotillomania"
    },
    correctAnswer: "B",
    explanation: "Alopecia areata presents with round patches of complete hair loss without scaling or inflammation. It's an autoimmune condition and may progress to alopecia totalis (entire scalp) or universalis (entire body)."
  },

  // Additional Ophthalmology
  {
    id: 79,
    specialty: "Ophthalmology",
    subtopic: "Cataracts",
    difficulty: "Easy",
    question: "An elderly patient complains of gradual blurry vision and glare from lights at night. Exam shows lens opacity. What is the diagnosis?",
    options: {
      A: "Glaucoma",
      B: "Cataracts",
      C: "Macular degeneration",
      D: "Retinal detachment"
    },
    correctAnswer: "B",
    explanation: "Cataracts cause gradual vision loss, glare, and difficulty with night driving. Lens opacity is visible on exam. Treatment is surgical lens replacement when vision impairment affects quality of life."
  },
  {
    id: 80,
    specialty: "Ophthalmology",
    subtopic: "Macular Degeneration",
    difficulty: "Medium",
    question: "An 80-year-old has gradual central vision loss. Amsler grid shows distorted lines. Fundoscopy shows drusen. What is the diagnosis?",
    options: {
      A: "Diabetic retinopathy",
      B: "Age-related macular degeneration",
      C: "Central serous retinopathy",
      D: "Retinal vein occlusion"
    },
    correctAnswer: "B",
    explanation: "Age-related macular degeneration (AMD) causes central vision loss with drusen (yellow deposits) in dry AMD. Wet AMD has neovascularization. Amsler grid metamorphopsia is characteristic. AREDS vitamins help slow progression."
  },

  // Additional Orthopedics
  {
    id: 81,
    specialty: "Orthopedics",
    subtopic: "Compartment Syndrome",
    difficulty: "Hard",
    question: "A patient has severe leg pain after tibial fracture. Pain is worse with passive stretch, and the leg feels tense. Pulses are present. What is the diagnosis?",
    options: {
      A: "Deep vein thrombosis",
      B: "Arterial injury",
      C: "Acute compartment syndrome",
      D: "Cellulitis"
    },
    correctAnswer: "C",
    explanation: "Acute compartment syndrome presents with severe pain out of proportion, pain with passive stretch, and tense compartment. Pulses may be present initially. It's a surgical emergency requiring immediate fasciotomy to prevent permanent damage."
  },
  {
    id: 82,
    specialty: "Orthopedics",
    subtopic: "Hand",
    difficulty: "Medium",
    question: "A patient has numbness and tingling in thumb, index, and middle fingers worse at night. Tinel sign is positive at the wrist. What is the diagnosis?",
    options: {
      A: "Cubital tunnel syndrome",
      B: "Carpal tunnel syndrome",
      C: "De Quervain tenosynovitis",
      D: "Trigger finger"
    },
    correctAnswer: "B",
    explanation: "Carpal tunnel syndrome causes median nerve distribution symptoms (thumb, index, middle fingers) with nocturnal worsening. Tinel sign (tapping over carpal tunnel causes paresthesias) and Phalen test are positive. Initial treatment is wrist splinting."
  },

  // Additional Urology
  {
    id: 83,
    specialty: "Urology",
    subtopic: "Acute Scrotum",
    difficulty: "Hard",
    question: "A 16-year-old has sudden severe testicular pain with nausea. Exam shows high-riding testis with absent cremasteric reflex. What is the diagnosis?",
    options: {
      A: "Epididymitis",
      B: "Testicular torsion",
      C: "Varicocele",
      D: "Hydrocele"
    },
    correctAnswer: "B",
    explanation: "Testicular torsion is a surgical emergency presenting with sudden severe pain, high-riding testis, and absent cremasteric reflex. Immediate surgical exploration and detorsion are required within 6 hours to save the testis."
  },
  {
    id: 84,
    specialty: "Urology",
    subtopic: "Benign Prostatic Hyperplasia",
    difficulty: "Easy",
    question: "A 68-year-old has urinary frequency, weak stream, and nocturia. DRE shows enlarged prostate. What is the first-line medical treatment?",
    options: {
      A: "5-alpha reductase inhibitor",
      B: "Alpha-blocker",
      C: "Antibiotics",
      D: "Anticholinergic"
    },
    correctAnswer: "B",
    explanation: "Alpha-blockers (tamsulosin, alfuzosin) provide rapid symptom relief in BPH by relaxing prostatic smooth muscle. 5-alpha reductase inhibitors (finasteride) reduce prostate size but take months. Combination therapy is used for moderate-severe symptoms."
  },

  // Final Additional Questions to reach 100
  {
    id: 85,
    specialty: "Cardiology",
    subtopic: "Lipid Management",
    difficulty: "Easy",
    question: "A patient with diabetes has LDL cholesterol of 125 mg/dL. What is the recommended LDL goal for cardiovascular risk reduction?",
    options: {
      A: "<200 mg/dL",
      B: "<130 mg/dL",
      C: "<100 mg/dL",
      D: "<70 mg/dL"
    },
    correctAnswer: "D",
    explanation: "For diabetic patients (considered high cardiovascular risk), the LDL goal is <70 mg/dL. High-intensity statin therapy is recommended to reduce cardiovascular events."
  },
  {
    id: 86,
    specialty: "Surgery",
    subtopic: "Thyroid",
    difficulty: "Medium",
    question: "A patient has thyroid nodule with FNA showing papillary thyroid carcinoma. What is the appropriate surgical management?",
    options: {
      A: "Observation",
      B: "Thyroid lobectomy",
      C: "Total thyroidectomy",
      D: "Radioactive iodine only"
    },
    correctAnswer: "C",
    explanation: "Papillary thyroid carcinoma typically requires total thyroidectomy to allow radioactive iodine treatment and monitoring with thyroglobulin. Lobectomy may be considered for small (<1cm) low-risk tumors."
  },
  {
    id: 87,
    specialty: "Internal Medicine",
    subtopic: "Diabetes",
    difficulty: "Medium",
    question: "A type 2 diabetic on metformin has HbA1c of 8.5%. What medication class should be added next?",
    options: {
      A: "Sulfonylurea",
      B: "GLP-1 agonist",
      C: "Insulin",
      D: "Alpha-glucosidase inhibitor"
    },
    correctAnswer: "B",
    explanation: "For patients with established cardiovascular disease or high CV risk, GLP-1 receptor agonists or SGLT2 inhibitors are preferred second-line agents due to cardiovascular benefits. They also promote weight loss."
  },
  {
    id: 88,
    specialty: "Neurology",
    subtopic: "Myasthenia Gravis",
    difficulty: "Hard",
    question: "A patient has fluctuating ptosis and diplopia worse at end of day. Anti-acetylcholine receptor antibodies are positive. What is the diagnosis?",
    options: {
      A: "Multiple sclerosis",
      B: "Myasthenia gravis",
      C: "Lambert-Eaton syndrome",
      D: "Guillain-Barré syndrome"
    },
    correctAnswer: "B",
    explanation: "Myasthenia gravis presents with fluctuating weakness (worse with use, better with rest) affecting ocular and bulbar muscles. Positive acetylcholine receptor antibodies confirm diagnosis. Treatment includes acetylcholinesterase inhibitors and immunosuppression."
  },
  {
    id: 89,
    specialty: "Pediatrics",
    subtopic: "Neonatology",
    difficulty: "Medium",
    question: "A newborn has respiratory distress with grunting and intercostal retractions. Chest X-ray shows ground-glass opacities. What is the diagnosis?",
    options: {
      A: "Transient tachypnea of newborn",
      B: "Respiratory distress syndrome",
      C: "Meconium aspiration syndrome",
      D: "Pneumonia"
    },
    correctAnswer: "B",
    explanation: "Respiratory distress syndrome (RDS) in premature infants is caused by surfactant deficiency. CXR shows ground-glass appearance with air bronchograms. Treatment is surfactant replacement and respiratory support."
  },
  {
    id: 90,
    specialty: "Psychiatry",
    subtopic: "Eating Disorders",
    difficulty: "Medium",
    question: "A 19-year-old female has BMI 16, amenorrhea, intense fear of gaining weight, and distorted body image. What is the diagnosis?",
    options: {
      A: "Bulimia nervosa",
      B: "Anorexia nervosa",
      C: "Binge eating disorder",
      D: "Body dysmorphic disorder"
    },
    correctAnswer: "B",
    explanation: "Anorexia nervosa is characterized by restriction leading to significantly low weight (BMI <17), intense fear of weight gain, and disturbed body perception. Medical complications can be severe. Treatment includes nutritional rehabilitation and psychotherapy."
  },
  {
    id: 91,
    specialty: "Obstetrics & Gynecology",
    subtopic: "Sexually Transmitted Infections",
    difficulty: "Easy",
    question: "A sexually active woman has mucopurulent cervical discharge. What is the most appropriate testing?",
    options: {
      A: "Pap smear only",
      B: "Chlamydia and gonorrhea NAAT",
      C: "Wet mount only",
      D: "HIV testing only"
    },
    correctAnswer: "B",
    explanation: "Mucopurulent cervicitis is typically caused by Chlamydia trachomatis or Neisseria gonorrhoeae. NAAT (nucleic acid amplification test) is the most sensitive test. Treat empirically for both while awaiting results."
  },
  {
    id: 92,
    specialty: "Emergency Medicine",
    subtopic: "Electrolyte Disorders",
    difficulty: "Medium",
    question: "A marathon runner presents with confusion and seizures. Serum sodium is 118 mEq/L. What caused this?",
    options: {
      A: "Dehydration",
      B: "SIADH from stress",
      C: "Exercise-associated hyponatremia from excessive water intake",
      D: "Salt wasting"
    },
    correctAnswer: "C",
    explanation: "Exercise-associated hyponatremia occurs when athletes drink excessive hypotonic fluids during endurance events. Severe hyponatremia can cause seizures and cerebral edema. Treatment is fluid restriction or hypertonic saline for severe cases."
  },
  {
    id: 93,
    specialty: "Dermatology",
    subtopic: "Drug Reactions",
    difficulty: "Hard",
    question: "A patient on allopurinol develops fever, facial edema, and diffuse erythematous rash with desquamation involving >30% BSA. What is the diagnosis?",
    options: {
      A: "Stevens-Johnson syndrome",
      B: "Toxic epidermal necrolysis",
      C: "Drug reaction with eosinophilia and systemic symptoms",
      D: "Erythema multiforme"
    },
    correctAnswer: "B",
    explanation: "Toxic epidermal necrolysis (TEN) involves >30% body surface area with full-thickness epidermal necrosis. It's a severe drug reaction (common culprits: allopurinol, anticonvulsants, antibiotics) requiring ICU-level care. Mortality is high."
  },
  {
    id: 94,
    specialty: "Ophthalmology",
    subtopic: "Pediatric",
    difficulty: "Medium",
    question: "A 6-month-old has constant inward deviation of one eye. What is the diagnosis?",
    options: {
      A: "Pseudostrabismus",
      B: "Infantile esotropia",
      C: "Accommodative esotropia",
      D: "Sixth nerve palsy"
    },
    correctAnswer: "B",
    explanation: "Infantile esotropia presents before 6 months of age with constant large-angle esotropia. Unlike accommodative esotropia (develops later), it doesn't improve with glasses. Treatment is surgical realignment to prevent amblyopia."
  },
  {
    id: 95,
    specialty: "Orthopedics",
    subtopic: "Bone Tumors",
    difficulty: "Hard",
    question: "A 15-year-old has knee pain and X-ray shows sunburst pattern and Codman triangle. What is the most likely diagnosis?",
    options: {
      A: "Osteochondroma",
      B: "Ewing sarcoma",
      C: "Osteosarcoma",
      D: "Giant cell tumor"
    },
    correctAnswer: "C",
    explanation: "Osteosarcoma typically occurs in adolescents around the knee. Classic X-ray findings include sunburst pattern (radiating bone formation) and Codman triangle (periosteal elevation). Treatment is neoadjuvant chemotherapy and surgical resection."
  },
  {
    id: 96,
    specialty: "Urology",
    subtopic: "Incontinence",
    difficulty: "Medium",
    question: "A 65-year-old woman has sudden strong urge to urinate with inability to reach toilet in time. What type of incontinence is this?",
    options: {
      A: "Stress incontinence",
      B: "Urge incontinence",
      C: "Overflow incontinence",
      D: "Functional incontinence"
    },
    correctAnswer: "B",
    explanation: "Urge incontinence (overactive bladder) presents with sudden strong urge and inability to delay urination. Treatment includes behavioral therapy, bladder training, and anticholinergics or beta-3 agonists."
  },
  {
    id: 97,
    specialty: "Internal Medicine",
    subtopic: "Thyroid",
    difficulty: "Easy",
    question: "A patient has weight loss, heat intolerance, tremor, and palpitations. TSH is suppressed, free T4 is elevated. What is the diagnosis?",
    options: {
      A: "Hypothyroidism",
      B: "Hyperthyroidism",
      C: "Subclinical hypothyroidism",
      D: "Euthyroid sick syndrome"
    },
    correctAnswer: "B",
    explanation: "Hyperthyroidism presents with weight loss, heat intolerance, tremor, and palpitations. Labs show suppressed TSH with elevated free T4/T3. Common causes include Graves' disease, toxic multinodular goiter, and thyroiditis."
  },
  {
    id: 98,
    specialty: "Neurology",
    subtopic: "Vertigo",
    difficulty: "Medium",
    question: "A patient has brief episodes of vertigo with position changes. Dix-Hallpike maneuver reproduces symptoms. What is the diagnosis?",
    options: {
      A: "Meniere's disease",
      B: "Vestibular neuritis",
      C: "Benign paroxysmal positional vertigo",
      D: "Vertebrobasilar insufficiency"
    },
    correctAnswer: "C",
    explanation: "BPPV causes brief positional vertigo. Positive Dix-Hallpike maneuver confirms posterior canal BPPV. Treatment is canalith repositioning maneuvers (Epley maneuver), which are highly effective."
  },
  {
    id: 99,
    specialty: "Pediatrics",
    subtopic: "Genetic Disorders",
    difficulty: "Medium",
    question: "A newborn has simian crease, upslanting palpebral fissures, and hypotonia. What genetic disorder is most likely?",
    options: {
      A: "Turner syndrome",
      B: "Down syndrome",
      C: "Klinefelter syndrome",
      D: "Fragile X syndrome"
    },
    correctAnswer: "B",
    explanation: "Down syndrome (trisomy 21) presents with characteristic facies (upslanting palpebral fissures, flat nasal bridge), simian crease, hypotonia, and congenital heart defects. Diagnosis is confirmed with karyotype."
  },
  {
    id: 100,
    specialty: "Emergency Medicine",
    subtopic: "Shock",
    difficulty: "Hard",
    question: "A patient has BP 80/50, HR 120, cool extremities, and elevated CVP with clear lung fields. What type of shock is this?",
    options: {
      A: "Hypovolemic shock",
      B: "Cardiogenic shock",
      C: "Distributive shock",
      D: "Obstructive shock"
    },
    correctAnswer: "B",
    explanation: "Cardiogenic shock presents with hypotension, tachycardia, cool extremities (poor perfusion), and elevated CVP (backup from pump failure). Hypovolemic shock would have low CVP. Distributive shock would have warm extremities."
  }
];

export const specialties = Array.from(new Set(questions.map(q => q.specialty)));
export const difficulties = ['Easy', 'Medium', 'Hard'] as const;

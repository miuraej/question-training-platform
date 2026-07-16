const questions = normalizeQuestionBank(window.questionBank) || [
  {
    id: "ce-2025-dialysis-1",
    subject: "血液浄化療法",
    year: "2025",
    title: "透析膜の物質移動",
    text: "血液透析で、濃度差を主な駆動力として溶質が移動する現象を選びなさい。",
    choices: ["拡散", "濾過", "吸着", "沈殿", "対流"],
    answer: "拡散",
    explanation: "血液透析では、小分子溶質は主に血液側と透析液側の濃度差による拡散で移動します。"
  },
  {
    id: "ce-2025-dialysis-2",
    subject: "血液浄化療法",
    year: "2025",
    title: "除水量",
    text: "透析前体重が62.0kg、目標体重が60.5kgで、透析中に飲水0.2kgがある。必要な総除水量として最も近いものを選びなさい。",
    choices: ["1.0L", "1.3L", "1.5L", "1.7L", "2.0L"],
    answer: "1.7L",
    explanation: "体重差1.5kgに透析中の飲水0.2kgを加えるため、総除水量は約1.7Lです。"
  },
  {
    id: "ce-2024-cpb-1",
    subject: "生体機能代行装置",
    year: "2024",
    title: "人工心肺の役割",
    text: "人工心肺装置で人工肺が主に担う機能を選びなさい。",
    choices: ["血液凝固", "ガス交換", "尿生成", "体温測定", "薬物代謝"],
    answer: "ガス交換",
    explanation: "人工肺は血液への酸素付加と二酸化炭素除去を行い、肺のガス交換機能を代行します。"
  },
  {
    id: "ce-2024-cpb-2",
    subject: "生体機能代行装置",
    year: "2024",
    title: "遠心ポンプ",
    text: "人工心肺に用いられる遠心ポンプの特徴として適切なものを選びなさい。",
    choices: ["後負荷の影響を受けにくい", "流量は回転数だけで常に決まる", "過度の陰圧で脱血不良を起こし得る", "拍動流しか作れない", "圧閉調整が必須である"],
    answer: "過度の陰圧で脱血不良を起こし得る",
    explanation: "遠心ポンプは回路抵抗や前負荷の影響を受けるため、脱血状態や陰圧の監視が重要です。"
  },
  {
    id: "ce-2025-ventilator-1",
    subject: "呼吸療法",
    year: "2025",
    title: "PEEP",
    text: "人工呼吸器でPEEPを設定する主な目的として適切なものを選びなさい。",
    choices: ["気道を完全に閉塞する", "呼気終末の肺胞虚脱を防ぐ", "吸気酸素濃度を0%にする", "心拍数を直接増加させる", "体外循環を開始する"],
    answer: "呼気終末の肺胞虚脱を防ぐ",
    explanation: "PEEPは呼気終末にも陽圧を保ち、肺胞虚脱を抑えて酸素化改善を期待します。"
  },
  {
    id: "ce-2023-ventilator-2",
    subject: "呼吸療法",
    year: "2023",
    title: "一回換気量",
    text: "人工呼吸管理で一回換気量の単位として一般的に用いられるものを選びなさい。",
    choices: ["mL", "mmHg", "Hz", "J", "W"],
    answer: "mL",
    explanation: "一回換気量は1回の呼吸で出入りする気量で、通常mLで表します。"
  },
  {
    id: "ce-2024-electric-1",
    subject: "医用電気電子工学",
    year: "2024",
    title: "オームの法則",
    text: "抵抗10Ωに2Aの電流が流れている。抵抗にかかる電圧を選びなさい。",
    choices: ["5V", "10V", "20V", "100V", "200V"],
    answer: "20V",
    explanation: "オームの法則 V = IR より、2A × 10Ω = 20Vです。"
  },
  {
    id: "ce-2023-electric-2",
    subject: "医用電気電子工学",
    year: "2023",
    title: "コンデンサ",
    text: "コンデンサが蓄える物理量として最も適切なものを選びなさい。",
    choices: ["電荷", "磁束", "音圧", "温度", "流量"],
    answer: "電荷",
    explanation: "コンデンサは電極間に電荷を蓄える素子です。"
  },
  {
    id: "ce-2025-safety-1",
    subject: "医療安全管理",
    year: "2025",
    title: "漏れ電流",
    text: "医用電気機器の安全管理で漏れ電流測定を行う主な目的を選びなさい。",
    choices: ["画面輝度を調整するため", "感電リスクを評価するため", "薬液濃度を測るため", "滅菌効果を判定するため", "血液型を判定するため"],
    answer: "感電リスクを評価するため",
    explanation: "漏れ電流の確認は、患者や操作者への感電リスクを低減するための重要な点検項目です。"
  },
  {
    id: "ce-2024-safety-2",
    subject: "医療安全管理",
    year: "2024",
    title: "保護接地",
    text: "クラスI医用電気機器で保護接地が重要な理由として適切なものを選びなさい。",
    choices: ["装置を軽くするため", "故障時の感電リスクを低減するため", "記録紙を節約するため", "消毒を不要にするため", "測定値を高く表示するため"],
    answer: "故障時の感電リスクを低減するため",
    explanation: "保護接地は故障時に危険な電位上昇を抑え、感電事故を防ぐ役割があります。"
  },
  {
    id: "ce-2025-measure-1",
    subject: "生体計測装置",
    year: "2025",
    title: "心電図",
    text: "標準12誘導心電図で四肢誘導に含まれるものを選びなさい。",
    choices: ["V1", "V3", "aVR", "V6", "V5"],
    answer: "aVR",
    explanation: "aVR、aVL、aVFとI、II、IIIは四肢誘導です。V1からV6は胸部誘導です。"
  },
  {
    id: "ce-2023-measure-2",
    subject: "生体計測装置",
    year: "2023",
    title: "パルスオキシメータ",
    text: "パルスオキシメータが主に推定する指標を選びなさい。",
    choices: ["SpO2", "PaCO2", "血糖値", "尿量", "血清カリウム"],
    answer: "SpO2",
    explanation: "パルスオキシメータは動脈血酸素飽和度の推定値であるSpO2を非侵襲的に測定します。"
  },
  {
    id: "ce-2024-treatment-1",
    subject: "医用治療機器",
    year: "2024",
    title: "除細動器",
    text: "除細動器の使用目的として適切なものを選びなさい。",
    choices: ["血液を浄化する", "致死的不整脈に電気的刺激を与える", "体温を測定する", "酸素濃度を下げる", "尿量を自動測定する"],
    answer: "致死的不整脈に電気的刺激を与える",
    explanation: "除細動器は心室細動などに対して電気ショックを与え、正常な拍動の回復を目指します。"
  },
  {
    id: "ce-2023-treatment-2",
    subject: "医用治療機器",
    year: "2023",
    title: "電気メス",
    text: "電気メスで対極板の接触不良がある場合に起こり得るリスクとして適切なものを選びなさい。",
    choices: ["熱傷", "低体温", "低血糖", "脱水", "貧血"],
    answer: "熱傷",
    explanation: "対極板の接触面積が不足すると電流密度が高くなり、熱傷の危険があります。"
  },
  {
    id: "ce-2025-medical-1",
    subject: "医学概論",
    year: "2025",
    title: "血液の成分",
    text: "酸素運搬に主に関与する血液成分を選びなさい。",
    choices: ["赤血球", "血小板", "リンパ球", "血漿タンパク", "好中球"],
    answer: "赤血球",
    explanation: "赤血球中のヘモグロビンが酸素と結合し、全身へ酸素を運搬します。"
  },
  {
    id: "ce-2024-medical-2",
    subject: "医学概論",
    year: "2024",
    title: "腎臓の働き",
    text: "腎臓の主な働きとして適切なものを選びなさい。",
    choices: ["胆汁の産生", "尿の生成", "インスリンの分泌", "酸素の取り込み", "消化酵素の分泌"],
    answer: "尿の生成",
    explanation: "腎臓は血液を濾過し、老廃物や余分な水分を尿として排出します。"
  }
];

function normalizeQuestionBank(bank) {
  if (!Array.isArray(bank) || !bank.length) return null;

  return bank.map((question) => {
    const answerIndexes = Array.isArray(question.answerIndexes) && question.answerIndexes.length
      ? question.answerIndexes
      : Number.isInteger(question.answerIndex)
        ? [question.answerIndex]
        : [];
    const hasAnswer = answerIndexes.length > 0;
    const answer = hasAnswer
      ? answerIndexes.map((index) => question.choices[index]).join("、")
      : "";
    const subject =
      question.category && question.category !== "未分類"
        ? question.category
        : question.examName || question.examType || "問題";

    return {
      id: question.id,
      examType: question.examType || "",
      examName: question.examName || question.examType || "試験",
      examRound: question.examRound || "",
      subject,
      year: question.year,
      session: question.session || "",
      number: question.number || "",
      title: `${question.examRound || ""} ${question.session || ""} 問${question.number}`.trim(),
      text: question.question,
      choices: question.choices.map((choice, index) => choice || `${index + 1}`),
      answer,
      explanation:
        question.explanation || (hasAnswer ? "解説はまだ登録されていません。" : "この問題は解答データがまだ登録されていません。"),
      images: question.images || [],
      choiceImages: question.choiceImages || [],
      choiceImageLayout: question.choiceImageLayout || "",
      source: question.source,
      hasAnswer,
      correctChoiceNumber: hasAnswer ? answerIndexes.map((index) => String(index + 1)).join("、") : "",
      correctChoiceNumbers: answerIndexes.map((index) => String(index + 1)),
      correctChoiceIndex: hasAnswer ? answerIndexes[0] : null,
      correctChoiceIndexes: answerIndexes,
      academicCategories: normalizeAcademicCategories(question.academicCategories)
    };
  });
}

const storageKey = "meClinicalExamProgress";
const settingsPresetStorageKey = "meClinicalExamSettingPresets.v2";
const explanationStorageKey = "meClinicalExamExplanations";
const questionEditStorageKey = "meClinicalExamQuestionEdits.v1";
const adminModeStorageKey = "meClinicalExamAdminMode";
const questionEditImportVersion = 1;
const academicCategoryOptions = Array.isArray(window.academicCategoryOptions)
  ? window.academicCategoryOptions
  : [];
let progress = JSON.parse(localStorage.getItem(storageKey) || "{}");
let settingsPresets = JSON.parse(localStorage.getItem(settingsPresetStorageKey) || "{}");
let explanationData = JSON.parse(localStorage.getItem(explanationStorageKey) || "{}");
let questionEdits = JSON.parse(localStorage.getItem(questionEditStorageKey) || "{}");
let adminMode = localStorage.getItem(adminModeStorageKey) === "true";
let currentQuestionIds = [];
let choiceOrderByQuestion = {};
let editingQuestionId = "";

const elements = {
  adminModeToggle: document.querySelector("#adminModeToggle"),
  headerSummary: document.querySelector(".app-header .summary"),
  status: document.querySelector("#statusSelect"),
  sectionList: document.querySelector("#sectionList"),
  addSection: document.querySelector("#addSectionButton"),
  sectionStart: document.querySelector("#sectionStartButton"),
  presetName: document.querySelector("#presetNameInput"),
  presetSelect: document.querySelector("#presetSelect"),
  savePreset: document.querySelector("#savePresetButton"),
  loadPreset: document.querySelector("#loadPresetButton"),
  deletePreset: document.querySelector("#deletePresetButton"),
  questionIdCsvTools: document.querySelector("#questionIdCsvTools"),
  updateQuestionIdCsv: document.querySelector("#updateQuestionIdCsvButton"),
  toggleQuestionIdCsv: document.querySelector("#toggleQuestionIdCsvButton"),
  questionIdCsv: document.querySelector("#questionIdCsvInput"),
  clearQuestionIdCsv: document.querySelector("#clearQuestionIdCsvButton"),
  list: document.querySelector("#questionList"),
  template: document.querySelector("#questionTemplate"),
  doneCount: document.querySelector("#doneCount"),
  accuracy: document.querySelector("#accuracy"),
  resultCount: document.querySelector("#resultCount"),
  printSummary: document.querySelector("#printSummary"),
  print: document.querySelector("#printButton"),
  newSet: document.querySelector("#newSetButton"),
  examName: document.querySelector("#examNameInput"),
  examMinutes: document.querySelector("#examMinutes"),
  examTimer: document.querySelector("#examTimer"),
  examSummary: document.querySelector("#examSummary"),
  pauseExam: document.querySelector("#pauseExamButton"),
  stopExam: document.querySelector("#stopExamButton"),
  shuffleChoices: document.querySelector("#shuffleChoices"),
  shuffleQuestions: document.querySelector("#shuffleQuestions"),
  printIncludeFilters: document.querySelector("#printIncludeFilters"),
  printIncludeStatus: document.querySelector("#printIncludeStatus"),
  printIncludeAnswer: document.querySelector("#printIncludeAnswer"),
  printImageSize: document.querySelector("#printImageSize"),
  exportProgressJson: document.querySelector("#exportProgressJsonButton"),
  exportProgressCsv: document.querySelector("#exportProgressCsvButton"),
  exportProgressText: document.querySelector("#exportProgressTextButton"),
  showProgressReport: document.querySelector("#showProgressReportButton"),
  exportExplanations: document.querySelector("#exportExplanationsButton"),
  importExplanations: document.querySelector("#importExplanationsButton"),
  importExplanationsFile: document.querySelector("#importExplanationsFile"),
  reset: document.querySelector("#resetButton")
};

let sectionConfigs = [];
let examTimerId = null;
let examEndsAt = null;
let examRemainingMs = null;
let examPaused = false;
let examStartedAt = null;
let activeExamName = "";

const bundledSettingsPresets = {
  "ME2種 10問トライアル": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "all",
        subject: "all",
        numbers: "",
        count: "10",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "ME2種 10問トライアル",
    examMinutes: ""
  },
  "ME2種 60問模擬": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "all",
        subject: "all",
        numbers: "",
        count: "60",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "ME2種 60問模擬",
    examMinutes: "120"
  },
  "午前 30問": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "午前",
        subject: "all",
        numbers: "",
        count: "30",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "午前 30問",
    examMinutes: ""
  },
  "午後 30問": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "午後",
        subject: "all",
        numbers: "",
        count: "30",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "午後 30問",
    examMinutes: ""
  },
  "医学基礎 10問": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "all",
        subject: "医学基礎",
        numbers: "",
        count: "10",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "医学基礎 10問",
    examMinutes: ""
  },
  "基礎工学 10問": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "all",
        subject: "基礎工学",
        numbers: "",
        count: "10",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "基礎工学 10問",
    examMinutes: ""
  },
  "基礎ME 10問": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "all",
        subject: "基礎ME",
        numbers: "",
        count: "10",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "基礎ME 10問",
    examMinutes: ""
  },
  "保守安全 10問": {
    sections: [
      {
        keyword: "",
        examName: "第2種ME技術実力検定試験",
        year: "all",
        examRound: "all",
        session: "all",
        subject: "保守安全",
        numbers: "",
        count: "10",
        collapsed: true
      }
    ],
    questionIdCsv: "",
    status: "all",
    shuffleChoices: false,
    shuffleQuestions: false,
    examName: "保守安全 10問",
    examMinutes: ""
  }
};

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function saveExplanationData() {
  localStorage.setItem(explanationStorageKey, JSON.stringify(explanationData));
}

function saveQuestionEdits() {
  localStorage.setItem(questionEditStorageKey, JSON.stringify(questionEdits));
}

function answerIndexesForQuestion(question) {
  return Array.isArray(question.correctChoiceIndexes)
    ? question.correctChoiceIndexes.filter((index) => Number.isInteger(index) && index >= 0 && index < question.choices.length)
    : Number.isInteger(question.correctChoiceIndex)
      ? [question.correctChoiceIndex]
      : [];
}

function refreshAnswerFields(question, answerIndexes = answerIndexesForQuestion(question)) {
  const normalizedIndexes = [...new Set(answerIndexes)]
    .filter((index) => Number.isInteger(index) && index >= 0 && index < question.choices.length)
    .sort((a, b) => a - b);
  const hasAnswer = normalizedIndexes.length > 0;

  question.hasAnswer = hasAnswer;
  question.answer = hasAnswer ? normalizedIndexes.map((index) => question.choices[index]).join("、") : "";
  question.correctChoiceNumber = hasAnswer ? normalizedIndexes.map((index) => String(index + 1)).join("、") : "";
  question.correctChoiceNumbers = normalizedIndexes.map((index) => String(index + 1));
  question.correctChoiceIndex = hasAnswer ? normalizedIndexes[0] : null;
  question.correctChoiceIndexes = normalizedIndexes;
}

function normalizeAcademicCategories(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.map((item) => String(item || "").trim()).filter(Boolean))];
}

function applyQuestionEditToQuestion(question) {
  const edit = questionEdits[question.id];
  if (!edit) return;
  if (questionEditLooksCorrupted(edit)) {
    delete questionEdits[question.id];
    return;
  }

  if (typeof edit.question === "string") question.text = edit.question;
  if (Array.isArray(edit.choices) && edit.choices.length === 5) {
    question.choices = edit.choices.map((choice, index) => String(choice || `${index + 1}`));
  }
  if (typeof edit.explanation === "string") question.explanation = edit.explanation;
  if (typeof edit.subject === "string") question.subject = edit.subject;
  if (Array.isArray(edit.academicCategories)) {
    question.academicCategories = normalizeAcademicCategories(edit.academicCategories);
  }
  question.adminMemo = typeof edit.adminMemo === "string" ? edit.adminMemo : "";
  question.reviewStatus = edit.reviewStatus || "unchecked";

  if (Array.isArray(edit.answerIndexes)) {
    refreshAnswerFields(question, edit.answerIndexes);
  } else if (Number.isInteger(edit.answerIndex)) {
    refreshAnswerFields(question, [edit.answerIndex]);
  } else {
    refreshAnswerFields(question);
  }
}

function applyQuestionEditsToQuestions() {
  let removedCorruptedEdit = false;
  questions.forEach((question) => {
    question.adminMemo = question.adminMemo || "";
    question.reviewStatus = question.reviewStatus || "unchecked";
    question.academicCategories = normalizeAcademicCategories(question.academicCategories);
    if (questionEdits[question.id] && questionEditLooksCorrupted(questionEdits[question.id])) {
      delete questionEdits[question.id];
      removedCorruptedEdit = true;
      return;
    }
    applyQuestionEditToQuestion(question);
  });
  if (removedCorruptedEdit) saveQuestionEdits();
}

function questionEditLooksCorrupted(edit) {
  const values = [edit?.question, ...(Array.isArray(edit?.choices) ? edit.choices : [])];
  return values.some((value) => /\?{2,}/.test(String(value || "")));
}

function reviewStatusLabel(value) {
  if (value === "edited") return "修正済";
  if (value === "verified") return "レビュー完了";
  return "未確認";
}

function updateAdminModeUI() {
  if (!elements.adminModeToggle) return;
  elements.adminModeToggle.textContent = adminMode ? "管理者モード ON" : "管理者モード OFF";
  elements.adminModeToggle.setAttribute("aria-pressed", String(adminMode));
  document.body.classList.toggle("admin-mode", adminMode);
  document.querySelectorAll(".admin-data-tools").forEach((node) => {
    node.hidden = !adminMode;
  });
}

applyQuestionEditsToQuestions();

window.ME2QuestionAPI = {
  getAcademicCategoryOptions() {
    return academicCategoryOptions.slice();
  },
  findByAcademicCategory(category) {
    const target = String(category || "").trim();
    if (!target) return [];
    return questions.filter((question) => normalizeAcademicCategories(question.academicCategories).includes(target));
  },
  searchByAcademicCategories(categories, options = {}) {
    const targets = normalizeAcademicCategories(Array.isArray(categories) ? categories : [categories]);
    if (!targets.length) return [];
    const mode = options.mode === "all" ? "all" : "any";
    return questions.filter((question) => {
      const values = normalizeAcademicCategories(question.academicCategories);
      return mode === "all"
        ? targets.every((category) => values.includes(category))
        : targets.some((category) => values.includes(category));
    });
  }
};

function questionEditExportFilename() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `me2-question-edits-${date}.json`;
}

function confirmQuestionEditExport(filename, editCount) {
  const downloadHint = "ブラウザのダウンロード先（通常は C:\\Users\\miura\\Downloads）";
  return confirm(
    [
      "手入力データを出力します。",
      "",
      `保存先: ${downloadHint}`,
      `ファイル名: ${filename}`,
      `出力件数: ${editCount}件`,
      "",
      "この内容で出力しますか？"
    ].join("\n")
  );
}

function normalizeQuestionEdit(edit) {
  if (!edit || typeof edit !== "object" || questionEditLooksCorrupted(edit)) return null;
  const normalized = {};

  if (typeof edit.question === "string") normalized.question = edit.question;
  if (Array.isArray(edit.choices) && edit.choices.length === 5) {
    normalized.choices = edit.choices.map((choice) => String(choice || ""));
  }
  if (typeof edit.explanation === "string") normalized.explanation = edit.explanation;
  if (typeof edit.subject === "string") normalized.subject = edit.subject;
  if (Array.isArray(edit.academicCategories)) {
    normalized.academicCategories = normalizeAcademicCategories(edit.academicCategories);
  }
  if (typeof edit.adminMemo === "string") normalized.adminMemo = edit.adminMemo;
  if (["unchecked", "edited", "verified"].includes(edit.reviewStatus)) {
    normalized.reviewStatus = edit.reviewStatus;
  }
  if (Array.isArray(edit.answerIndexes)) {
    const indexes = [...new Set(edit.answerIndexes)]
      .map((index) => Number(index))
      .filter((index) => Number.isInteger(index) && index >= 0 && index < 5)
      .sort((a, b) => a - b);
    if (indexes.length) normalized.answerIndexes = indexes;
  } else if (Number.isInteger(edit.answerIndex) && edit.answerIndex >= 0 && edit.answerIndex < 5) {
    normalized.answerIndex = edit.answerIndex;
  }
  if (typeof edit.updatedAt === "string") normalized.updatedAt = edit.updatedAt;

  return Object.keys(normalized).length ? normalized : null;
}

function normalizeQuestionEditImportPayload(payload) {
  if (payload?.edits && typeof payload.edits === "object") return payload.edits;
  if (payload?.questionEdits && typeof payload.questionEdits === "object") return payload.questionEdits;
  if (payload && typeof payload === "object") return payload;
  return {};
}

function exportQuestionEditsJson() {
  const filename = questionEditExportFilename();
  const editCount = Object.keys(questionEdits).length;
  if (!confirmQuestionEditExport(filename, editCount)) return;

  const payload = {
    version: questionEditImportVersion,
    exportedAt: new Date().toISOString(),
    storageKey: questionEditStorageKey,
    editCount,
    edits: questionEdits
  };
  downloadFile(
    filename,
    JSON.stringify(payload, null, 2),
    "application/json"
  );
}

function importQuestionEditsPayload(payload) {
  const incoming = normalizeQuestionEditImportPayload(payload);
  let importedCount = 0;
  let skippedCount = 0;

  Object.entries(incoming).forEach(([questionId, edit]) => {
    const normalized = normalizeQuestionEdit(edit);
    if (!normalized) {
      skippedCount += 1;
      return;
    }
    questionEdits[questionId] = {
      ...normalized,
      updatedAt: new Date().toISOString()
    };
    importedCount += 1;
  });

  saveQuestionEdits();
  applyQuestionEditsToQuestions();
  editingQuestionId = "";
  choiceOrderByQuestion = {};
  renderQuestions();
  alert(`手入力データを${importedCount}件取り込みました。${skippedCount ? ` ${skippedCount}件は形式不正のためスキップしました。` : ""}`);
}

function importQuestionEditsFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      importQuestionEditsPayload(JSON.parse(reader.result));
    } catch (error) {
      alert("手入力データJSONを読み込めませんでした。ファイル形式を確認してください。");
    }
  });
  reader.readAsText(file, "utf-8");
}

function setupAdminDataTools() {
  if (!elements.headerSummary || document.querySelector(".admin-data-tools")) return;

  const tools = document.createElement("div");
  tools.className = "admin-data-tools";
  tools.hidden = !adminMode;

  const exportButton = document.createElement("button");
  exportButton.type = "button";
  exportButton.className = "admin-data-button";
  exportButton.textContent = "手入力を出力";
  exportButton.addEventListener("click", exportQuestionEditsJson);

  const importButton = document.createElement("button");
  importButton.type = "button";
  importButton.className = "admin-data-button";
  importButton.textContent = "手入力を取り込む";

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "application/json,.json";
  fileInput.hidden = true;
  importButton.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => {
    importQuestionEditsFile(fileInput.files?.[0]);
    fileInput.value = "";
  });

  tools.append(exportButton, importButton, fileInput);
  elements.headerSummary.appendChild(tools);
}

function explanationExportFilename() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `me2-explanations-${date}.json`;
}

function createExplanationDraft(text, source = "local", author = "自分") {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    author,
    source,
    text: String(text || "").trim(),
    createdAt: new Date().toISOString()
  };
}

function getExplanationRecord(questionId) {
  return explanationData[questionId] || {
    acceptedExplanation: "",
    drafts: [],
    updatedAt: ""
  };
}

function getDisplayExplanation(question) {
  const record = getExplanationRecord(question.id);
  return record.acceptedExplanation || question.explanation || "";
}

function saveAcceptedExplanation(questionId, text) {
  const value = String(text || "").trim();
  const record = getExplanationRecord(questionId);
  explanationData[questionId] = {
    ...record,
    acceptedExplanation: value,
    updatedAt: new Date().toISOString()
  };
  saveExplanationData();
}

function addExplanationDraft(questionId, text, source = "local", author = "自分") {
  const value = String(text || "").trim();
  if (!value) return;
  const record = getExplanationRecord(questionId);
  explanationData[questionId] = {
    ...record,
    drafts: [...(record.drafts || []), createExplanationDraft(value, source, author)],
    updatedAt: new Date().toISOString()
  };
  saveExplanationData();
}

function adoptExplanationDraft(questionId, draftText) {
  saveAcceptedExplanation(questionId, draftText);
  renderQuestions();
}

function exportExplanationsJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    storageKey: explanationStorageKey,
    explanations: explanationData
  };
  downloadFile(
    explanationExportFilename(),
    JSON.stringify(payload, null, 2),
    "application/json"
  );
}

function normalizeImportedExplanations(payload) {
  if (payload?.explanations && typeof payload.explanations === "object") return payload.explanations;
  if (payload && typeof payload === "object") return payload;
  return {};
}

function importExplanationsPayload(payload) {
  const incoming = normalizeImportedExplanations(payload);
  let importedCount = 0;

  Object.entries(incoming).forEach(([questionId, record]) => {
    const existing = getExplanationRecord(questionId);
    const drafts = [...(existing.drafts || [])];
    const texts = new Set(drafts.map((draft) => draft.text));
    const candidates = [];

    if (typeof record === "string") {
      candidates.push(record);
    } else if (record && typeof record === "object") {
      if (record.acceptedExplanation) candidates.push(record.acceptedExplanation);
      if (record.text) candidates.push(record.text);
      (record.drafts || []).forEach((draft) => {
        candidates.push(typeof draft === "string" ? draft : draft?.text);
      });
    }

    candidates
      .map((text) => String(text || "").trim())
      .filter(Boolean)
      .forEach((text) => {
        if (text === existing.acceptedExplanation || texts.has(text)) return;
        drafts.push(createExplanationDraft(text, "import", "取込"));
        texts.add(text);
        importedCount += 1;
      });

    if (drafts.length !== (existing.drafts || []).length) {
      explanationData[questionId] = {
        ...existing,
        drafts,
        updatedAt: new Date().toISOString()
      };
    }
  });

  saveExplanationData();
  renderQuestions();
  alert(`${importedCount}件の解説候補を取り込みました。`);
}

function importExplanationsFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      importExplanationsPayload(JSON.parse(reader.result));
    } catch (error) {
      alert("解説JSONを読み込めませんでした。形式を確認してください。");
    }
  });
  reader.readAsText(file, "utf-8");
}

function saveSettingsPresets() {
  localStorage.setItem(settingsPresetStorageKey, JSON.stringify(settingsPresets));
}

function getPreset(name) {
  return settingsPresets[name] || null;
}

function cloneSectionConfigs() {
  return sectionConfigs.map((section) => ({ ...createDefaultSection(), ...section }));
}

function currentSettingSnapshot() {
  return {
    sections: cloneSectionConfigs(),
    questionIdCsv: elements.questionIdCsv.value.trim(),
    status: elements.status.value,
    shuffleChoices: elements.shuffleChoices.checked,
    shuffleQuestions: elements.shuffleQuestions.checked,
    examName: elements.examName.value,
    examMinutes: elements.examMinutes.value
  };
}

function renderPresetSelect() {
  const selected = elements.presetSelect.value;
  elements.presetSelect.innerHTML = `<option value="">保存した設定</option>`;

  const savedNames = Object.keys(settingsPresets).sort((a, b) => a.localeCompare(b, "ja"));
  savedNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    elements.presetSelect.appendChild(option);
  });

  if (getPreset(selected)) elements.presetSelect.value = selected;
}

function saveCurrentPreset() {
  const name = elements.presetName.value.trim();
  if (!name) {
    alert("設定名を入力してください。");
    elements.presetName.focus();
    return;
  }

  settingsPresets[name] = currentSettingSnapshot();
  saveSettingsPresets();
  renderPresetSelect();
  elements.presetSelect.value = name;
}

function loadPreset(name = elements.presetSelect.value) {
  const preset = getPreset(name);
  if (!preset) return;

  elements.presetName.value = name;
  elements.questionIdCsv.value = preset.questionIdCsv || "";
  elements.status.value = preset.status || "all";
  elements.shuffleChoices.checked = Boolean(preset.shuffleChoices);
  elements.shuffleQuestions.checked = Boolean(preset.shuffleQuestions);
  elements.examName.value = preset.examName || "";
  elements.examMinutes.value = preset.examMinutes || "";
  setQuestionIdCsvOpen(Boolean(elements.questionIdCsv.value.trim()));
  sectionConfigs = Array.isArray(preset.sections) && preset.sections.length
    ? preset.sections.map((section) => ({ ...createDefaultSection(), ...section }))
    : [createDefaultSection()];
  renderSectionControls();
  startSectionSet();
}

function deleteSelectedPreset() {
  const name = elements.presetSelect.value;
  if (!name) return;
  if (!settingsPresets[name]) return;
  if (!confirm(`「${name}」を削除しますか。`)) return;
  delete settingsPresets[name];
  saveSettingsPresets();
  elements.presetName.value = "";
  renderPresetSelect();
}

function setQuestionIdCsvOpen(isOpen) {
  elements.questionIdCsvTools.classList.toggle("collapsed", !isOpen);
  const body = elements.questionIdCsvTools.querySelector(".csv-tools-body");
  body.hidden = !isOpen;
  elements.toggleQuestionIdCsv.textContent = isOpen ? "たたむ" : "開く";
  elements.toggleQuestionIdCsv.setAttribute("aria-expanded", String(isOpen));
}

function toggleQuestionIdCsv() {
  const isOpen = elements.toggleQuestionIdCsv.getAttribute("aria-expanded") !== "true";
  setQuestionIdCsvOpen(isOpen);
  if (isOpen) elements.questionIdCsv.focus();
}

function clearQuestionIdCsv() {
  elements.questionIdCsv.value = "";
  setQuestionIdCsvOpen(false);
  startSectionSet();
}

function buildProgressExportData() {
  const records = questions
    .map((question) => {
      const status = progress[question.id]?.status || "unsolved";
      return {
        id: question.id,
        examName: question.examName,
        examRound: question.examRound,
        year: question.year,
        session: question.session,
        number: question.number,
        subject: question.subject,
        status
      };
    })
    .filter((record) => record.status !== "unsolved");

  return {
    exportedAt: new Date().toISOString(),
    storageKey,
    summary: {
      totalQuestions: questions.length,
      recordedQuestions: records.length,
      correct: records.filter((record) => record.status === "correct").length,
      review: records.filter((record) => record.status === "review").length
    },
    records
  };
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function progressExportFilename(extension) {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `me2-progress-${date}.${extension}`;
}

function statusText(status) {
  if (status === "correct") return "正解";
  if (status === "review") return "復習";
  return "未学習";
}

function csvValue(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function exportProgressJson() {
  const payload = buildProgressExportData();
  downloadFile(
    progressExportFilename("json"),
    JSON.stringify(payload, null, 2),
    "application/json"
  );
}

function exportProgressCsv() {
  const payload = buildProgressExportData();
  const header = ["実施回", "年度", "午前午後", "問題番号", "科目", "状態", "問題ID"];
  const rows = payload.records.map((record) => [
    record.examRound,
    record.year,
    record.session,
    record.number,
    record.subject,
    statusText(record.status),
    record.id
  ]);
  const csv = [header, ...rows].map((row) => row.map(csvValue).join(",")).join("\r\n");
  downloadFile(progressExportFilename("csv"), `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function exportProgressText() {
  const payload = buildProgressExportData();
  const lines = [
    "ME・臨床工学 過去問トレーニング 学習データ",
    `出力日時: ${payload.exportedAt}`,
    `総問題数: ${payload.summary.totalQuestions}`,
    `記録済み: ${payload.summary.recordedQuestions}`,
    `正解: ${payload.summary.correct}`,
    `復習: ${payload.summary.review}`,
    "",
    "記録一覧"
  ];
  payload.records.forEach((record) => {
    lines.push(
      `${record.examRound}（${record.year}） ${record.session} 問${record.number} / ${record.subject} / ${statusText(record.status)}`
    );
  });
  downloadFile(progressExportFilename("txt"), lines.join("\r\n"), "text/plain;charset=utf-8");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function showProgressReport() {
  const payload = buildProgressExportData();
  const rows = payload.records
    .map(
      (record) => `<tr>
        <td>${escapeHtml(record.examRound)}（${escapeHtml(record.year)}）</td>
        <td>${escapeHtml(record.session)}</td>
        <td>問${escapeHtml(record.number)}</td>
        <td>${escapeHtml(record.subject)}</td>
        <td>${escapeHtml(statusText(record.status))}</td>
        <td>${escapeHtml(record.id)}</td>
      </tr>`
    )
    .join("");
  const html = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <title>学習結果</title>
  <style>
    body { font-family: "Yu Gothic", "Meiryo", sans-serif; margin: 24px; color: #102a43; }
    h1 { margin: 0 0 16px; font-size: 24px; }
    .summary { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px; }
    .summary div { padding: 10px 12px; border: 1px solid #dce2ea; border-radius: 8px; background: #f8fafc; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th, td { padding: 8px 10px; border-bottom: 1px solid #dce2ea; text-align: left; }
    th { background: #eef4f8; position: sticky; top: 0; }
    @media print { body { margin: 12mm; } th { position: static; } }
  </style>
</head>
<body>
  <h1>学習結果</h1>
  <div class="summary">
    <div>総問題数: ${payload.summary.totalQuestions}</div>
    <div>記録済み: ${payload.summary.recordedQuestions}</div>
    <div>正解: ${payload.summary.correct}</div>
    <div>復習: ${payload.summary.review}</div>
  </div>
  <table>
    <thead>
      <tr><th>実施回</th><th>午前午後</th><th>問題番号</th><th>科目</th><th>状態</th><th>問題ID</th></tr>
    </thead>
    <tbody>${rows || '<tr><td colspan="6">学習記録はまだありません。</td></tr>'}</tbody>
  </table>
</body>
</html>`;
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}

const subjectOrder = ["医学基礎", "基礎工学", "基礎ME", "原理構造", "操作運用", "保守安全"];

function uniqueOptions(key) {
  return [...new Set(questions.map((question) => question[key]))].sort();
}

function orderedSubjectOptions() {
  const subjects = uniqueOptions("subject");
  return subjects.sort((a, b) => {
    const aIndex = subjectOrder.indexOf(a);
    const bIndex = subjectOrder.indexOf(b);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.localeCompare(b, "ja");
  });
}

function roundYearValue(question) {
  return `${question.examRound || ""}||${question.year || ""}`;
}

function roundYearLabel(value) {
  if (value === "all") return "すべて";
  const [examRound, year] = String(value).split("||");
  if (examRound && year) return `${examRound}（${year}）`;
  return examRound || year || value;
}

function examShortLabel(question) {
  if (String(question.examName || "").includes("第2種ME")) return "ME2種";
  return question.examName || question.examType || "試験";
}

function uniqueRoundYearOptions() {
  const seen = new Set();
  return questions
    .map((question) => ({
      value: roundYearValue(question),
      label: roundYearLabel(roundYearValue(question)),
      roundNumber: Number.parseInt(String(question.examRound || "").replace(/\D/g, ""), 10) || 0,
      year: Number.parseInt(question.year, 10) || 0
    }))
    .filter((option) => {
      if (seen.has(option.value)) return false;
      seen.add(option.value);
      return true;
    })
    .sort((a, b) => b.year - a.year || b.roundNumber - a.roundNumber);
}

function fillSelect(select, label, values) {
  select.innerHTML = `<option value="all">${label}すべて</option>`;
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function parseNumbers(value) {
  return String(value || "")
    .split(/[,\s、]+/)
    .map((value) => value.trim())
    .filter(Boolean);
}

function parseCsvQuestionCodes(value) {
  return String(value || "")
    .split(/[,\s、]+/)
    .map((value) => value.trim())
    .filter(Boolean);
}

function normalizeSessionCode(value) {
  const code = String(value || "").toLowerCase();
  if (["a", "am", "morning", "午前"].includes(code)) return "午前";
  if (["p", "pm", "afternoon", "午後"].includes(code)) return "午後";
  return value;
}

function questionMatchesShortCode(question, code) {
  const match = String(code || "").match(/^(?:2me|me2)[_-]?(\d{2})[_-]?(a|am|p|pm|午前|午後)[_-]?0*(\d{1,3})$/i);
  if (!match) return false;

  const [, round, session, number] = match;
  const questionRound = String(question.examRound || "").replace(/\D/g, "");
  return (
    questionRound === String(Number(round)) &&
    question.session === normalizeSessionCode(session) &&
    String(question.number) === String(Number(number))
  );
}

function findQuestionByCode(code) {
  return questions.find((question) => question.id === code) ||
    questions.find((question) => questionMatchesShortCode(question, code));
}

function buildCsvQuestionIds() {
  const codes = parseCsvQuestionCodes(elements.questionIdCsv.value);
  if (!codes.length) return null;

  const missing = [];
  const seen = new Set();
  const ids = [];
  codes.forEach((code) => {
    const question = findQuestionByCode(code);
    if (!question) {
      missing.push(code);
      return;
    }
    if (!seen.has(question.id)) {
      seen.add(question.id);
      ids.push(question.id);
    }
  });

  if (missing.length) {
    alert(`見つからない問題IDがあります: ${missing.join(", ")}`);
  }

  return ids;
}

function getFilteredQuestions(section = {}) {
  const keyword = String(section.keyword || "").trim().toLowerCase();
  const examName = section.examName || "all";
  const year = section.year || "all";
  const examRound = section.examRound || "all";
  const session = section.session || "all";
  const subject = section.subject || "all";
  const numbers = parseNumbers(section.numbers);
  const status = elements.status.value;

  return questions.filter((question) => {
    const record = progress[question.id]?.status || "unsolved";
    const matchesKeyword =
      !keyword ||
      [
        question.examName,
        question.examRound,
        question.subject,
        question.year,
        question.title,
        question.text,
        question.explanation,
        question.source
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);

    return (
      matchesKeyword &&
      (examName === "all" || question.examName === examName) &&
      (year === "all" || question.year === year) &&
      (examRound === "all" || question.examRound === examRound) &&
      (session === "all" || question.session === session) &&
      (subject === "all" || question.subject === subject) &&
      (!numbers.length || numbers.includes(String(question.number))) &&
      (status === "all" || record === status)
    );
  });
}

function getQuestionCount(maxCount = questions.length, value = 5) {
  const count = Number.parseInt(value, 10);
  if (!Number.isFinite(count) || count < 1) return Math.min(60, maxCount);
  return Math.min(count, maxCount);
}

function pickQuestions(availableQuestions) {
  const count = getQuestionCount(availableQuestions.length);
  return pickQuestionIds(availableQuestions, count);
}

function pickQuestionIds(availableQuestions, count) {
  const ordered = elements.shuffleQuestions.checked
    ? shuffleArray(availableQuestions)
    : [...availableQuestions];

  return ordered
    .slice(0, count)
    .map((question) => question.id);
}

function shuffleArray(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getChoiceItems(question) {
  const items = question.choices.map((choice, index) => ({
    choice,
    originalIndex: index,
    image: question.choiceImages?.[index]
  }));

  if (!elements.shuffleChoices.checked) return items;

  const existingOrder = choiceOrderByQuestion[question.id];
  if (existingOrder) {
    return existingOrder
      .map((originalIndex) => items.find((item) => item.originalIndex === originalIndex))
      .filter(Boolean);
  }

  const shuffled = shuffleArray(items);
  choiceOrderByQuestion[question.id] = shuffled.map((item) => item.originalIndex);
  return shuffled;
}

function getCurrentQuestions() {
  const selected = currentQuestionIds
    .map((id) => questions.find((question) => question.id === id))
    .filter(Boolean);

  return selected;
}

function startNewSet() {
  startSectionSet();
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function clearExamTimer() {
  if (examTimerId) {
    clearInterval(examTimerId);
    examTimerId = null;
  }
}

function updateExamTimerDisplay() {
  if (!document.body.classList.contains("exam-mode")) {
    elements.examTimer.textContent = "";
    return;
  }

  if (!examEndsAt && examRemainingMs === null) {
    elements.examTimer.textContent = "制限なし";
    return;
  }

  const remaining = examPaused ? examRemainingMs : examEndsAt - Date.now();
  elements.examTimer.textContent = examPaused
    ? `中断中 ${formatDuration(remaining)}`
    : `残り ${formatDuration(remaining)}`;

  if (!examPaused && remaining <= 0) {
    clearExamTimer();
    elements.examTimer.textContent = "終了";
    alert("制限時間になりました。");
    stopExamMode({ showSummary: true, reason: "timeup" });
  }
}

function startExamTimer() {
  clearExamTimer();
  examPaused = false;
  const minutes = Number.parseFloat(elements.examMinutes.value);
  examRemainingMs = Number.isFinite(minutes) && minutes > 0 ? minutes * 60 * 1000 : null;
  examEndsAt = examRemainingMs === null ? null : Date.now() + examRemainingMs;
  updateExamTimerDisplay();
  if (examRemainingMs !== null) {
    examTimerId = setInterval(updateExamTimerDisplay, 1000);
  }
}

function enterExamMode() {
  elements.examSummary.hidden = true;
  elements.examSummary.innerHTML = "";
  activeExamName = elements.examName.value.trim() || "模擬試験";
  examStartedAt = Date.now();
  document.body.classList.add("exam-mode");
  elements.pauseExam.hidden = false;
  elements.stopExam.hidden = false;
  elements.newSet.hidden = true;
  elements.pauseExam.textContent = "中断";
  startExamTimer();
}

function startExamMode() {
  startSectionSet();
  if (!currentQuestionIds.length) return;
  enterExamMode();
}

function pauseExamMode() {
  if (!document.body.classList.contains("exam-mode")) return;

  if (examPaused) {
    examPaused = false;
    examEndsAt = examRemainingMs === null ? null : Date.now() + examRemainingMs;
    elements.pauseExam.textContent = "中断";
    if (examRemainingMs !== null) {
      clearExamTimer();
      examTimerId = setInterval(updateExamTimerDisplay, 1000);
    }
  } else {
    examPaused = true;
    examRemainingMs = examEndsAt === null ? null : Math.max(0, examEndsAt - Date.now());
    clearExamTimer();
    elements.pauseExam.textContent = "再開";
  }

  updateExamTimerDisplay();
}

function buildExamSummary(reason = "stopped") {
  const total = currentQuestionIds.length;
  const records = currentQuestionIds.map((id) => progress[id]?.status || "unsolved");
  const correct = records.filter((status) => status === "correct").length;
  const review = records.filter((status) => status === "review").length;
  const answered = correct + review;
  const unanswered = Math.max(0, total - answered);
  const elapsed = examStartedAt ? Date.now() - examStartedAt : 0;
  const title = reason === "timeup" ? "試験終了（時間切れ）" : "試験終了";

  return `
    <div class="exam-summary-head">
      <div>
        <p class="eyebrow">Exam Summary</p>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(activeExamName || "模擬試験")}</p>
      </div>
      <button id="closeExamSummaryButton" class="ghost-button" type="button">結果を閉じる</button>
    </div>
    <div class="exam-summary-grid">
      <span><strong>${total}</strong> 問題数</span>
      <span><strong>${answered}</strong> 解答済み</span>
      <span><strong>${unanswered}</strong> 未解答</span>
      <span><strong>${correct}</strong> 正解</span>
      <span><strong>${review}</strong> 復習</span>
      <span><strong>${formatDuration(elapsed)}</strong> 経過時間</span>
    </div>
  `;
}

function showExamSummary(reason) {
  elements.examSummary.innerHTML = buildExamSummary(reason);
  elements.examSummary.hidden = false;
  const close = elements.examSummary.querySelector("#closeExamSummaryButton");
  close.addEventListener("click", () => {
    elements.examSummary.hidden = true;
    elements.examSummary.innerHTML = "";
  });
}

function stopExamMode(options = {}) {
  clearExamTimer();
  const wasExamMode = document.body.classList.contains("exam-mode");
  document.body.classList.remove("exam-mode");
  examEndsAt = null;
  examRemainingMs = null;
  examPaused = false;
  elements.examTimer.textContent = "";
  elements.pauseExam.hidden = true;
  elements.stopExam.hidden = true;
  elements.newSet.hidden = false;
  elements.pauseExam.textContent = "中断";
  elements.stopExam.textContent = "終了して結果を見る";
  if (wasExamMode && options.showSummary) {
    showExamSummary(options.reason);
  }
}

function renderSectionControls() {
  elements.sectionList.innerHTML = "";

  sectionConfigs.forEach((section, index) => {
    const card = document.createElement("div");
    card.className = "section-card";
    card.classList.toggle("collapsed", Boolean(section.collapsed));

    const header = document.createElement("div");
    header.className = "section-card-head";
    const title = document.createElement("strong");
    title.className = "section-card-title";
    title.textContent = `セクション ${index + 1}`;

    const actions = document.createElement("div");
    actions.className = "section-card-actions";

    const createToggleButton = () => {
      const toggle = document.createElement("button");
      toggle.className = "ghost-button icon-button";
      toggle.type = "button";
      toggle.textContent = section.collapsed ? "開く" : "たたむ";
      toggle.setAttribute("aria-expanded", String(!section.collapsed));
      toggle.addEventListener("click", () => {
        sectionConfigs[index].collapsed = !sectionConfigs[index].collapsed;
        renderSectionControls();
      });
      return toggle;
    };

    const remove = document.createElement("button");
    remove.className = "ghost-button icon-button";
    remove.type = "button";
    remove.textContent = "削除";
    remove.addEventListener("click", () => {
      sectionConfigs.splice(index, 1);
      renderSectionControls();
    });
    if (section.collapsed) actions.append(createToggleButton());
    actions.append(remove);
    header.append(title, actions);

    const fields = document.createElement("div");
    fields.className = "section-fields";
    fields.hidden = Boolean(section.collapsed);
    fields.append(
      createTextField("キーワード", section.keyword, "例: 透析、JIS", (value) => {
        sectionConfigs[index].keyword = value;
      }),
      createSelectField("試験の種類", section.examName, ["all", ...uniqueOptions("examName")], (value) => {
        sectionConfigs[index].examName = value;
      }),
      createRoundYearField(section, (value) => {
        const [examRound, year] = value === "all" ? ["all", "all"] : value.split("||");
        sectionConfigs[index].examRound = examRound || "all";
        sectionConfigs[index].year = year || "all";
      }),
      createSelectField("午前/午後", section.session, ["all", ...uniqueOptions("session").filter(Boolean)], (value) => {
        sectionConfigs[index].session = value;
      }),
      createSelectField("科目（分野）", section.subject, ["all", ...orderedSubjectOptions()], (value) => {
        sectionConfigs[index].subject = value;
      }),
      createTextField("問題番号", section.numbers, "例: 10, 25, 29", (value) => {
        sectionConfigs[index].numbers = value;
      }),
      createNumberField("問題数", section.count, (value) => {
        sectionConfigs[index].count = value;
      })
    );
    const footer = document.createElement("div");
    footer.className = "section-card-footer";
    footer.append(createToggleButton());
    fields.append(footer);

    card.append(header, fields);
    elements.sectionList.appendChild(card);
  });

  updatePrintOptions();
}

function optionLabel(value) {
  return value === "all" ? "すべて" : value;
}

function sectionPrintLabel(section, index) {
  const roundYear =
    section.examRound === "all" && section.year === "all"
      ? "すべて"
      : roundYearLabel(`${section.examRound || ""}||${section.year || ""}`);
  return [
    `セット${index + 1}`,
    `試験の種類：${optionLabel(section.examName)}`,
    `実施回：${roundYear}`,
    `午前/午後：${optionLabel(section.session)}`,
    `問題番号：${section.numbers || "指定なし"}`,
    `科目：${optionLabel(section.subject)}`
  ].join(" / ");
}

function updatePrintOptions() {
  document.body.classList.toggle("print-show-filters", elements.printIncludeFilters.checked);
  document.body.classList.toggle("print-show-status", elements.printIncludeStatus.checked);
  document.body.classList.toggle("print-show-answer", elements.printIncludeAnswer.checked);
  document.body.classList.toggle("print-image-small", elements.printImageSize.value === "small");
  document.body.classList.toggle("print-image-large", elements.printImageSize.value === "large");
  elements.printSummary.textContent = "";
}

function createField(labelText, control) {
  const label = document.createElement("label");
  label.className = "section-field";
  const span = document.createElement("span");
  span.textContent = labelText;
  label.append(span, control);
  return label;
}

function createTextField(labelText, value, placeholder, onInput) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = value || "";
  input.placeholder = placeholder;
  input.addEventListener("input", () => onInput(input.value));
  return createField(labelText, input);
}

function createNumberField(labelText, value, onInput) {
  const input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.max = "120";
  input.value = value || "";
  input.placeholder = "空欄は最大60問";
  input.addEventListener("input", () => onInput(input.value));
  return createField(labelText, input);
}

function createSelectField(labelText, value, options, onChange) {
  const select = document.createElement("select");
  options.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionLabel(optionValue);
    select.appendChild(option);
  });
  select.value = value || "all";
  select.addEventListener("change", () => onChange(select.value));
  return createField(labelText, select);
}

function createRoundYearField(section, onChange) {
  const select = document.createElement("select");
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = "すべて";
  select.appendChild(all);

  uniqueRoundYearOptions().forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue.value;
    option.textContent = optionValue.label;
    select.appendChild(option);
  });

  select.value =
    section.examRound === "all" && section.year === "all"
      ? "all"
      : `${section.examRound || ""}||${section.year || ""}`;
  select.addEventListener("change", () => onChange(select.value));
  return createField("実施回（年度）", select);
}

function createDefaultSection() {
  return {
    keyword: "",
    examName: "all",
    year: "all",
    examRound: "all",
    session: "all",
    subject: "all",
    numbers: "",
    count: "",
    collapsed: false
  };
}

function addSection(config = {}) {
  sectionConfigs.push({ ...createDefaultSection(), ...config });
  renderSectionControls();
}

function loadInitialSections() {
  sectionConfigs = [createDefaultSection()];
  renderSectionControls();
}

function buildSectionOrderedQuestionIds(existingIds = [], options = {}) {
  const csvIds = buildCsvQuestionIds();
  if (csvIds) return csvIds;

  if (!sectionConfigs.length) addSection();

  const usedIds = [...existingIds];
  const pickedIds = [];
  sectionConfigs.forEach((section) => {
    const allCandidates = getFilteredQuestions(section);
    const candidates = options.excludeExistingBeforePick
      ? allCandidates.filter((question) => !usedIds.includes(question.id))
      : allCandidates;
    const count = getQuestionCount(candidates.length, section.count);
    const sectionIds = pickQuestionIds(candidates, count).filter((id) => !usedIds.includes(id));
    pickedIds.push(...sectionIds);
    usedIds.push(...sectionIds);
  });

  return pickedIds;
}

function startSectionSet() {
  elements.examSummary.hidden = true;
  elements.examSummary.innerHTML = "";
  currentQuestionIds = buildSectionOrderedQuestionIds([], { excludeExistingBeforePick: true });
  choiceOrderByQuestion = {};
  renderQuestions();
}

function statusLabel(status) {
  if (status === "correct") return "正解済み";
  if (status === "review") return "復習";
  return "未学習";
}

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[！-～]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0));
}

function answerNumberSet(value) {
  const numbers = String(value || "").match(/\d+/g) || [];
  return [...new Set(numbers.map(String))].sort();
}

function sameAnswerNumbers(left, right) {
  if (!left.length || left.length !== right.length) return false;
  return left.every((number, index) => number === right[index]);
}

function renderSummary() {
  const records = Object.values(progress);
  const done = records.filter((record) => record.status === "correct" || record.status === "review").length;
  const correct = records.filter((record) => record.status === "correct").length;
  elements.doneCount.textContent = done;
  elements.accuracy.textContent = done ? `${Math.round((correct / done) * 100)}%` : "0%";
}

const emphasisTerms = [
  "誤っている",
  "誤った",
  "誤り",
  "正しくない",
  "適切ではない",
  "適切でない",
  "含まれない",
  "該当しない",
  "ではない",
  "でない",
  "しない",
  "ない"
];

const emphasisPattern = new RegExp(`(${emphasisTerms.join("|")})`, "g");

function appendEmphasizedText(container, value) {
  container.textContent = "";

  String(value || "")
    .split(emphasisPattern)
    .filter((part) => part !== "")
    .forEach((part) => {
      if (emphasisTerms.includes(part)) {
        const strong = document.createElement("strong");
        strong.textContent = part;
        container.appendChild(strong);
      } else {
        container.appendChild(document.createTextNode(part));
      }
    });
}

function toFullWidthNumber(value) {
  return String(value).replace(/\d/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) + 0xfee0)
  );
}

function renderExplanationEditor(answerBox, question, answerTitle) {
  const record = getExplanationRecord(question.id);
  const displayExplanation = getDisplayExplanation(question);
  answerBox.textContent = "";

  const title = document.createElement("strong");
  title.textContent = answerTitle;

  const explanation = document.createElement("p");
  explanation.className = "explanation-text";
  explanation.textContent = displayExplanation;

  const editor = document.createElement("div");
  editor.className = "explanation-editor";

  const label = document.createElement("label");
  label.textContent = "採用解説";
  const textarea = document.createElement("textarea");
  textarea.rows = 4;
  textarea.value = record.acceptedExplanation || "";
  textarea.placeholder = "自分の解説を入力します。保存するとこの問題の採用解説になります。";
  label.appendChild(textarea);

  const actions = document.createElement("div");
  actions.className = "explanation-actions";

  const save = document.createElement("button");
  save.type = "button";
  save.className = "ghost-button";
  save.textContent = "解説を保存";
  save.addEventListener("click", () => {
    saveAcceptedExplanation(question.id, textarea.value);
    renderQuestions();
  });

  const addDraft = document.createElement("button");
  addDraft.type = "button";
  addDraft.className = "ghost-button";
  addDraft.textContent = "候補に追加";
  addDraft.addEventListener("click", () => {
    addExplanationDraft(question.id, textarea.value);
    renderQuestions();
  });

  actions.append(save, addDraft);
  editor.append(label, actions);
  answerBox.append(title, explanation, editor);

  if (record.drafts?.length) {
    const draftList = document.createElement("div");
    draftList.className = "explanation-drafts";
    const draftTitle = document.createElement("strong");
    draftTitle.textContent = "候補解説";
    draftList.appendChild(draftTitle);

    record.drafts.forEach((draft) => {
      const item = document.createElement("div");
      item.className = "explanation-draft";
      const text = document.createElement("p");
      text.textContent = draft.text;
      const meta = document.createElement("span");
      meta.textContent = `${draft.author || "不明"} / ${draft.source || "候補"}`;
      const adopt = document.createElement("button");
      adopt.type = "button";
      adopt.className = "ghost-button";
      adopt.textContent = "採用";
      adopt.addEventListener("click", () => adoptExplanationDraft(question.id, draft.text));
      item.append(text, meta, adopt);
      draftList.appendChild(item);
    });

    answerBox.appendChild(draftList);
  }
}

function createAdminField(labelText, control) {
  const label = document.createElement("label");
  label.className = "admin-edit-field";
  const span = document.createElement("span");
  span.textContent = labelText;
  label.append(span, control);
  return label;
}

function createAdminTextarea(value, rows = 3) {
  const textarea = document.createElement("textarea");
  textarea.rows = rows;
  textarea.value = value || "";
  return textarea;
}

function createAcademicCategoryControl(selectedCategories) {
  const selected = new Set(normalizeAcademicCategories(selectedCategories));
  const group = document.createElement("div");
  group.className = "admin-academic-category-options";

  academicCategoryOptions.forEach((category) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = category;
    input.checked = selected.has(category);
    label.append(input, document.createTextNode(category));
    group.appendChild(label);
  });

  if (!academicCategoryOptions.length) {
    group.textContent = "学問領域の候補が読み込まれていません。";
  }

  return group;
}

function renderQuestionAdminEditor(node, question) {
  const isEditing = editingQuestionId === question.id;
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "ghost-button question-edit-button";
  editButton.textContent = isEditing ? "編集を閉じる" : "📝 編集";
  editButton.addEventListener("click", () => {
    editingQuestionId = isEditing ? "" : question.id;
    renderQuestions();
  });
  node.querySelector(".question-meta").appendChild(editButton);

  if (!isEditing) return;

  const editor = document.createElement("section");
  editor.className = "admin-edit-panel";
  editor.setAttribute("aria-label", "問題編集");

  const title = document.createElement("strong");
  title.textContent = "問題編集";

  const error = document.createElement("p");
  error.className = "admin-edit-error";
  error.hidden = true;

  const questionText = createAdminTextarea(question.text, 4);
  const choices = question.choices.slice(0, 5);
  while (choices.length < 5) choices.push("");
  const choiceInputs = choices.map((choice) => createAdminTextarea(choice, 2));
  const explanation = createAdminTextarea(getDisplayExplanation(question), 4);
  const subject = document.createElement("input");
  subject.type = "text";
  subject.value = question.subject || "";
  const academicCategoryGroup = createAcademicCategoryControl(question.academicCategories);
  const adminMemo = createAdminTextarea(question.adminMemo || "", 3);
  const reviewStatus = question.reviewStatus || "unchecked";
  const correctIndexes = answerIndexesForQuestion(question);
  const multiple = correctIndexes.length > 1;
  const correctInputs = [];

  const correctGroup = document.createElement("div");
  correctGroup.className = "admin-answer-options";
  [0, 1, 2, 3, 4].forEach((index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = multiple ? "checkbox" : "radio";
    input.name = `admin-answer-${question.id}`;
    input.value = String(index);
    input.checked = correctIndexes.includes(index);
    correctInputs.push(input);
    label.append(input, document.createTextNode(`${index + 1}`));
    correctGroup.appendChild(label);
  });

  const reviewGroup = document.createElement("div");
  reviewGroup.className = "admin-answer-options";
  [
    ["unchecked", "未確認"],
    ["edited", "修正済"],
    ["verified", "レビュー完了"]
  ].forEach(([value, labelText]) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `review-status-${question.id}`;
    input.value = value;
    input.checked = reviewStatus === value;
    label.append(input, document.createTextNode(labelText));
    reviewGroup.appendChild(label);
  });

  const choiceGrid = document.createElement("div");
  choiceGrid.className = "admin-choice-grid";
  choiceInputs.forEach((input, index) => {
    choiceGrid.appendChild(createAdminField(`${index + 1})`, input));
  });

  const actions = document.createElement("div");
  actions.className = "admin-edit-actions";

  const save = document.createElement("button");
  save.type = "button";
  save.className = "primary-button";
  save.textContent = "保存";
  save.addEventListener("click", () => {
    const nextQuestion = questionText.value.trim();
    const nextChoices = choiceInputs.map((input) => input.value.trim());
    const nextAnswerIndexes = correctInputs
      .filter((input) => input.checked)
      .map((input) => Number(input.value));
    const nextAcademicCategories = Array.from(
      academicCategoryGroup.querySelectorAll("input[type='checkbox']:checked")
    ).map((input) => input.value);
    const nextReviewStatus = editor.querySelector(`input[name="review-status-${question.id}"]:checked`)?.value || "unchecked";
    const errors = [];

    if (!nextQuestion) errors.push("問題文を入力してください。");
    if (nextChoices.length !== 5 || nextChoices.some((choice) => !choice)) {
      errors.push("選択肢を5個すべて入力してください。");
    }
    if ([nextQuestion, ...nextChoices].some((value) => /\?{2,}/.test(value))) {
      errors.push("文字化けの可能性があるため、?? を含む内容は保存できません。");
    }
    if (multiple) {
      if (!nextAnswerIndexes.length) errors.push("複数正解を1つ以上選択してください。");
    } else if (nextAnswerIndexes.length !== 1 || nextAnswerIndexes[0] < 0 || nextAnswerIndexes[0] > 4) {
      errors.push("正解を1つ選択してください。");
    }

    if (errors.length) {
      error.textContent = errors.join(" ");
      error.hidden = false;
      return;
    }

    const edit = {
      question: nextQuestion,
      choices: nextChoices,
      explanation: explanation.value.trim(),
      subject: subject.value.trim(),
      academicCategories: nextAcademicCategories,
      adminMemo: adminMemo.value.trim(),
      reviewStatus: nextReviewStatus,
      updatedAt: new Date().toISOString()
    };
    if (multiple) {
      edit.answerIndexes = nextAnswerIndexes;
    } else {
      edit.answerIndex = nextAnswerIndexes[0];
    }
    questionEdits[question.id] = edit;
    saveQuestionEdits();
    applyQuestionEditToQuestion(question);
    editingQuestionId = "";
    choiceOrderByQuestion = {};
    renderQuestions();
  });

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.className = "ghost-button";
  cancel.textContent = "キャンセル";
  cancel.addEventListener("click", () => {
    editingQuestionId = "";
    renderQuestions();
  });

  actions.append(save, cancel);
  editor.append(
    title,
    error,
    createAdminField("問題文", questionText),
    choiceGrid,
    createAdminField(multiple ? "正解（複数）" : "正解", correctGroup),
    createAdminField("解説", explanation),
    createAdminField("分類", subject),
    createAdminField("学問領域", academicCategoryGroup),
    createAdminField("管理者メモ", adminMemo),
    createAdminField("レビュー状態", reviewGroup),
    actions
  );

  node.querySelector(".choices").after(editor);
}

function renderQuestions() {
  const filtered = getCurrentQuestions();
  elements.list.innerHTML = "";
  elements.resultCount.textContent = `${filtered.length}問`;

  if (!filtered.length) {
    elements.list.innerHTML = '<p class="empty">左の条件を設定して「更新」または「新たに出題」を押してください。</p>';
    renderSummary();
    return;
  }

  filtered.forEach((question, questionIndex) => {
    const node = elements.template.content.firstElementChild.cloneNode(true);
    const currentStatus = progress[question.id]?.status || "unsolved";
    const displayQuestionNumber = questionIndex + 1;
    const sourceQuestionNumber = question.number || questionIndex + 1;
    const hasQuestionImages = Boolean(question.images?.length);
    const hasChoiceImages = Boolean(question.choiceImages?.some(Boolean));
    node.classList.toggle("has-question-and-choice-images", hasQuestionImages && hasChoiceImages);
    node.classList.toggle("compact-choice-images", question.choiceImageLayout === "compact-grid");
    const meta = node.querySelector(".question-meta");

    [
      examShortLabel(question),
      question.subject,
      roundYearLabel(roundYearValue(question)),
      question.session,
      `問題${sourceQuestionNumber}`,
      statusLabel(currentStatus)
    ].forEach((text, index) => {
      const tag = document.createElement("span");
      tag.className = `tag ${index === 5 ? currentStatus : ""}`;
      tag.textContent = text;
      meta.appendChild(tag);
    });
    if (adminMode) {
      const reviewTag = document.createElement("span");
      reviewTag.className = `tag admin-review ${question.reviewStatus || "unchecked"}`;
      reviewTag.textContent = reviewStatusLabel(question.reviewStatus);
      meta.appendChild(reviewTag);
      renderQuestionAdminEditor(node, question);
    }

    node.querySelector("h3").remove();
    appendEmphasizedText(
      node.querySelector(".question-text"),
      `【問題${displayQuestionNumber}】${question.text}`
    );

    const imageContainer = node.querySelector(".question-images");
    (question.images || []).forEach((image) => {
      const figure = document.createElement("figure");
      const link = document.createElement("a");
      const img = document.createElement("img");

      link.href = image.src;
      link.target = "_blank";
      img.src = image.src;
      img.alt = image.alt || question.title;

      link.appendChild(img);
      figure.append(link);
      imageContainer.appendChild(figure);
    });

    const choices = node.querySelector(".choices");
    const choiceItems = getChoiceItems(question);
    const displayCorrectNumbers = question.correctChoiceIndexes
      .map((correctIndex) => choiceItems.findIndex((item) => item.originalIndex === correctIndex) + 1)
      .filter((displayNumber) => displayNumber > 0)
      .map(String);
    const answerLabel = displayCorrectNumbers.length
      ? displayCorrectNumbers.map((number) => `${number})`).join("、")
      : question.correctChoiceNumber
        ? `${question.correctChoiceNumber})`
        : "";
    const answerTitle = displayCorrectNumbers.length > 1 ? `複数正解：${answerLabel}` : `答え: ${answerLabel}`;

    choiceItems.forEach((choiceItem, displayIndex) => {
      const item = document.createElement("li");
      const number = document.createElement("span");
      number.className = "choice-number";
      number.textContent = `${displayIndex + 1})`;
      item.appendChild(number);

      const text = document.createElement("span");
      text.className = "choice-content";
      if (!choiceItem.image) {
        text.textContent = choiceItem.choice;
        item.appendChild(text);
      }

      const choiceImage = choiceItem.image;
      if (choiceImage) {
        const img = document.createElement("img");
        img.className = "choice-image";
        img.src = choiceImage.src;
        img.alt = choiceImage.alt || "選択肢の図";
        item.appendChild(img);
      }

      item.addEventListener("click", () => {
        answerInput.dataset.selectedChoiceIndex = String(choiceItem.originalIndex);
        answerInput.value = choiceItem.image ? `選択肢 ${displayIndex + 1}` : choiceItem.choice;
      });
      choices.appendChild(item);
    });

    const answerBox = node.querySelector(".answer-box");
    renderExplanationEditor(answerBox, question, answerTitle);

    const printAnswer = document.createElement("div");
    printAnswer.className = "print-answer";
    printAnswer.textContent = displayCorrectNumbers.length > 1 ? `複数正解：${answerLabel}` : `正解：${answerLabel}`;
    choices.after(printAnswer);

    const answerForm = node.querySelector(".answer-form");
    const answerInput = node.querySelector(".answer-input");
    const feedback = node.querySelector(".feedback");

    answerInput.addEventListener("input", () => {
      delete answerInput.dataset.selectedChoiceIndex;
    });

    answerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const userAnswer = normalizeAnswer(answerInput.value);

      if (!userAnswer) {
        feedback.className = "feedback review";
        feedback.textContent = "回答を入力してください。";
        return;
      }

      if (!question.hasAnswer) {
        feedback.className = "feedback review";
        feedback.textContent = "この問題は正解データが未登録です。解答番号を登録すると自動判定できます。";
        return;
      }

      const selectedChoiceIndex = answerInput.dataset.selectedChoiceIndex;
      const expectedDisplayNumbers = [...displayCorrectNumbers].sort();
      const typedNumbers = answerNumberSet(userAnswer);
      const isCorrect = selectedChoiceIndex
        ? question.correctChoiceIndexes.includes(Number(selectedChoiceIndex))
        : userAnswer === normalizeAnswer(question.answer) ||
          userAnswer === normalizeAnswer(question.correctChoiceNumber) ||
          displayCorrectNumbers.some((number) => userAnswer === normalizeAnswer(number)) ||
          sameAnswerNumbers(typedNumbers, expectedDisplayNumbers) ||
          userAnswer === normalizeAnswer(answerLabel) ||
          question.correctChoiceNumbers.some((number) => userAnswer === normalizeAnswer(number));
      progress[question.id] = { status: isCorrect ? "correct" : "review" };
      saveProgress();

      feedback.className = `feedback ${isCorrect ? "correct" : "review"}`;
      feedback.textContent = isCorrect
        ? "正解です。学習記録に反映しました。"
        : "もう一度確認しましょう。復習に追加しました。";
      answerBox.hidden = false;
      renderSummary();
    });

    node.querySelector(".show-answer").addEventListener("click", () => {
      answerBox.hidden = !answerBox.hidden;
    });

    node.querySelector(".mark-correct").addEventListener("click", () => {
      progress[question.id] = { status: "correct" };
      saveProgress();
      renderQuestions();
    });

    node.querySelector(".mark-review").addEventListener("click", () => {
      progress[question.id] = { status: "review" };
      saveProgress();
      renderQuestions();
    });

    node.querySelector(".retry-question").addEventListener("click", () => {
      delete progress[question.id];
      saveProgress();
      answerInput.value = "";
      feedback.className = "feedback";
      feedback.textContent = "";
      answerBox.hidden = true;
      renderQuestions();
    });

    elements.list.appendChild(node);
  });

  renderSummary();
}

function boot() {
  loadInitialSections();
  renderPresetSelect();
  updateAdminModeUI();
  setupAdminDataTools();
  setQuestionIdCsvOpen(Boolean(elements.questionIdCsv.value.trim()));

  elements.adminModeToggle?.addEventListener("click", () => {
    adminMode = !adminMode;
    localStorage.setItem(adminModeStorageKey, String(adminMode));
    editingQuestionId = "";
    updateAdminModeUI();
    renderQuestions();
  });
  elements.newSet.addEventListener("click", startExamMode);
  elements.pauseExam.addEventListener("click", pauseExamMode);
  elements.stopExam.addEventListener("click", () => stopExamMode({ showSummary: true }));
  elements.print.addEventListener("click", () => {
    updatePrintOptions();
    window.print();
  });
  [
    elements.printIncludeFilters,
    elements.printIncludeStatus,
    elements.printIncludeAnswer,
    elements.printImageSize
  ].forEach((control) => {
    control.addEventListener("change", updatePrintOptions);
  });
  elements.addSection.addEventListener("click", () => addSection());
  elements.sectionStart.addEventListener("click", startSectionSet);
  elements.savePreset.addEventListener("click", saveCurrentPreset);
  elements.loadPreset.addEventListener("click", () => loadPreset());
  elements.deletePreset.addEventListener("click", deleteSelectedPreset);
  elements.updateQuestionIdCsv.addEventListener("click", startSectionSet);
  elements.toggleQuestionIdCsv.addEventListener("click", toggleQuestionIdCsv);
  elements.clearQuestionIdCsv.addEventListener("click", clearQuestionIdCsv);
  elements.presetSelect.addEventListener("change", () => {
    elements.presetName.value = elements.presetSelect.value;
  });
  elements.status.addEventListener("input", startSectionSet);
  elements.exportProgressJson.addEventListener("click", exportProgressJson);
  elements.exportProgressCsv.addEventListener("click", exportProgressCsv);
  elements.exportProgressText.addEventListener("click", exportProgressText);
  elements.showProgressReport.addEventListener("click", showProgressReport);
  elements.exportExplanations.addEventListener("click", exportExplanationsJson);
  elements.importExplanations.addEventListener("click", () => elements.importExplanationsFile.click());
  elements.importExplanationsFile.addEventListener("change", () => {
    importExplanationsFile(elements.importExplanationsFile.files?.[0]);
    elements.importExplanationsFile.value = "";
  });
  elements.shuffleChoices.addEventListener("change", () => {
    choiceOrderByQuestion = {};
    renderQuestions();
  });
  elements.shuffleQuestions.addEventListener("change", startSectionSet);

  elements.reset.addEventListener("click", () => {
    if (!confirm("学習記録をリセットしますか？")) return;
    stopExamMode({ showSummary: false });
    elements.examSummary.hidden = true;
    elements.examSummary.innerHTML = "";
    progress = {};
    saveProgress();
    currentQuestionIds = [];
    choiceOrderByQuestion = {};
    renderQuestions();
  });

  renderQuestions();
  updatePrintOptions();
}

boot();

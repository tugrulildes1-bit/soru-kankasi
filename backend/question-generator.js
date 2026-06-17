const fs = require("fs");
const path = require("path");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NAMES = [
  "Arif",
  "Nazlı",
  "Ebrar",
  "Tuğba",
  "Tuğrul",
  "Kerem",
  "Furkan",
  "Recep",
  "Can"
];

function getRandomName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
function loadTemplates() {

  const filePath = path.join(
    __dirname,
    "..",
    "question-bank",
    "grade1",
    "toplama.json"
  );

  console.log("__dirname =", __dirname);
  console.log("filePath =", filePath);

  const rawData = fs.readFileSync(filePath, "utf8");

  return JSON.parse(rawData);
}

function testLoadTemplates() {
  const templates = loadTemplates();

  console.log("Yüklenen Template'ler:");
  console.log(templates);
}

function generateQuestion() {
  const templates = loadTemplates();

  const template = templates[0];

  const a = getRandomNumber(
    template.variables.a.min,
    template.variables.a.max
  );

  const b = getRandomNumber(
    template.variables.b.min,
    template.variables.b.max
  );

  const name = getRandomName();

  let questionText = template.template;

  questionText = questionText.replaceAll("{name}", name);
  questionText = questionText.replace("{a}", a);
  questionText = questionText.replace("{b}", b);

  console.log("\nÜRETİLEN SORU:");
  console.log(questionText);
const correctAnswer = a + b;
const options = [
  correctAnswer,
  correctAnswer + 1,
  correctAnswer - 1,
  correctAnswer + 2
];

shuffleArray(options);

const formattedOptions = {
  A: options[0],
  B: options[1],
  C: options[2],
  D: options[3]
};

const correctLetter =
  Object.keys(formattedOptions).find(
    key => formattedOptions[key] === correctAnswer
  );
 console.log("\nŞIKLAR:");
console.log(formattedOptions);

console.log("\nDOĞRU ŞIK:");
console.log(correctLetter);

console.log("\nDOĞRU CEVAP:");
console.log(correctAnswer);
}
generateQuestion();
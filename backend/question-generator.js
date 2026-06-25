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
  "Özge"
];

function getRandomName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadTemplates(fileName) {
 const filePath = path.join(
  __dirname,
  "..",
  "question-bank",
  "grade1",
  fileName
);

  const rawData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(rawData);
}

function generateQuestion(fileName) {
  const templates = loadTemplates(fileName);

  const template =
    templates[Math.floor(Math.random() * templates.length)];

  console.log("\nSEÇİLEN TEMPLATE:");
  console.log(template.id);

  // Kavram soruları
  if (!template.variables) {
  return {
    scene: template.scene,
    questionText: template.questionText,
    options: template.options,
    correctAnswer: template.correctAnswer
  };
}

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

  let correctAnswer;

  if (template.validatorType === "subtraction") {
    correctAnswer = a - b;
  }
  else if (template.validatorType === "multiplication") {
    correctAnswer = a * b;
  }
  else {
    correctAnswer = a + b;
  }

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

  return {
    questionText,
    options: formattedOptions,
    correctAnswer: correctLetter
  };
}

function generateQuestions(count, fileName) {
  const questions = [];

  for (let i = 0; i < count; i++) {
    questions.push(
      generateQuestion(fileName)
    );
  }

  return questions;
}

module.exports = {
  generateQuestions
};
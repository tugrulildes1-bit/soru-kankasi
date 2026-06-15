const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");
const { CURRICULUM } = require("../js/curriculum.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
function validateQuestion(question) {
  try {
    const result = Function(
      `"use strict"; return (${question.solutionExpression})`
    )();

    const correctValue = Number(
      question.options[question.correctAnswer]
    );

    return result === correctValue;
  } catch {
    return false;
  }
}
app.post("/generate-question", async (req, res) => {
  try {
const { grade, subject, topic, count } = req.body;
const topicData =
  CURRICULUM.grades[grade]
    .subjects[subject]
    .topics[topic];
    const outcomesText = topicData.outcomes.join("\n- ");

const hintsText = topicData.promptHints.join("\n- ");

const prompt = `
Türkiye'de yaşayan ${grade}. sınıf öğrencileri için,
MEB müfredatına uygun ${count} adet "${topicData.name}" konusu sorusu üret.

Bu konuya ait kazanımlar:
- ${outcomesText}

Bu konu için dikkat edilmesi gereken kurallar:
- ${hintsText}

Genel kurallar:
- Sorular günlük hayattan olsun.
- Türk isimleri kullan.
- 4 şıklı çoktan seçmeli olsun.
- %20 kolay, %50 orta, %30 zor dağılımı olsun.
- Çocuk dostu dil kullan.
- Aynı soru kalıbını tekrar etme.
- Her soru için kısa çözüm açıklaması yaz.

Sadece GEÇERLİ JSON döndür.
Markdown kullanma.
Açıklama ekleme.

Tam olarak ${count} adet soru içeren JSON ARRAY döndür.

ÖRNEK ÇIKTI:

[
  {
    "questionText": "...",
    "options": {
      "A": "...",
      "B": "...",
      "C": "...",
      "D": "..."
    },
    "correctAnswer": "A",
    "explanation": "..."
  }
]

JSON dizisinin uzunluğu mutlaka ${count} olmalıdır.

Her soru nesnesinde şu alanlar bulunmalıdır:
- questionText
- solutionExpression
- options
- correctAnswer
- explanation

solutionExpression alanı, sorunun çözümünde kullanılan matematiksel işlemi içermelidir.

Kurallar:
- Sadece matematiksel ifade yaz.
- Açıklama yazma.
- Eşittir (=) işareti kullanma.
- Sonucu yazma.

Örnekler:
16+7
24-6
4*5
20/4
15-5+8

ÖRNEK:

{
  "questionText": "Ayşe'nin 16 kalemi vardı. 7 kalem daha aldı. Ayşe'nin toplam kaç kalemi oldu?",
  "solutionExpression": "16+7",
  "options": {
    "A": "21",
    "B": "22",
    "C": "23",
    "D": "24"
  },
  "correctAnswer": "C",
  "explanation": "16 ile 7 toplanır ve 23 bulunur."

`;
let validQuestions = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
  console.log(`Deneme ${attempt}/3`);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const cleaned = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const questions = JSON.parse(cleaned);
console.log(
  JSON.stringify(questions, null, 2)
);
 let allValid = true;

if (topicData.validatorType !== "none") {
  allValid = questions.every(validateQuestion);
}

  console.log("Validator sonucu:", allValid);

  if (allValid) {
    validQuestions = questions;
    break;
  }

  console.log("Sorular hatalı bulundu. Yeniden üretiliyor...");
}
if (!validQuestions) {
  return res.status(500).json({
    error: "Geçerli soru seti üretilemedi.",
  });
}

res.json({
  questions: validQuestions,
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Soru üretilemedi.",
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 Backend çalışıyor: http://localhost:3000");
});
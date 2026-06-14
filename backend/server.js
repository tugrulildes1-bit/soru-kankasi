const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/generate-question", async (req, res) => {
  try {
const prompt = `
MEB 2. sınıf matematik düzeyinde,
4 şıklı,
günlük hayattan,
Türk isimleri kullanılan,
tek doğru cevabı olan,
hikayeli bir toplama problemi üret

JSON formatında cevap ver:

{
"question": "...",
"options": ["A", "B", "C", "D"],
"correctAnswer": "A",
"explanation": "..."
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      text: response.text,
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
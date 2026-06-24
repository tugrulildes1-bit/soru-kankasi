const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateTemplates() {

  const prompt = `
1. sınıf matematik toplama işlemi için 10 adet yeni soru şablonu üret.

Kurallar:

- {name} kullanılacak.
- {a} kullanılacak.
- {b} kullanılacak.
- Türkçe olacak.
- Çocuk dostu olacak.
- Farklı senaryolar kullan.
- Sadece JSON döndür.

Örnek:

[
  {
    "id": "add_101",
    "template": "{name} isimli öğrencinin {a} kalemi vardı. Öğretmeni {b} kalem daha verdi. Toplam kaç kalemi oldu?",
    "validatorType": "addition",
    "variables": {
      "a": {
        "min": 1,
        "max": 10
      },
      "b": {
        "min": 1,
        "max": 10
      }
    }
  }
]
`;

  const response =
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

  console.log(response.text);
}

generateTemplates();
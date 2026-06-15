/**
 * AI Soru Bankası - Quiz Motoru (Mock Sürüm)
 * 
 * Bu dosya, Gemini entegrasyonu öncesinde arayüz ve kullanıcı akışını test etmek amacıyla
 * konuya göre otomatik zorluk dağılımı yapan ve kolaydan zora sıralayan sahte soru üretecidir.
 */

// Konu bazlı statik mock soru kütüphanesi
const MOCK_QUESTIONS_LIBRARY = {
  "toplama-islemi": [
    // Kolay Sorular (%20)
    {
      questionText: "Ali'nin 5 kalemi vardı. Babası ona 3 kalem daha aldı. Ali'nin toplam kaç kalemi oldu?",
      options: { A: "6", B: "7", C: "8", D: "9" },
      correctAnswer: "C",
      difficulty: "easy",
      explanation: "Ali'nin kalemleri arttığı için toplama yaparız: 5 + 3 = 8."
    },
    {
      questionText: "Zeynep'in 10 boya kalemi vardı. 4 tane de annesi verdi. Zeynep'in kaç boya kalemi oldu?",
      options: { A: "12", B: "14", C: "15", D: "16" },
      correctAnswer: "B",
      difficulty: "easy",
      explanation: "10 ile 4 sayısını topladığımızda 14 eder: 10 + 4 = 14."
    },
    {
      questionText: "Sınıfımızda 8 kız, 7 erkek öğrenci vardır. Sınıfımızda toplam kaç öğrenci vardır?",
      options: { A: "13", B: "14", C: "15", D: "16" },
      correctAnswer: "C",
      difficulty: "easy",
      explanation: "Kız ve erkek öğrencilerinin toplamını bulmak için: 8 + 7 = 15."
    },
    
    // Orta Sorular (%50)
    {
      questionText: "Bir kümeste 18 tavuk ve tavuklardan 5 fazla horoz vardır. Bu kümeste toplam kaç hayvan vardır?",
      options: { A: "23", B: "36", C: "41", D: "43" },
      correctAnswer: "D",
      difficulty: "medium",
      explanation: "Önce horoz sayısını buluruz: 18 + 5 = 23. Sonra toplamı buluruz: 18 + 23 = 43."
    },
    {
      questionText: "Elif bir kitaptan dün 24 sayfa okudu. Bugün dünden 6 sayfa fazla okuduğuna göre iki günde toplam kaç sayfa okumuştur?",
      options: { A: "30", B: "48", C: "54", D: "60" },
      correctAnswer: "C",
      difficulty: "medium",
      explanation: "Bugün okunan sayfa: 24 + 6 = 30. Toplam sayfa sayısı: 24 + 30 = 54 sayfa."
    },
    {
      questionText: "Ahmet'in 15 bilyesi vardı. Arkadaşı Mehmet ona 12 bilye verdi. Ayşe de 9 bilye verdi. Ahmet'in kaç bilyesi oldu?",
      options: { A: "36", B: "38", C: "40", D: "42" },
      correctAnswer: "A",
      difficulty: "medium",
      explanation: "Bütün bilyeleri toplarız: 15 + 12 + 9 = 36."
    },
    {
      questionText: "3 onluk ve 5 birlikten oluşan sayıya, 2 onluk ve 4 birlik eklersek yeni sayı kaç olur?",
      options: { A: "49", B: "59", C: "69", D: "79" },
      correctAnswer: "B",
      difficulty: "medium",
      explanation: "Birinci sayı: 35, İkinci sayı: 24. İkisini toplarız: 35 + 24 = 59."
    },
    {
      questionText: "Bir otoparkta 25 kırmızı, kırmızı arabalardan 12 fazla beyaz araba vardır. Otoparkta toplam kaç araba vardır?",
      options: { A: "37", B: "52", C: "62", D: "72" },
      correctAnswer: "C",
      difficulty: "medium",
      explanation: "Beyaz arabalar: 25 + 12 = 37. Toplam araba sayısı: 25 + 37 = 62."
    },

    // Zor Sorular (%30)
    {
      questionText: "İki basamaklı en küçük sayı ile iki basamaklı en büyük sayının toplamı kaçtır? (Not: Sayılar farklı olmalıdır)",
      options: { A: "107", B: "108", C: "109", D: "110" },
      correctAnswer: "C",
      difficulty: "hard",
      explanation: "İki basamaklı en küçük sayı 10'dur. En büyük sayı ise 99'dur. Toplamları: 10 + 99 = 109."
    },
    {
      questionText: "Bir bakkal sabah 36 ekmek sattı. Öğleden sonra, sabahtan 14 fazla ekmek sattı. Akşam ise 10 ekmek daha sattı. Bakkal toplam kaç ekmek satmıştır?",
      options: { A: "86", B: "90", C: "96", D: "100" },
      correctAnswer: "C",
      difficulty: "hard",
      explanation: "Öğleden sonra satılan: 36 + 14 = 50. Toplam satılan ekmek: 36 + 50 + 10 = 96."
    },
    {
      questionText: "Ömer'in cebinde 45 TL parası vardı. Dedesi 25 TL verdi. Ömer bu paranın 15 TL'si ile defter aldı. Kalan parasının üzerine babası 20 TL daha ekledi. Ömer'in son durumda kaç TL'si oldu?",
      options: { A: "70", B: "75", C: "80", D: "85" },
      correctAnswer: "B",
      difficulty: "hard",
      explanation: "Önce toplam para: 45 + 25 = 70. Harcanan çıkınca: 70 - 15 = 55. Babası ekleyince: 55 + 20 = 75 TL."
    },
    {
      questionText: "Bir otobüste 16 yolcu vardı. İlk durakta otobüse 9 yolcu bindi. İkinci durakta 12 yolcu daha bindi. Otobüsteki toplam yolcu sayısı kaç olmuştur?",
      options: { A: "25", B: "37", C: "39", D: "41" },
      correctAnswer: "B",
      difficulty: "hard",
      explanation: "İlk durak sonu: 16 + 9 = 25. İkinci durak sonu: 25 + 12 = 37."
    }
  ]
};

/**
 * Belirtilen konuya ait dinamik mock sorular üretir (Eğer kütüphanede o konu yoksa fallback olarak çalışır).
 * @param {string} topicKey 
 * @param {string} difficulty 
 * @param {number} index 
 * @returns {object}
 */
function generateDynamicMockQuestion(topicKey, difficulty, index) {
  const val1 = (index + 1) * 5;
  const val2 = (index + 1) * 3;
  const correctVal = val1 + val2;

  return {
    questionText: `Ahmet'in ${val1} elması vardı. Ayşe ona ${val2} elma daha verdi. Ahmet'in toplam kaç elması oldu?`,
    options: {
      A: `${correctVal - 2}`,
      B: `${correctVal}`,
      C: `${correctVal + 3}`,
      D: `${correctVal + 5}`
    },
    correctAnswer: "B",
    difficulty: difficulty,
    explanation: `Problemde elmalar arttığı için toplama işlemi yaparız: ${val1} + ${val2} = ${correctVal}.`
  };
}

export const QuizEngine = {
  /**
   * Soru hazırlama ve zorluk dağıtımı işlemlerini gerçekleştirir.
   * @param {object} selection - { grade, subject, topic, count }
   * @returns {Promise<Array>} - Kolaydan zora sıralanmış soru nesneleri dizisi
   */
    async getQuestions(selection) {
    try {
        const response = await fetch("http://localhost:3000/generate-question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selection)
        });

        const data = await response.json();

        console.log("🤖 Gemini cevabı:", data);

        console.log("✅ Backend cevabı:", data);

return data.questions;

    } catch (error) {
        console.error("Gemini bağlantı hatası:", error);
        throw error;
    }
  }
};

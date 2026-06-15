/**
 * AI Soru Bankası - Müfredat Veri Kaynağı (Dinamik ve Genişletilebilir Yapı)
 * 
 * Bu dosya, uygulamanın desteklediği tüm sınıf seviyelerini, dersleri, konu başlıklarını
 * ve pedagojik kazanımları (outcomes) hiyerarşik bir yapıda tutar.
 * 
 * Yeni bir sınıf veya ders eklemek için sadece bu veri yapısına ekleme yapılması yeterlidir.
 * Kullanıcı arayüzü (dropdown'lar) bu yapıyı dinamik olarak okuyup oluşturacaktır.
 */

export const CURRICULUM = {
  grades: {
    "1": {
  name: "1. Sınıf",
  subjects: {
    "matematik": {
      name: "Matematik",
      topics: {
        "dogal-sayilar": {
    name: "Doğal Sayılar",

    validatorType: "none",

    promptHints: [
        "Sayılar 20'yi geçmesin.",
        "Somut nesneler kullan.",
        "Çocukların günlük yaşamından örnekler ver.",
        "Karşılaştırma sorularında az-çok kavramlarını kullan."
    ],

    outcomes: [
        "20'ye kadar olan doğal sayıları okur ve yazar.",
        "Nesne sayısı ile rakamlar arasında ilişki kurar.",
        "Doğal sayıları karşılaştırır ve sıralar.",
        "Birer ve onar ritmik sayar.",
        "Eksik bırakılan sayıları tamamlar."
    ]
},

  "toplama-islemi": {
  name: "Toplama İşlemi",

  validatorType: "addition",

  promptHints: [
    "Toplam sonucu 20'yi geçmesin.",
    "Elma, kalem, oyuncak gibi somut nesneler kullan.",
    "Günlük hayat problemleri oluştur.",
    "Çocuk dostu ve kısa cümleler kullan.",
    "Eldesiz toplama işlemleri tercih et.",
    "1. sınıf seviyesini aşma."
  ],

   outcomes: [
    "20'ye kadar olan doğal sayılarla toplama işlemi yapar.",
    "Toplama işlemini somut nesneler kullanarak modeller.",
    "Toplama işlemini gerektiren günlük hayat problemlerini çözer.",
    "Eksik toplananı bulur."
  ]
},

"cikarma-islemi": {
  name: "Çıkarma İşlemi",

  validatorType: "subtraction",

  promptHints: [
    "Sonuçlar 20'yi geçmesin.",
    "Eksilme ve verme senaryoları kullan.",
    "Elma, kalem, oyuncak gibi somut nesneler kullan.",
    "Günlük hayat problemleri oluştur.",
    "Çocuk dostu ve kısa cümleler kullan.",
    "1. sınıf seviyesini aşma."
  ],

  outcomes: [
    "20'ye kadar olan doğal sayılarla çıkarma işlemi yapar.",
    "Çıkarma işlemini somut nesneler kullanarak modeller.",
    "Çıkarma işlemini gerektiren günlük hayat problemlerini çözer.",
    "Eksilen ve çıkanı belirler."
  ]
},
"geometrik-sekiller": {
  name: "Geometrik Şekiller",

  validatorType: "none",

  promptHints: [
    "Daire, kare, üçgen ve dikdörtgen kullan.",
    "Çocukların çevresindeki nesnelerden örnekler ver.",
    "Top, pencere, kitap ve trafik levhası gibi somut örnekler kullan.",
    "Şekilleri köşe ve kenar özellikleriyle ilişkilendir.",
    "1. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Çevresindeki nesnelerin geometrik şekillerini belirler.",
    "Kare, üçgen, dikdörtgen ve daireyi tanır.",
    "Geometrik şekilleri günlük yaşam nesneleriyle ilişkilendirir.",
    "Şekiller arasındaki benzerlik ve farklılıkları fark eder."
  ]
},
"uzamsal-iliskiler": {
  name: "Uzamsal İlişkiler (Yer-Yön Kavramları)",

  validatorType: "none",

  promptHints: [
    "Altında, üstünde, önünde, arkasında kavramlarını kullan.",
    "Sağında ve solunda ifadelerine yer ver.",
    "Sınıf, ev ve oyun alanı gibi günlük yaşam senaryoları oluştur.",
    "Çocukların kolay hayal edebileceği nesneler kullan.",
    "1. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Bir nesnenin başka bir nesneye göre konumunu belirtir.",
    "Altında, üstünde, önünde ve arkasında kavramlarını kullanır.",
    "Sağında ve solunda kavramlarını doğru şekilde ifade eder.",
    "Günlük yaşamda nesnelerin konumlarını açıklar."
  ]
},
"para": {
  name: "Paralarımız",

  validatorType: "addition",

  promptHints: [
    "1 TL, 5 TL ve 10 TL gibi temel para birimlerini kullan.",
    "Market ve alışveriş senaryoları oluştur.",
    "Çocukların günlük hayatta karşılaşabileceği örnekler ver.",
    "Toplam para miktarı 20 TL'yi geçmesin.",
    "1. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Paraları tanır ve değerlerini bilir.",
    "Basit alışveriş problemlerini çözer.",
    "Verilen paraların toplam değerini bulur.",
    "Günlük yaşamda para kullanımına ilişkin problemleri çözer."
  ]
},
"zaman-olcme": {
  name: "Zamanı Ölçme (Saatler ve Günün Bölümleri)",

  validatorType: "none",

  promptHints: [
    "Sabah, öğle, akşam ve gece kavramlarını kullan.",
    "Günlük rutinlerden örnekler ver.",
    "Okula gitme, kahvaltı yapma, uyuma gibi senaryolar oluştur.",
    "Tam saat kavramını kullan.",
    "1. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Günün bölümlerini ayırt eder.",
    "Günlük olayları oluş sırasına göre sıralar.",
    "Tam saatleri okur ve gösterir.",
    "Zamanla ilgili günlük yaşam problemlerini çözer."
  ]
},
"olcme": {
  name: "Ölçme (Ağırlık ve Uzunluk)",

  validatorType: "none",

  promptHints: [
    "Uzun-kısa, ağır-hafif, fazla-az kavramlarını kullan.",
    "Kalem, çanta, kitap gibi somut nesneler kullan.",
    "Karşılaştırma soruları oluştur.",
    "Günlük yaşam örnekleri ver.",
    "1. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Nesneleri uzunluklarına göre karşılaştırır.",
    "Nesneleri ağırlıklarına göre karşılaştırır.",
    "Daha fazla ve daha az kavramlarını kullanır.",
    "Ölçmeye ilişkin günlük yaşam problemlerini çözer."
  ]
},

      }   // topics
    }     // matematik
  }       // subjects
},        // 1. sınıf

    "2": {
      name: "2. Sınıf",
      subjects: {
        "matematik": {
          name: "Matematik",
          topics: {
            "dogal-sayilar": {
              name: "Doğal Sayılar",
              validatorType: "none",

promptHints: [
  "2. sınıf seviyesine uygun doğal sayı etkinlikleri oluştur.",
  "Sayı karşılaştırma ve sıralama soruları kullan.",
  "Ritmik sayma soruları oluştur.",
  "Türk isimleri ve günlük yaşam örnekleri kullan."
],
              outcomes: [
                "100'den küçük doğal sayıların basamaklarını adlandırır, basamaklarındaki rakamların basamak değerlerini belirtir.",
                "100'e kadar olan doğal sayıları onluk ve birliklerine ayırarak gösterir.",
                "100'den küçük doğal sayılar arasında karşılaştırma ve sıralama yapar.",
                "100'e kadar olan sayılarla ikişer, beşer ve onar; 30'a kadar olan sayılarla üçer; 40'a kadar olan sayılarla dörder ileriye ve geriye doğru ritmik sayar."
              ]
            },
            "toplama-islemi": {
              name: "Toplama İşlemi",
              validatorType: "addition",

promptHints: [
  "Günlük hayat problemleri kullan.",
  "Türk isimleri kullan.",
  "İki basamaklı sayılar kullan.",
  "2. sınıf seviyesini aşma."
],
              outcomes: [
                "Toplamları 100'e kadar olan doğal sayılarla eldesiz ve eldeli toplama işlemini yapar.",
                "İki sayının toplamını tahmin eder ve tahminini işlem sonucuyla karşılaştırır.",
                "Toplama işleminde verilmeyen toplananı bulur.",
                "Doğal sayılarla toplama işlemini gerektiren problemleri çözer."
              ]
            },
            "cikarma-islemi": {
              name: "Çıkarma İşlemi",
              validatorType: "subtraction",

promptHints: [
  "Günlük hayat problemleri kullan.",
  "Türk isimleri kullan.",
  "İki basamaklı sayılar kullan.",
  "Verme, eksilme ve azalma senaryoları kullan.",
  "2. sınıf seviyesini aşma."
],
              outcomes: [
                "100'e kadar olan doğal sayılarla onluk bozmayı gerektiren ve gerektirmeyen çıkarma işlemini yapar.",
                "Doğal sayılarla yapılan çıkarma işleminin sonucunu tahmin eder ve tahminini işlem sonucuyla karşılaştırır.",
                "Toplama ve çıkarma işlemleri arasındaki ilişkiyi fark ederek verilmeyen eksilen veya çıkanı bulur.",
                "Doğal sayılarla çıkarma işlemini gerektiren problemleri çözer."
              ]
            },
            "carpma-islemi": {
              name: "Çarpma İşlemi",
              validatorType: "multiplication",

promptHints: [
  "Çarpma işlemini tekrarlı toplama mantığıyla ilişkilendir.",
  "Günlük hayat problemleri kullan.",
  "Türk isimleri kullan.",
  "Eşit gruplar oluşturma senaryoları kullan.",
  "Tabaklar, kutular, sıralar ve gruplar gibi örnekler tercih et.",
  "2. sınıf seviyesini aşma."
],
              outcomes: [
                "Çarpma işleminin tekrarlı toplama anlamına geldiğini açıklar.",
                "Doğal sayılarla çarpma işlemini yapar (5'e kadar olan sayılarla ritmik sayma temelinde).",
                "Doğal sayılarla çarpma işlemini gerektiren problemleri çözer."
              ]
            },
            "bolme-islemi": {
              name: "Bölme İşlemi",
              validatorType: "division",

promptHints: [
  "Bölme işlemini eşit paylaşma ve gruplama mantığıyla ilişkilendir.",
  "Günlük hayat problemleri kullan.",
  "Türk isimleri kullan.",
  "Şeker, elma, oyuncak gibi somut nesneler kullan.",
  "Çocukların paylaşabileceği senaryolar kur.",
  "2. sınıf seviyesini aşma."
],
              outcomes: [
                "Bölme işleminde gruplama ve paylaştırma anlamlarını fark eder.",
                "Bölme işlemini yapar, bölme işaretini (/) kullanır.",
                "Doğal sayılarla bölme işlemini gerektiren problemleri çözer."
              ]
            },
            "kesirler": {
              name: "Kesirler",
              validatorType: "none",

promptHints: [
  "Yarım ve çeyrek kavramlarını kullan.",
  "Pizza, elma, çikolata gibi somut örnekler tercih et.",
  "Çocuk dostu günlük yaşam senaryoları oluştur."
],
              outcomes: [
                "Bütün, yarım ve çeyrek arasındaki ilişkiyi açıklar.",
                "Şekillerin bütününü, yarısını ve çeyreğini uygun modellerle gösterir."
              ]
            },
            "zaman-olcme": {
              name: "Zamanı Ölçme",
              validatorType: "none",

promptHints: [
  "Tam, yarım ve çeyrek saat kavramlarını kullan.",
  "Okul, oyun ve günlük rutin örnekleri oluştur.",
  "Takvim, gün, hafta ve ay ilişkilerini kullan."
],
              outcomes: [
                "Tam, yarım ve çeyrek saatleri okur ve gösterir.",
                "Zaman ölçme birimleri (gün, hafta, ay, mevsim, yıl) arasındaki ilişkileri açıklar."
              ]
            },
            "geometrik-sekiller": {
              name: "Geometrik Şekiller",
              validatorType: "none",

promptHints: [
  "Üçgen, kare, dikdörtgen, çember ve daireyi kullan.",
  "Etraftaki nesneler üzerinden örnek ver.",
  "Çocukların kolay hayal edebileceği senaryolar kur."
],
              outcomes: [
                "Geometrik şekilleri (üçgen, kare, dikdörtgen, çember, daire) kenar ve köşe sayılarına göre sınıflandırır.",
                "Kare, dikdörtgen ve üçgenin kenarlarını belirler."
              ]
            },
            "sivi-olcme": {
              name: "Sıvı Ölçme",
              validatorType: "none",

promptHints: [
  "Bardak, şişe ve sürahi gibi örnekler kullan.",
  "Günlük yaşamdan sıvı ölçme problemleri oluştur.",
  "Karşılaştırma soruları kullan."
],
              outcomes: [
                "Standart olmayan sıvı ölçme birimlerini kullanarak sıvıların miktarını ölçer ve karşılaştırır.",
                "Sıvı ölçme birimleriyle ilgili problemleri çözer."
              ]
                }
        }   // topics
      }     // matematik
    }       // subjects
  },
  "3": {
  name: "3. Sınıf",
  subjects: {
    "matematik": {
      name: "Matematik",
      topics: {
        "dogal-sayilar": { name: "Doğal Sayılar",

  validatorType: "none",

  promptHints: [
    "1000'e kadar olan doğal sayıları kullan.",
    "Basamak değeri soruları oluştur.",
    "Sayı karşılaştırma ve sıralama soruları kullan.",
    "Ritmik sayma etkinlikleri oluştur.",
    "Türk isimleri ve günlük yaşam örnekleri kullan.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "1000'e kadar olan doğal sayıları okur ve yazar.",
    "Üç basamaklı doğal sayıların basamak değerlerini belirler.",
    "Doğal sayıları karşılaştırır ve sıralar.",
    "Ritmik sayma becerilerini geliştirir.",
    "Eksik bırakılan sayı örüntülerini tamamlar."
  ]
},
        "toplama-islemi": {},
        "cikarma-islemi": {},
        "carpma-islemi": {},
        "bolme-islemi": {},
        "kesirler": {},
        "geometrik-cisimler": {},
        "uzunluk-olcme": {},
        "cevre-olcme": {},
        "zaman-olcme": {},
        "para": {},
        "veri-toplama": {}
      }
    }
  }
}         // 3. sınıf
}           // grades
};          // CURRICULUM

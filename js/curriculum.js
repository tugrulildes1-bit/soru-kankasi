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
        "toplama-islemi": {name: "Toplama İşlemi",

  validatorType: "addition",

  promptHints: [
    "Üç basamaklı doğal sayılar kullan.",
    "Eldeli ve eldesiz toplama işlemlerine yer ver.",
    "Günlük yaşam problemleri oluştur.",
    "Türk isimleri kullan.",
    "Eksik toplananı bulma soruları ekle.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Üç basamaklı doğal sayılarla toplama işlemi yapar.",
    "Toplama işlemi gerektiren problemleri çözer.",
    "İşlem sonucunu tahmin eder ve tahminini kontrol eder.",
    "Eksik toplananı bulur.",
    "Toplama işlemini günlük yaşam durumlarıyla ilişkilendirir."
  ]
},
        "cikarma-islemi": {name: "Çıkarma İşlemi",

  validatorType: "subtraction",

  promptHints: [
    "Üç basamaklı doğal sayılar kullan.",
    "Onluk bozmayı gerektiren ve gerektirmeyen işlemler oluştur.",
    "Günlük yaşam problemleri oluştur.",
    "Türk isimleri kullan.",
    "Eksilen veya çıkanı bulma soruları ekle.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Üç basamaklı doğal sayılarla çıkarma işlemi yapar.",
    "Çıkarma işlemi gerektiren problemleri çözer.",
    "İşlem sonucunu tahmin eder ve tahminini kontrol eder.",
    "Eksilen veya çıkanı bulur.",
    "Çıkarma işlemini günlük yaşam durumlarıyla ilişkilendirir."
  ]
},
        "carpma-islemi": {name: "Çarpma İşlemi",

  validatorType: "multiplication",

  promptHints: [
    "Çarpım tablosunu kullan.",
    "İki basamaklı sayı ile tek basamaklı sayı çarpma işlemleri oluştur.",
    "Eşit gruplar ve tekrarlı toplama senaryoları kullan.",
    "Günlük yaşam problemleri oluştur.",
    "Türk isimleri kullan.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Çarpım tablosunu kullanarak çarpma işlemi yapar.",
    "İki basamaklı doğal sayılar ile tek basamaklı doğal sayıları çarpar.",
    "Çarpma işlemi gerektiren problemleri çözer.",
    "Çarpma işlemini tekrarlı toplama ile ilişkilendirir.",
    "Günlük yaşam durumlarında çarpma işlemini kullanır."
  ]
},
        "bolme-islemi": {name: "Bölme İşlemi",

  validatorType: "division",

  promptHints: [
    "Bölme işlemini çarpma işlemiyle ilişkilendir.",
    "Kalanlı ve kalansız bölme işlemlerine yer ver.",
    "Günlük yaşam problemleri oluştur.",
    "Türk isimleri kullan.",
    "Eşit paylaşma ve gruplama senaryoları oluştur.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Doğal sayılarla bölme işlemi yapar.",
    "Kalansız bölme işlemlerini çözer.",
    "Kalanlı bölme işlemlerini çözer ve kalanı yorumlar.",
    "Bölme ile çarpma arasındaki ilişkiyi fark eder.",
    "Bölme işlemi gerektiren günlük yaşam problemlerini çözer."
  ]
},
        "kesirler": {name: "Kesirler",

  validatorType: "none",

  promptHints: [
    "Pay ve payda kavramlarını kullan.",
    "Birim kesir soruları oluştur.",
    "Pizza, çikolata, pasta ve meyve gibi somut örnekler kullan.",
    "Şekil modelleriyle ilişkilendir.",
    "Basit kesir karşılaştırmalarına yer ver.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Birim kesri tanır ve gösterir.",
    "Pay ve payda kavramlarını açıklar.",
    "Basit kesirleri modeller üzerinde gösterir.",
    "Kesirleri günlük yaşam örnekleriyle ilişkilendirir.",
    "Basit kesirleri karşılaştırır."
  ]
},
        "geometrik-cisimler": {name: "Geometrik Cisimler ve Şekiller",

  validatorType: "none",

  promptHints: [
    "Kare, dikdörtgen, üçgen ve çember gibi şekilleri kullan.",
    "Küp, prizma, silindir ve küre gibi geometrik cisimlere yer ver.",
    "Günlük yaşamdan nesnelerle ilişki kur.",
    "Top, kutu, konserve kutusu ve zar gibi örnekler kullan.",
    "Şekiller ile cisimler arasındaki farkı vurgula.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Geometrik şekilleri tanır ve özelliklerini açıklar.",
    "Geometrik cisimleri tanır ve günlük yaşam nesneleriyle ilişkilendirir.",
    "Şekil ve cisimler arasındaki farkı açıklar.",
    "Geometrik özellikleri kullanarak sınıflandırma yapar.",
    "Çevresindeki nesnelerin geometrik özelliklerini fark eder."
  ]
},
        "uzunluk-olcme": {name: "Uzunluk Ölçme",

  validatorType: "none",

  promptHints: [
    "Milimetre, santimetre ve metre birimlerini kullan.",
    "Uzunluk birimleri arasında basit dönüşümler yap.",
    "Cetvel, masa, kapı ve kalem gibi günlük nesneler kullan.",
    "Uzunluk karşılaştırma problemleri oluştur.",
    "Günlük yaşamdan örnekler ver.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Milimetre, santimetre ve metreyi tanır.",
    "Uzunluk birimlerini kullanarak ölçme yapar.",
    "Uzunlukları karşılaştırır ve sıralar.",
    "Basit uzunluk dönüşümleri yapar.",
    "Uzunluk ölçmeyi gerektiren problemleri çözer."
  ]
},
        "cevre-olcme": {name: "Çevre Ölçme",

  validatorType: "none",

  promptHints: [
    "Karenin ve dikdörtgenin çevresini kullan.",
    "Kenar uzunlukları verilen şekiller oluştur.",
    "Bahçe, çerçeve ve masa gibi günlük yaşam örnekleri kullan.",
    "Basit çevre problemleri oluştur.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Karenin çevresini hesaplar.",
    "Dikdörtgenin çevresini hesaplar.",
    "Çevre kavramını açıklar.",
    "Çevre ölçmeyi gerektiren problemleri çözer.",
    "Günlük yaşamda çevre ölçmenin kullanım alanlarını fark eder."
  ]
},
        "zaman-olcme": {name: "Zamanı Ölçme",

  validatorType: "none",

  promptHints: [
    "Saat ve dakika kavramlarını kullan.",
    "Süre hesaplama problemleri oluştur.",
    "Takvim ve günlük rutin örnekleri ver.",
    "Okul ve oyun senaryoları kullan.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Saat ve dakika arasındaki ilişkiyi açıklar.",
    "Süre hesaplamaları yapar.",
    "Takvim bilgilerini kullanır.",
    "Zamanı ölçmeyi gerektiren problemleri çözer.",
    "Günlük yaşamda zamanı planlamanın önemini fark eder."
  ]
        },
        "para": {name: "Para",

  validatorType: "addition",

  promptHints: [
    "TL ve kuruş kavramlarını kullan.",
    "Alışveriş senaryoları oluştur.",
    "Para üstü hesaplama soruları ekle.",
    "Türk Lirası örnekleri kullan.",
    "Günlük yaşam problemleri oluştur.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "TL ve kuruş arasındaki ilişkiyi açıklar.",
    "Alışveriş problemlerini çözer.",
    "Para üstü hesaplamaları yapar.",
    "Parayla ilgili günlük yaşam problemlerini çözer.",
    "Tasarruf bilinci geliştirir."
  ]
},
        "veri-toplama": {name: "Veri Toplama ve Değerlendirme",

  validatorType: "none",

  promptHints: [
    "Tablo ve grafik yorumlama soruları oluştur.",
    "En çok ve en az kavramlarını kullan.",
    "Öğrencilerin ilgisini çekebilecek veri örnekleri kullan.",
    "Sınıf içi anket senaryoları oluştur.",
    "3. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Verileri tablo halinde gösterir.",
    "Basit grafikleri yorumlar.",
    "En fazla ve en az olan verileri belirler.",
    "Verilerden çıkarım yapar.",
    "Veri toplamayı gerektiren günlük yaşam durumlarını fark eder."
  ]
}
      }
    }
  }
},
"4": {
  name: "4. Sınıf",
  subjects: {
    "matematik": {
      name: "Matematik",
      topics: {
        "dogal-sayilar": {name: "Doğal Sayılar",

  validatorType: "none",

  promptHints: [
    "1000000'a kadar doğal sayılar kullan.",
    "Basamak değeri soruları oluştur.",
    "Sayı örüntüleri kullan.",
    "Karşılaştırma ve sıralama soruları oluştur.",
    "3 ve 4 basamaklı sayılarla günlük yaşam problemleri kur.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Doğal sayıları okur ve yazar.",
    "Basamak değerlerini belirler.",
    "Doğal sayıları karşılaştırır ve sıralar.",
    "Sayı örüntülerini tamamlar.",
    "Doğal sayılarla ilgili problemleri çözer."
  ]
},
        "toplama-islemi": {name: "Toplama İşlemi",

  validatorType: "addition",

  promptHints: [
    "Dört ve beş basamaklı sayılar kullan.",
    "Eldeli toplama işlemleri oluştur.",
    "Günlük yaşam problemleri kullan.",
    "Tahmin becerisini geliştiren sorular oluştur.",
    "Türk isimleri kullan.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Doğal sayılarla toplama işlemi yapar.",
    "Toplama işlemi gerektiren problemleri çözer.",
    "Sonucu tahmin eder ve kontrol eder.",
    "Eksik toplananı bulur.",
    "Toplama işlemini günlük yaşamla ilişkilendirir."
  ]
},
        "cikarma-islemi": {name: "Çıkarma İşlemi",

  validatorType: "subtraction",

  promptHints: [
    "Dört ve beş basamaklı sayılar kullan.",
    "Onluk bozmalı işlemler oluştur.",
    "Günlük yaşam problemleri kur.",
    "Eksilen ve çıkanı bulma soruları oluştur.",
    "Türk isimleri kullan.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Doğal sayılarla çıkarma işlemi yapar.",
    "Çıkarma işlemi problemlerini çözer.",
    "Sonucu tahmin eder.",
    "Eksilen veya çıkanı bulur.",
    "Çıkarma işlemini günlük yaşamla ilişkilendirir."
  ]
},
        "carpma-islemi": {name: "Çarpma İşlemi",

  validatorType: "multiplication",

  promptHints: [
    "İki ve üç basamaklı sayılarla çarpma işlemleri oluştur.",
    "Günlük yaşam problemleri kullan.",
    "Çarpım tahmini soruları ekle.",
    "Türk isimleri kullan.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Doğal sayılarla çarpma işlemi yapar.",
    "Çarpma problemlerini çözer.",
    "İşlem sonucunu tahmin eder.",
    "Çarpma işlemini günlük yaşamla ilişkilendirir.",
    "Farklı çözüm yolları geliştirir."
  ]
},
        "bolme-islemi": { name: "Bölme İşlemi",

  validatorType: "division",

  promptHints: [
    "Kalanlı ve kalansız bölme işlemleri oluştur.",
    "Günlük yaşam problemleri kur.",
    "Bölme-çarpma ilişkisini kullan.",
    "Türk isimleri kullan.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Doğal sayılarla bölme işlemi yapar.",
    "Kalanlı bölme problemlerini çözer.",
    "Bölme ile çarpma arasındaki ilişkiyi açıklar.",
    "Bölme işlemi problemlerini çözer.",
    "Günlük yaşamla ilişki kurar."
  ]
},
        "kesirler": {name: "Kesirler",

  validatorType: "none",

  promptHints: [
    "Pay ve payda kavramlarını kullan.",
    "Denk kesirlere yer ver.",
    "Kesirleri karşılaştırma soruları oluştur.",
    "Somut örnekler kullan.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Kesirleri modellerle gösterir.",
    "Kesirleri karşılaştırır.",
    "Denk kesirleri belirler.",
    "Kesir problemlerini çözer.",
    "Kesirleri günlük yaşamla ilişkilendirir."
  ]
},
        "ondalik-gosterimler": {name: "Ondalık Gösterimler",

  validatorType: "none",

  promptHints: [
    "Ondalık gösterimleri günlük yaşam örnekleriyle ilişkilendir.",
    "TL ve kuruş örnekleri kullan.",
    "Basit ondalık karşılaştırmalar oluştur.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Ondalık gösterimleri tanır.",
    "Ondalık sayıları karşılaştırır.",
    "Ondalık gösterimleri günlük yaşamda kullanır.",
    "TL-kuruş ilişkisini açıklar.",
    "Ondalık problemlerini çözer."
  ]
},
        "geometrik-cisimler": {name: "Geometrik Şekiller ve Cisimler",

  validatorType: "none",

  promptHints: [
    "Geometrik cisimleri günlük yaşamla ilişkilendir.",
    "Açı kavramına giriş yap.",
    "Şekilleri özelliklerine göre sınıflandır.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Geometrik cisimleri tanır.",
    "Şekilleri sınıflandırır.",
    "Açı kavramını tanır.",
    "Günlük yaşam nesneleriyle ilişki kurar.",
    "Geometrik özellikleri açıklar."
  ]
},
        "uzunluk-olcme": {name: "Uzunluk Ölçme",

  validatorType: "none",

  promptHints: [
    "Uzunluk dönüşümleri oluştur.",
    "Metre ve kilometreyi ilişkilendir.",
    "Günlük yaşam problemleri kur.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Uzunluk ölçü birimlerini kullanır.",
    "Birim dönüşümleri yapar.",
    "Uzunluk problemlerini çözer.",
    "Ölçme sonuçlarını karşılaştırır.",
    "Günlük yaşamla ilişki kurar."
  ]
},
        "cevre-olcme": {name: "Çevre Ölçme",

  validatorType: "none",

  promptHints: [
    "Çevre hesaplama problemleri oluştur.",
    "Kare ve dikdörtgen kullan.",
    "Günlük yaşam örnekleri ver.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Çevreyi hesaplar.",
    "Çevre problemlerini çözer.",
    "Şekilleri karşılaştırır.",
    "Ölçme becerilerini geliştirir.",
    "Günlük yaşamla ilişki kurar."
  ]
},
        "alan-olcme": { name: "Alan Ölçme",

  validatorType: "none",

  promptHints: [
    "Kareli zeminler kullan.",
    "Basit alan hesaplamaları oluştur.",
    "Günlük yaşam örnekleri ver.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Alan kavramını açıklar.",
    "Kareli yüzeylerde alan belirler.",
    "Alan problemlerini çözer.",
    "Alanları karşılaştırır.",
    "Günlük yaşamla ilişki kurar."
  ]},
        "zaman-olcme": {name: "Zamanı Ölçme",

  validatorType: "none",

  promptHints: [
    "Süre problemleri oluştur.",
    "Takvim ve saat ilişkisini kullan.",
    "Günlük yaşam senaryoları kur.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Süre hesaplamaları yapar.",
    "Takvimi kullanır.",
    "Zaman problemlerini çözer.",
    "Günlük planlama becerisi geliştirir.",
    "Zamanı etkili kullanmanın önemini fark eder."
  ]
},
        "veri-toplama": {name: "Veri Toplama ve Değerlendirme",

  validatorType: "none",

  promptHints: [
    "Sütun grafikleri kullan.",
    "Tablo yorumlama soruları oluştur.",
    "En fazla ve en az kavramlarını kullan.",
    "4. sınıf seviyesini aşma."
  ],

  outcomes: [
    "Verileri tablo halinde gösterir.",
    "Grafikleri yorumlar.",
    "Verilerden çıkarım yapar.",
    "En çok ve en az olanı belirler.",
    "Verileri günlük yaşamla ilişkilendirir."
  ]
}
      }
    }
  }
}         // 4. sınıf
}           // grades
};          // CURRICULUM

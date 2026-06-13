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
    "2": {
      name: "2. Sınıf",
      subjects: {
        "matematik": {
          name: "Matematik",
          topics: {
            "dogal-sayilar": {
              name: "Doğal Sayılar",
              outcomes: [
                "100'den küçük doğal sayıların basamaklarını adlandırır, basamaklarındaki rakamların basamak değerlerini belirtir.",
                "100'e kadar olan doğal sayıları onluk ve birliklerine ayırarak gösterir.",
                "100'den küçük doğal sayılar arasında karşılaştırma ve sıralama yapar.",
                "100'e kadar olan sayılarla ikişer, beşer ve onar; 30'a kadar olan sayılarla üçer; 40'a kadar olan sayılarla dörder ileriye ve geriye doğru ritmik sayar."
              ]
            },
            "toplama-islemi": {
              name: "Toplama İşlemi",
              outcomes: [
                "Toplamları 100'e kadar olan doğal sayılarla eldesiz ve eldeli toplama işlemini yapar.",
                "İki sayının toplamını tahmin eder ve tahminini işlem sonucuyla karşılaştırır.",
                "Toplama işleminde verilmeyen toplananı bulur.",
                "Doğal sayılarla toplama işlemini gerektiren problemleri çözer."
              ]
            },
            "cikarma-islemi": {
              name: "Çıkarma İşlemi",
              outcomes: [
                "100'e kadar olan doğal sayılarla onluk bozmayı gerektiren ve gerektirmeyen çıkarma işlemini yapar.",
                "Doğal sayılarla yapılan çıkarma işleminin sonucunu tahmin eder ve tahminini işlem sonucuyla karşılaştırır.",
                "Toplama ve çıkarma işlemleri arasındaki ilişkiyi fark ederek verilmeyen eksilen veya çıkanı bulur.",
                "Doğal sayılarla çıkarma işlemini gerektiren problemleri çözer."
              ]
            },
            "carpma-islemi": {
              name: "Çarpma İşlemi",
              outcomes: [
                "Çarpma işleminin tekrarlı toplama anlamına geldiğini açıklar.",
                "Doğal sayılarla çarpma işlemini yapar (5'e kadar olan sayılarla ritmik sayma temelinde).",
                "Doğal sayılarla çarpma işlemini gerektiren problemleri çözer."
              ]
            },
            "bolme-islemi": {
              name: "Bölme İşlemi",
              outcomes: [
                "Bölme işleminde gruplama ve paylaştırma anlamlarını fark eder.",
                "Bölme işlemini yapar, bölme işaretini (/) kullanır.",
                "Doğal sayılarla bölme işlemini gerektiren problemleri çözer."
              ]
            },
            "kesirler": {
              name: "Kesirler",
              outcomes: [
                "Bütün, yarım ve çeyrek arasındaki ilişkiyi açıklar.",
                "Şekillerin bütününü, yarısını ve çeyreğini uygun modellerle gösterir."
              ]
            },
            "zaman-olcme": {
              name: "Zamanı Ölçme",
              outcomes: [
                "Tam, yarım ve çeyrek saatleri okur ve gösterir.",
                "Zaman ölçme birimleri (gün, hafta, ay, mevsim, yıl) arasındaki ilişkileri açıklar."
              ]
            },
            "geometrik-sekiller": {
              name: "Geometrik Şekiller",
              outcomes: [
                "Geometrik şekilleri (üçgen, kare, dikdörtgen, çember, daire) kenar ve köşe sayılarına göre sınıflandırır.",
                "Kare, dikdörtgen ve üçgenin kenarlarını belirler."
              ]
            },
            "sivi-olcme": {
              name: "Sıvı Ölçme",
              outcomes: [
                "Standart olmayan sıvı ölçme birimlerini kullanarak sıvıların miktarını ölçer ve karşılaştırır.",
                "Sıvı ölçme birimleriyle ilgili problemleri çözer."
              ]
            }
          }
        }
      }
    }
  }
};

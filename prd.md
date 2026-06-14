# Soru Kankası - Ürün Gereksinim Dokümanı (PRD)

Bu uygulama, ilkokul öğrencileri için işledikleri ders konularına göre yapay zekâ destekli, pedagojik olarak yapılandırılmış çoktan seçmeli testler üreten veri odaklı, çocuk dostu ve motive edici bir öğrenme arkadaşıdır.

---

## 1. Ürün Tanımı
"Soru Kankası", öğretmenlerin ve öğrencilerin sınıf düzeyi, ders ve konu seçerek hızlıca çoktan seçmeli sorular üretmesini sağlayan bir web uygulamasıdır. Sorular, pedagojik kurallara ve Türkiye Milli Eğitim Bakanlığı (MEB) müfredatına tam uyumlu olacak şekilde yapay zekâ tarafından üretilir. Uygulamanın tüm seçim yapısı ve akışı, esnek ve genişletilebilir veri tabanlı (data-driven) bir mimariyle tasarlanmıştır.

---

## 2. Hedef Kitle
- İlkokul 2. sınıf öğrencileri (7-8 yaş) (MVP aşaması)
- Gelecek sürümde tüm ilkokul (1-4. sınıf) öğrencileri, öğretmenleri ve velileri

---

## 3. Problemler ve Çözümler
- **Problem 1:** İlkokul öğrencileri için MEB müfredatına uygun, nitelikli problem ve soru hazırlamak zaman alıcıdır.
  - *Çözüm:* Yapay zekâ ile saniyeler içinde konuya özel sorular üretmek.
- **Problem 2:** Salt işlem odaklı soruların çocukların motivasyonunu düşürmesi.
  - *Çözüm:* Hikâyeleştirilmiş, günlük hayattan doğal senaryolar sunan (Ali, Ayşe, Ahmet gibi Türkçe isimlerle kurgulanmış) problemler üretmek.
- **Problem 3:** Karışık zorluktaki soruların çocukların motivasyonunu kırması ve zorluk düzeyinin görünür olmasının çocukta kaygı yaratması.
  - *Çözüm:* Zorluk derecesini %20 Kolay, %50 Orta, %30 Zor olarak otomatik dağıtmak ve kolaydan zora sıralamak. Ancak, çocuğun kendini etiketlemesini önlemek amacıyla zorluk düzeylerini (Kolay/Orta/Zor) arayüzde tamamen gizlemek.
- **Problem 4:** Yeni ders ve sınıf düzeyleri eklenirken uygulamanın arayüz ve iş mantığı kodlarının baştan yazılması gerekliliği.
  - *Çözüm:* Sınıf, ders, konu ve kazanım ağacını tamamen veri odaklı (data-driven) tasarlayarak sadece merkezi veri dosyasının güncellenmesiyle genişletilebilirlik sağlamak.

---

## 4. MVP (Minimum Viable Product) Özellikleri

### 4.1. Veri Odaklı Dinamik Seçim Akışı
Uygulama arayüzü, merkezi bir müfredat veri kaynağından (`curriculum.js`) beslenerek dinamik şekilde oluşturulur:
- **Akış:** Sınıf Seçimi → Ders Seçimi → Konu Seçimi → Soru Sayısı → Soruları Oluştur.
- **MVP Kısıtı ve UI Tasarımı:** MVP'de yalnızca "2. Sınıf" ve "Matematik" desteklenecektir. Sınıf ve Ders seçenekleri sabit/ön-seçili olduğundan, kullanıcı ilk ekranda yalnızca **Konu** ve **Soru Sayısı** seçimlerini yapacaktır.
- **İstek Güvenliği:** Kullanıcı "Soruları Oluştur" butonuna bastığında, mükerrer isteklerin önlenmesi için buton geçici olarak devre dışı bırakılacak ve çocuk dostu bir **Yükleniyor (Loading) Ekranı** gösterilecektir.

### 4.2. Yapay Zekâ Destekli Soru Üretimi (Gemini API)
- **Soru Tipi:** Yalnızca 4 şıklı çoktan seçmeli (A, B, C, D) sorular üretilir.
- **Otomatik Zorluk Dağılımı ve Sıralama (Gizli Zorluk):**
  - Soru sayısına göre testin **%20'si Kolay**, **%50'si Orta**, **%30'u Zor** olarak dağıtılır.
  - Sorular kolaydan zora doğru sıralanır.
  - **Kritik Kural:** Arayüzde "Kolay", "Orta" veya "Zor" gibi zorluk etiketleri veya derecelendirmeleri kesinlikle gösterilmeyecektir.
- **Pedagojik ve Eğitsel Kurallar:**
  - Dil 2. sınıf seviyesine uygun, yalın ve temiz olmalıdır. Korkutucu/olumsuz ifadeler kullanılmaz.
  - Problemler günlük yaşam akışına uygun olmalı, hikâyeler mantıklı ilerlemeli ve çocukların gerçek hayatta karşılaşabileceği durumları yansıtmalıdır.
  - Türkiye'de yaygın kullanılan isimler tercih edilir (Ali, Ayşe, Ahmet, Elif, Zeynep, Mehmet vb.).
  - Her sorunun tek bir doğru cevabı olur, seçenek uzunlukları birbirine yakın tutulur.
  - Benzer soruların tek bir testte tekrarlanması önlenir.
- **Güvenilirlik, Doğrulama ve Yeniden Deneme (Retry):**
  - AI'dan gelen veriler sıkı bir doğrulama katmanından geçirilir: Her soru için tam 4 şık olması, tek doğru cevap olması, Türkçe karakterlerin/metnin bozulmamış olması, 2. sınıf dil düzeyine ve pedagojik kurallara uygunluğu denetlenir.
  - Eğer bu kontrollerden biri başarısız olursa veya JSON hatalıysa, sistem kullanıcıya fark ettirmeden otomatik olarak arka planda yeniden deneme (retry) yapar.

### 4.3. Cevaplama Deneyimi ve Geribildirim
- Öğrenci bir soruyu **yalnızca bir kez** cevaplayabilir.
- Bir şık seçildiğinde:
  - Cevap doğruysa: Seçilen şık **yeşil** olur.
  - Cevap yanlışsa: Seçilen şık **kırmızı** olur ve doğru cevap **yeşil** ile gösterilir.
  - İkinci bir şık seçilemez, soru kilitlenir.

### 4.4. Görsel ve Erişilebilirlik Standartları
- Arayüz çocuk dostudur: Canlı fakat göz yormayan pastel renkler ve büyük tıklama alanları.
- Font boyutları minimum **18-20px** olarak ayarlanır.
- Mobil ve tablet uyumlu (responsive) tasarım.

### 4.5. Test Sonu Ekranı & Başarı Yıldız Sistemi
Test tamamlandığında gösterilen ekran:
- Toplam doğru ve yanlış sayısı.
- **Yıldız Sistemi (Çaba Desteği):** Başarı yüzdesine göre yıldızlar gösterilir:
  - **%90 ve üzeri:** ⭐⭐⭐⭐⭐
  - **%70-89:** ⭐⭐⭐⭐
  - **%50-69:** ⭐⭐⭐
  - **%30-49:** ⭐⭐
  - **%30'un altı:** ⭐
- Başarı oranına göre özel motive edici mesajlar gösterilir.
- Tüm soruların listesi, her sorunun doğru cevabı (örn: *1. Soru: ... Doğru Cevap: B*) ve kısa açıklamalı çözümleri (çözüm üretimi başarısız olursa sadece doğru cevap gösterilir).

### 4.6. Oturum ve Veri Saklama
- MVP'de kullanıcı kaydı, üyelik veya veritabanı bulunmaz. Yerel depolama (LocalStorage) kullanılmaz. Uygulama her açılışta sıfırdan başlar.

---

## 5. MVP Sonrası (Gelecek Faz) Özellikler
- **Müfredat Verisinin Genişletilmesi:** `curriculum.js` dosyasına 1, 3 ve 4. sınıf düzeylerinin ve Türkçe, Hayat Bilgisi gibi diğer ilkokul derslerinin eklenmesi.
- **Farklı Soru Tipleri:** Doğru-yanlış, boşluk doldurma ve kısa cevaplı sorular.
- **Serbest Metinle Arama (Chatbox):** Doğal dil ile konu seçimi.
- **Kullanıcı Kaydı & İlerleme Takibi:** Test geçmişi saklama, veli/öğretmen rapor panelleri.
- **Sesli Okuma (Text-to-Speech):** Soruların sesli okunması.

---

## 6. Teknik Gereksinimler & Performans
- **AI Servis Katmanı:** Sağlayıcıdan bağımsız (provider-agnostic) adaptör mimarisi.
- **Performans:** Soru üretme süresi ortalama olarak **30 saniyenin altında** olmalıdır.

# AI Soru Bankası - Ürün Gereksinim Dokümanı (PRD)

Bu uygulama, ilkokul öğrencileri için işledikleri ders konularına göre yapay zekâ destekli, pedagojik olarak yapılandırılmış çoktan seçmeli testler üreten veri odaklı ve çocuk dostu bir öğrenme aracıdır.

---

## 1. Ürün Tanımı
AI Soru Bankası, öğretmenlerin ve öğrencilerin sınıf düzeyi, ders ve konu seçerek hızlıca çoktan seçmeli sorular üretmesini sağlayan bir web uygulamasıdır. Sorular, pedagojik kurallara ve Türkiye Milli Eğitim Bakanlığı (MEB) müfredatına tam uyumlu olacak şekilde yapay zekâ tarafından üretilir. Uygulamanın tüm seçim yapısı ve akışı, esnek ve genişletilebilir veri tabanlı (data-driven) bir mimariyle tasarlanmıştır.

---

## 2. Hedef Kitle
- İlkokul 2. sınıf öğrencileri (7-8 yaş) (MVP aşaması)
- Gelecek sürümde tüm ilkokul (1-4. sınıf) öğrencileri, öğretmenleri ve velileri

---

## 3. Problemler ve Çözümler
- **Problem 1:** İlkokul öğrencileri için MEB müfredatına uygun, nitelikli problem ve soru hazırlamak zaman alıcıdır.
  - *Çözüm:* Yapay zekâ ile saniyeler içinde konuya özel sorular üretmek.
- **Problem 2:** Salt işlem odaklı soruların çocukların motivasyonunu düşürmesi.
  - *Çözüm:* Hikâyeleştirilmiş, günlük hayattan senaryolar sunan (Ali, Ayşe, Ahmet gibi Türkçe isimlerle kurgulanmış) problemler üretmek.
- **Problem 3:** Karışık zorluktaki soruların çocukların motivasyonunu kırması.
  - *Çözüm:* Her testin zorluk derecesini %20 Kolay, %50 Orta, %30 Zor olacak şekilde otomatik dağıtmak ve kolaydan zora doğru sıralamak.
- **Problem 4:** Yeni ders ve sınıf düzeyleri eklenirken uygulamanın arayüz ve iş mantığı kodlarının baştan yazılması gerekliliği.
  - *Çözüm:* Sınıf, ders, konu ve kazanım ağacını tamamen veri odaklı (data-driven) tasarlayarak sadece merkezi veri dosyasının güncellenmesiyle genişletilebilirlik sağlamak.

---

## 4. MVP (Minimum Viable Product) Özellikleri

### 4.1. Veri Odaklı Dinamik Seçim Akışı
Uygulama arayüzü, merkezi bir müfredat veri kaynağından (`curriculum.js`) beslenerek dinamik şekilde oluşturulur:
- **Akış:** Sınıf Seçimi → Ders Seçimi → Konu Seçimi → Soru Sayısı → Soruları Oluştur.
- **MVP Kısıtı ve UI Tasarımı:** MVP'de yalnızca "2. Sınıf" ve "Matematik" desteklenecektir. Sınıf ve Ders seçenekleri sabit/ön-seçili olduğundan, kullanıcı ilk ekranda yalnızca **Konu** ve **Soru Sayısı** seçimlerini yapacaktır.
- **Genişletilebilirlik:** İleride veri dosyasına yeni sınıf (1, 3, 4) veya dersler (Türkçe vb.) eklendiğinde arayüz koduna dokunulmadan sistem otomatik olarak yeni seçim alanlarını açacaktır.

### 4.2. Yapay Zekâ Destekli Soru Üretimi (Gemini API)
- **Soru Tipi:** Yalnızca 4 şıklı çoktan seçmeli (A, B, C, D) sorular üretilir.
- **Otomatik Zorluk Dağılımı ve Sıralama:**
  - Soru sayısına göre testin **%20'si Kolay**, **%50'si Orta**, **%30'u Zor** olarak dağıtılır.
  - Sorular kolaydan zora doğru sıralanır.
- **Pedagojik ve Eğitsel Kurallar:**
  - Dil 2. sınıf seviyesine uygun, yalın ve temiz olmalıdır. Korkutucu/olumsuz ifadeler kullanılmaz.
  - Hikâyeleştirilmiş problemler üretilir. Türkiye'de yaygın kullanılan isimler tercih edilir (Ali, Ayşe, Ahmet, Elif, Zeynep, Mehmet vb.).
  - Her sorunun tek bir doğru cevabı olur, seçenek uzunlukları birbirine yakın tutulur.
  - Benzer soruların tek bir testte tekrarlanması önlenir.
- **Güvenilirlik (Retry Mekanizması):**
  - AI'dan gelen JSON verisi hatalıysa sistem kullanıcıya fark ettirmeden otomatik olarak arka planda yeniden deneme (retry) yapar.

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

### 4.5. Test Sonu Ekranı
Test tamamlandığında gösterilen ekran:
- Toplam doğru ve yanlış sayısı.
- Başarı oranına göre özel motive edici mesajlar:
  - **%90 ve üzeri:** *"Harika! Sen bu konuyu gerçekten öğrenmiş görünüyorsun! 🌟"*
  - **%70-89:** *"Çok iyi gidiyorsun! Biraz daha pratikle daha da güçleneceksin. 💪"*
  - **%50-69:** *"Güzel bir başlangıç! Birkaç soru daha çözerek kendini geliştirebilirsin. 😊"*
  - **%50'nin altı:** *"Hiç sorun değil! Hatalar öğrenmenin bir parçasıdır. Birlikte tekrar deneyebiliriz. 🌈"*
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

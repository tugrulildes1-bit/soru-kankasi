# AI Soru Bankası - MVP Görev Planı (TASKS.md)

Bu dosya, ilkokul 2. sınıf düzeyinde Matematik dersi için geliştirilecek AI Destekli Soru Bankası projesinin nihai MVP iş listesini içermektedir.

---

## 📋 MVP İş Listesi

### Aşama 1: Hazırlık & Mimari Kurulum
- [ ] Sağlayıcıdan bağımsız (provider-agnostic) AI servis altyapısının kurulması (Gemini API Adaptörü öncelikli)
- [ ] Proje temel dizin yapısının kurulması (Vanilla HTML/JS + ES6 Modülleri)
- [ ] **Görsel & Erişilebilirlik Altyapısı (`styles.css`):**
  - Çocuk dostu, canlı pastel renk paleti tanımlanması
  - Yazı boyutlarının minimum 18-20px olarak ayarlanması
  - Dokunmatik ekran uyumlu büyük butonlar ve mobil/tablet uyumlu responsive CSS düzeni

### Aşama 2: Veri Odaklı Müfredat & Algoritma Tasarımı
- [ ] **Dinamik Müfredat Şeması:** Genişletilebilir, merkezi veri yapısının (`curriculum.js`) tasarlanması (Sınıf ve Ders seçimlerinin dinamik hiyerarşisi)
- [ ] Test soru sayısına göre zorluk dağılımını (%20 Kolay, %50 Orta, %30 Zor) otomatik hesaplayan ve soruları kolaydan zora sıralayan algoritmanın (`quiz-engine.js`) yazılması
- [ ] AI modelinden kararlı JSON şemasında çıktı almak için pedagojik kuralları (Ali, Ayşe, Ahmet gibi Türkçe isimler, hikâyeli problemler, 2. sınıf sade dili, 4 seçenek, benzer şık uzunlukları) içeren sistem prompt şablonunun oluşturulması

### Aşama 3: Soru Üretim Motoru & Hata Yönetimi
- [ ] Gemini API entegrasyonunun yapılması ve adaptör yapısının bağlanması
- [ ] **Arka Plan Yeniden Deneme (Retry) Mekanizması:** Gemini'den gelen JSON verisi geçersiz veya hatalıysa, kullanıcıya yansıtmadan arka planda isteği yeniden gönderen döngünün kurulması (ortalama yanıt süresi <30 sn hedefiyle)

### Aşama 4: Dinamik Kullanıcı Arayüzü (UI) ve Akış
- [ ] **Seçim Ekranı (`selector.js`):**
  - Sınıf (2. Sınıf) ve Ders (Matematik) seçeneklerinin pre-selected/sabit gösterilmesi
  - Konu ve Soru Sayısı dropdown'larının `curriculum.js` verisine göre dinamik doldurulması
- [ ] **Soru Çözüm Kartları (`quiz.js`):**
  - Soruların tek tek gösterilmesi
  - Şık işaretlendiğinde tek cevap hakkı kısıtlaması (kilitlenme)
  - Doğru cevapta şıkkın **yeşil** olması; yanlış cevapta seçilenin **kırmızı**, doğrunun ise **yeşil** renkle vurgulanması
- [ ] **Sonuç & Tebrik Ekranı (`score.js`):**
  - Doğru/yanlış sayıları
  - Başarı oranına göre özel motive edici mesajlar (%90+, %70-89, %50-69, <%50)
  - Tüm soruların, doğru cevapların ve kısa çözümlerinin (varsa) listelenmesi

### Aşama 5: Doğrulama ve İnceleme
- [ ] API yanıt süresinin <30 saniye olduğunun test edilmesi
- [ ] Mobil ve tablet arayüz kontrollerinin yapılması
- [ ] **Genişletilebilirlik Testi:** `curriculum.js` dosyasına geçici veri eklenerek UI'ın dinamik olarak yeni seçeneği yansıttığının doğrulanması

---

## 🚀 MVP Dışında Kalan (Sonraki Faz) Özellikler
- **Diğer Dersler ve Sınıflar:** 1, 3, 4. sınıflar ve Türkçe dersi kazanımları.
- **Gelişmiş Soru Tipleri:** Doğru-yanlış, boşluk doldurma ve kısa cevaplı sorular.
- **Yerel Depolama (LocalStorage) veya Bulut Veritabanı:** Kullanıcı kaydı, test geçmişi ve veli/öğretmen takip paneli.
- **Sesli Okuma (Text-to-Speech):** Soruların seslendirilmesi.

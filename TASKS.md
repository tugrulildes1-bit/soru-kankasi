# Soru Kankası - MVP Görev Planı (TASKS.md)

Bu dosya, ilkokul 2. sınıf düzeyinde Matematik dersi için geliştirilecek "Soru Kankası" projesinin güncellenmiş MVP iş listesini içermektedir.

---

## 📋 MVP İş Listesi

### Aşama 1: Hazırlık & Mimari Kurulum
- [x] Sağlayıcıdan bağımsız (provider-agnostic) AI servis altyapısının kurulması (Gemini API Adaptörü öncelikli)
- [x] Proje temel dizin yapısının kurulması (Vanilla HTML/JS + ES6 Modülleri)
- [x] **Görsel & Erişilebilirlik Altyapısı (`styles.css`):**
  - Çocuk dostu, canlı pastel renk paleti tanımlanması
  - Yazı boyutlarının minimum 18-20px olarak ayarlanması
  - Dokunmatik ekran uyumlu büyük butonlar ve mobil/tablet uyumlu responsive CSS düzeni

### Aşama 2: Veri Odaklı Müfredat & Algoritma Tasarımı
- [x] **Dinamik Müfredat Şeması:** Genişletilebilir, merkezi veri yapısının (`curriculum.js`) tasarlanması (Sınıf ve Ders seçimlerinin dinamik hiyerarşisi)
- [x] Test soru sayısına göre zorluk dağılımını (%20 Kolay, %50 Orta, %30 Zor) otomatik hesaplayan ve soruları kolaydan zora sıralayan algoritmanın (`quiz-engine.js`) yazılması
- [x] AI modelinden kararlı JSON şemasında çıktı almak için pedagojik kuralları (Ali, Ayşe, Ahmet gibi Türkçe isimler, hikâyeli problemler, 2. sınıf sade dili, 4 seçenek, benzer şık uzunlukları) içeren sistem prompt şablonunun oluşturulması

### Ara Aşama: Prototip (Mock Veri ile E2E Akış)
- [x] `js/services/quiz-engine.js` (mock soru üretimi, otomatik zorluk dağıtımı %20-50-30 ve sıralama)
- [x] `js/components/quiz.js` (soru çözüm arayüzü, tek cevap hakkı, kilitlenme, yeşil/kırmızı renkler)
- [x] `js/components/score.js` (sonuç ekranı, başarı oranına göre motive edici mesajlar, çözümlü sorular listesi)
- [x] `js/app.js` (tüm ekran geçişlerinin mock akış ile bağlanması)
- [ ] **Prototip Güncellemeleri (Kullanıcı Deneyimi İyileştirmeleri):**
  - [ ] Uygulama başlığı ve arayüzünün "Soru Kankası" olarak güncellenmesi
  - [ ] Arayüzde yer alan "Kolay/Orta/Zor" teknik zorluk rozetlerinin tamamen gizlenmesi
  - [ ] Mock soru üreteci metinlerinden `[Kolay Soru - 1]` gibi teknik ön eklerin kaldırılması, daha doğal günlük hayat ifadelerinin kullanılması
  - [ ] Sonuç ekranına başarı yüzdesine göre 1-5 arası dinamik Yıldız Sistemi (⭐⭐⭐⭐⭐) eklenmesi

### Aşama 3: AI Servis Katmanı & Hata Yönetimi
- [ ] `js/config.js` dosyasının oluşturulması (sağlayıcı ayarı)
- [ ] `js/services/ai/ai-client.js` ve doğrulama katmanının yazılması (4 şık, 1 doğru cevap, Türkçe kodlama bütünlüğü, pedagojik kontrol)
- [ ] `js/services/ai/gemini-adapter.js` adaptörünün yazılması (Prompt kuralı: "Problemler günlük yaşam akışına uygun olmalı, hikâyeler mantıklı ilerlemeli ve çocukların gerçek hayatta karşılaşabileceği durumları yansıtmalıdır")
- [ ] Arka planda retry mekanizmasının eklenmesi
- [ ] `js/services/quiz-engine.js` entegrasyonunun gerçek AI servisine bağlanması

### Aşama 5: Test ve Doğrulama
- [ ] API yanıt süresinin <30 saniye olduğunun test edilmesi
- [ ] Mobil ve tablet arayüz kontrollerinin yapılması
- [ ] **Genişletilebilirlik Testi:** `curriculum.js` dosyasına geçici veri eklenerek UI'ın dinamik olarak yeni seçeneği yansıttığının doğrulanması

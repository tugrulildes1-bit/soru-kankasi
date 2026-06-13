import { CURRICULUM } from '../curriculum.js';

export class SelectorComponent {
  /**
   * @param {string} containerId - Bileşenin render edileceği DOM elemanının ID'si
   * @param {function} onSubmit - Form onaylandığında çağrılacak geri bildirim fonksiyonu
   */
  constructor(containerId, onSubmit) {
    this.container = document.getElementById(containerId);
    this.onSubmit = onSubmit;
    this.state = {
      grade: '',
      subject: '',
      topic: '',
      count: 10
    };
  }

  /**
   * Bileşeni DOM'a çizer ve olay dinleyicilerini bağlar.
   */
  render() {
    this.container.innerHTML = `
      <div class="card selector-card" id="selector-card">
        <div class="form-group">
          <label class="form-label" for="selector-grade">Sınıf</label>
          <div class="form-select-wrapper" id="wrapper-grade">
            <select class="form-select" id="selector-grade">
              <!-- Sınıflar dinamik yüklenecek -->
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="selector-subject">Ders</label>
          <div class="form-select-wrapper" id="wrapper-subject">
            <select class="form-select" id="selector-subject">
              <option value="" disabled selected>Önce sınıf seçiniz...</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="selector-topic">Konu Başlığı</label>
          <div class="form-select-wrapper" id="wrapper-topic">
            <select class="form-select" id="selector-topic">
              <option value="" disabled selected>Önce ders seçiniz...</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="selector-count">Soru Sayısı</label>
          <div class="form-select-wrapper">
            <select class="form-select" id="selector-count">
              <option value="5">5 Soru</option>
              <option value="10" selected>10 Soru</option>
              <option value="15">15 Soru</option>
              <option value="20">20 Soru</option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" id="btn-generate" disabled>Soruları Oluştur 🚀</button>
      </div>
    `;

    this.initDropdowns();
    this.bindEvents();
  }

  /**
   * curriculum.js'den gelen veriye göre dropdown'ları dinamik olarak doldurur.
   * Eğer sadece tek bir sınıf veya ders varsa, otomatik seçilir ve değiştirilemez (disabled) yapılır.
   */
  initDropdowns() {
    const gradeSelect = document.getElementById('selector-grade');
    const gradeWrapper = document.getElementById('wrapper-grade');
    const grades = Object.keys(CURRICULUM.grades);

    // 1. Sınıf Seçim Kutusu
    gradeSelect.innerHTML = grades
      .map(key => `<option value="${key}">${CURRICULUM.grades[key].name}</option>`)
      .join('');

    if (grades.length === 1) {
      this.state.grade = grades[0];
      gradeSelect.value = grades[0];
      gradeSelect.disabled = true;
      gradeSelect.classList.add('readonly');
      gradeWrapper.classList.add('readonly');
      
      // Sınıf tekse, dersleri hemen doldur
      this.populateSubjects(grades[0]);
    } else {
      // Çoklu sınıf varsa ilkini varsayılan yapıp tetikle
      gradeSelect.innerHTML = `<option value="" disabled selected>Sınıf seçiniz...</option>` + gradeSelect.innerHTML;
    }
  }

  /**
   * Seçilen sınıfa göre dersleri doldurur.
   * @param {string} gradeKey 
   */
  populateSubjects(gradeKey) {
    const subjectSelect = document.getElementById('selector-subject');
    const subjectWrapper = document.getElementById('wrapper-subject');
    const subjects = Object.keys(CURRICULUM.grades[gradeKey].subjects);

    subjectSelect.innerHTML = subjects
      .map(key => `<option value="${key}">${CURRICULUM.grades[gradeKey].subjects[key].name}</option>`)
      .join('');

    if (subjects.length === 1) {
      this.state.subject = subjects[0];
      subjectSelect.value = subjects[0];
      subjectSelect.disabled = true;
      subjectSelect.classList.add('readonly');
      subjectWrapper.classList.add('readonly');
      
      // Ders tekse, konuları hemen doldur
      this.populateTopics(gradeKey, subjects[0]);
    } else {
      subjectSelect.disabled = false;
      subjectSelect.classList.remove('readonly');
      subjectWrapper.classList.remove('readonly');
      subjectSelect.innerHTML = `<option value="" disabled selected>Ders seçiniz...</option>` + subjectSelect.innerHTML;
      this.state.subject = '';
      this.clearTopicsDropdown();
    }
  }

  /**
   * Seçilen sınıf ve derse göre konuları doldurur.
   * @param {string} gradeKey 
   * @param {string} subjectKey 
   */
  populateTopics(gradeKey, subjectKey) {
    const topicSelect = document.getElementById('selector-topic');
    const topics = Object.keys(CURRICULUM.grades[gradeKey].subjects[subjectKey].topics);

    topicSelect.innerHTML = `<option value="" disabled selected>Konu seçiniz...</option>` + 
      topics.map(key => `<option value="${key}">${CURRICULUM.grades[gradeKey].subjects[subjectKey].topics[key].name}</option>`).join('');
    
    topicSelect.disabled = false;
    this.state.topic = '';
    this.validateForm();
  }

  clearTopicsDropdown() {
    const topicSelect = document.getElementById('selector-topic');
    topicSelect.innerHTML = `<option value="" disabled selected>Önce ders seçiniz...</option>`;
    topicSelect.disabled = true;
    this.state.topic = '';
    this.validateForm();
  }

  /**
   * Formun geçerli olup olmadığını (konu seçilip seçilmediğini) kontrol eder ve butonu aktif/pasif yapar.
   */
  validateForm() {
    const btnGenerate = document.getElementById('btn-generate');
    if (this.state.grade && this.state.subject && this.state.topic) {
      btnGenerate.disabled = false;
    } else {
      btnGenerate.disabled = true;
    }
  }

  /**
   * Event dinleyicilerini bağlar.
   */
  bindEvents() {
    const gradeSelect = document.getElementById('selector-grade');
    const subjectSelect = document.getElementById('selector-subject');
    const topicSelect = document.getElementById('selector-topic');
    const countSelect = document.getElementById('selector-count');
    const btnGenerate = document.getElementById('btn-generate');

    gradeSelect.addEventListener('change', (e) => {
      this.state.grade = e.target.value;
      this.populateSubjects(this.state.grade);
    });

    subjectSelect.addEventListener('change', (e) => {
      this.state.subject = e.target.value;
      this.populateTopics(this.state.grade, this.state.subject);
    });

    topicSelect.addEventListener('change', (e) => {
      this.state.topic = e.target.value;
      this.validateForm();
    });

    countSelect.addEventListener('change', (e) => {
      this.state.count = parseInt(e.target.value, 10);
    });

    btnGenerate.addEventListener('click', () => {
      if (!btnGenerate.disabled) {
        // Mükerrer istekleri engellemek için butonu devre dışı bırak
        btnGenerate.disabled = true;
        
        // Yükleniyor durumunu göster
        this.showLoadingState();

        // Üst katmana (app.js) seçim verilerini bildir
        this.onSubmit({
          grade: this.state.grade,
          subject: this.state.subject,
          topic: this.state.topic,
          count: this.state.count
        });
      }
    });
  }

  /**
   * Sorular üretilirken gösterilecek çocuk dostu yükleniyor durumunu çizer.
   */
  showLoadingState() {
    const card = document.getElementById('selector-card');
    card.innerHTML = `
      <div class="loading-container">
        <div class="loading-dots">
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
          <div class="loading-dot"></div>
        </div>
        <p class="loading-text">Soruların hazırlanıyor... ✨</p>
        <p style="margin-top: 12px; font-size: 0.95rem; color: var(--color-text-muted);">
          Lütfen bekleyin, yapay zekâ senin için en güzel soruları hazırlıyor.
        </p>
      </div>
    `;
  }
}

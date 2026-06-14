export class QuizComponent {
  /**
   * @param {string} containerId - Bileşenin render edileceği DOM elemanının ID'si
   * @param {Array} questions - Çözülecek sıralı soru listesi
   * @param {function} onFinish - Test bittiğinde çağrılacak sonuç fonksiyonu
   */
  constructor(containerId, questions, onFinish) {
    this.container = document.getElementById(containerId);
    this.questions = questions;
    this.onFinish = onFinish;
    this.state = {
      currentIndex: 0,
      correctCount: 0,
      incorrectCount: 0,
      answered: false,
      selectedOption: null
    };
  }

  /**
   * Quiz ekranını başlatır.
   */
  render() {
    this.renderQuestion();
  }

  /**
   * Mevcut indexteki soruyu render eder.
   */
  renderQuestion() {
    const question = this.questions[this.state.currentIndex];
    this.state.answered = false;
    this.state.selectedOption = null;

    // Zorluk etiketlerinin Türkçe karşılıkları
    const difficultyLabels = { easy: 'Kolay', medium: 'Orta', hard: 'Zor' };

    this.container.innerHTML = `
      <div class="card quiz-card">
        <div class="quiz-header">
          <span class="progress-text">Soru ${this.state.currentIndex + 1} / ${this.questions.length}</span>
        </div>

        <h2 class="question-text">${question.questionText}</h2>

        <div class="options-container" id="options-container">
          ${Object.keys(question.options).map(key => `
            <button class="option-btn" data-option="${key}">
              <span class="option-btn-label">${key}</span>
              <span class="option-btn-text">${question.options[key]}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-action-container" style="min-height: 60px; margin-top: 16px;">
          <!-- Kullanıcı cevap verdikten sonra buraya buton enjekte edilecektir -->
        </div>
      </div>
    `;

    this.bindEvents();
  }

  /**
   * Şıklara tıklama olaylarını bağlar.
   */
  bindEvents() {
    const optionsContainer = document.getElementById('options-container');
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');

    optionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Eğer zaten cevaplandıysa tıklamayı engelle
        if (this.state.answered) return;

        const selected = btn.getAttribute('data-option');
        this.handleAnswer(selected, optionButtons);
      });
    });
  }

  /**
   * Cevap seçildiğinde rengi, kilitlenmeyi ve ilerleme butonunu yönetir.
   * @param {string} selectedOption - Tıklanan seçeneğin anahtarı (A, B, C, D)
   * @param {NodeList} optionButtons - Tüm seçenek butonlarının listesi
   */
  handleAnswer(selectedOption, optionButtons) {
    this.state.answered = true;
    this.state.selectedOption = selectedOption;
    
    const question = this.questions[this.state.currentIndex];
    const correct = question.correctAnswer;
    
    // Kullanıcının cevabını soru nesnesine kaydet (Sonuç ekranında göstermek için)
    question.userAnswer = selectedOption;

    // Butonları kilitle ve renklendir
    optionButtons.forEach(btn => {
      btn.disabled = true; // Diğer tüm şıkları kapat
      const opt = btn.getAttribute('data-option');
      
      if (opt === correct) {
        btn.classList.add('correct'); // Doğru şık yeşil olur
      }
      
      if (opt === selectedOption && selectedOption !== correct) {
        btn.classList.add('incorrect'); // Yanlış seçilen şık kırmızı olur
      }
    });

    // Skoru güncelle
    if (selectedOption === correct) {
      this.state.correctCount++;
    } else {
      this.state.incorrectCount++;
    }

    this.showNextButton();
  }

  /**
   * "Sonraki Soru" veya "Testi Bitir" butonunu gösterir.
   */
  showNextButton() {
    const actionContainer = document.getElementById('quiz-action-container');
    const isLast = this.state.currentIndex === this.questions.length - 1;

    actionContainer.innerHTML = `
      <button class="btn btn-primary" id="btn-next">
        ${isLast ? 'Testi Bitir ve Sonucu Gör 🏆' : 'Sonraki Soru ➡️'}
      </button>
    `;

    const nextBtn = document.getElementById('btn-next');
    nextBtn.addEventListener('click', () => {
      if (isLast) {
        // Son soruda testi bitir ve callback çalıştır
        this.onFinish({
          correctCount: this.state.correctCount,
          incorrectCount: this.state.incorrectCount,
          questions: this.questions
        });
      } else {
        // Sonraki soruya geç
        this.state.currentIndex++;
        this.renderQuestion();
      }
    });
  }
}

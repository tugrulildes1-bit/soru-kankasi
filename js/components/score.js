export class ScoreComponent {
  /**
   * @param {string} containerId - Bileşenin render edileceği DOM elemanının ID'si
   * @param {object} scoreData - { correctCount, incorrectCount, questions } verileri
   * @param {function} onRestart - "Yeni Test Başlat" tıklandığında çağrılacak geri bildirim fonksiyonu
   */
  constructor(containerId, scoreData, onRestart) {
    this.container = document.getElementById(containerId);
    this.scoreData = scoreData;
    this.onRestart = onRestart;
  }

  /**
   * Sonuç ekranını çizer.
   */
  render() {
    const { correctCount, incorrectCount, questions } = this.scoreData;
    const total = questions.length;
    const ratio = total > 0 ? (correctCount / total) * 100 : 0;
    
    // Başarı oranına göre özel motive edici mesajlar
    let message = '';
    let emojiClass = '';
    let starCount = 1;
    
    if (ratio >= 90) {
      message = "Harika! Sen bu konuyu gerçekten öğrenmiş görünüyorsun! 🌟";
      emojiClass = "success-high";
      starCount = 5;
    } else if (ratio >= 70) {
      message = "Çok iyi gidiyorsun! Biraz daha pratikle daha da güçleneceksin. 💪";
      emojiClass = "success-medium";
      starCount = 4;
    } else if (ratio >= 50) {
      message = "Güzel bir başlangıç! Birkaç soru daha çözerek kendini geliştirebilirsin. 😊";
      emojiClass = "success-low";
      starCount = 3;
    } else if (ratio >= 30) {
      message = "Hiç sorun değil! Hatalar öğrenmenin bir parçasıdır. Birlikte tekrar deneyebiliriz. 🌈";
      emojiClass = "success-fail";
      starCount = 2;
    } else {
      message = "Hiç sorun değil! Hatalar öğrenmenin bir parçasıdır. Birlikte tekrar deneyebiliriz. 🌈";
      emojiClass = "success-fail";
      starCount = 1;
    }

    this.container.innerHTML = `
      <div class="card score-card">
        <div class="score-header">
          <div class="score-badge-circle">
            <span class="score-correct-num">${correctCount} Doğru</span>
            <span class="score-total-num">${total} Soru</span>
          </div>
          <div class="score-stars" style="font-size: 2.5rem; margin-bottom: 12px; letter-spacing: 4px;">
            ${'⭐'.repeat(starCount)}
          </div>
          <h2 class="score-title">Test Sonucu</h2>
          <p class="score-message">${message}</p>
        </div>

        <button class="btn btn-primary" id="btn-restart" style="margin-bottom: 32px;">Yeni Test Başlat 🔄</button>

        <h3 class="form-label" style="border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">Soru Detayları</h3>
        <div class="score-details-container">
          ${questions.map((q, idx) => {
            const isUserCorrect = q.userAnswer === q.correctAnswer;
            return `
              <div class="score-question-card ${isUserCorrect ? 'correct' : 'incorrect'}">
                <div class="score-question-title">
                  ${idx + 1}. Soru
                  ${isUserCorrect ? '✅ Doğru' : '❌ Yanlış'}
                </div>
                <div class="score-question-text">${q.questionText}</div>
                
                <div class="score-question-ans">
                  Doğru Cevap: ${q.correctAnswer} 
                  ${!isUserCorrect ? `(Senin Cevabın: ${q.userAnswer || 'Boş'})` : ''}
                </div>

                ${q.explanation ? `
                  <div class="score-question-exp">
                    <strong>Çözüm Açıklaması:</strong> ${q.explanation}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  /**
   * "Yeni Test Başlat" butonu olayını bağlar.
   */
  bindEvents() {
    const restartBtn = document.getElementById('btn-restart');
    restartBtn.addEventListener('click', () => {
      this.onRestart();
    });
  }
}

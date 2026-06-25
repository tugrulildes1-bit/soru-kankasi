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
  const { correctCount, incorrectCount, questions } =
    this.scoreData;

  const total = questions.length;

  const ratio =
    total > 0
      ? (correctCount / total) * 100
      : 0;

  let message = "";
  let starCount = 1;

  if (ratio >= 90) {
    message =
      "Pofi seninle gurur duyuyor! Harika iş çıkardın! 🌟";
    starCount = 5;
  }
  else if (ratio >= 70) {
    message =
      "Çok güzel gidiyorsun. Biraz daha çalışırsan yıldız olacaksın! 💪";
    starCount = 4;
  }
  else if (ratio >= 50) {
    message =
      "Gayet iyi! Birkaç soru daha çözelim. 😊";
    starCount = 3;
  }
  else if (ratio >= 30) {
    message =
      "Biraz daha çalışırsak harika olacak! 🌈";
    starCount = 2;
  }
  else {
    message =
      "Pofi seninle tekrar çalışmak istiyor 💙";
    starCount = 1;
  }

  let rank = "";

  if (starCount === 5)
    rank = "🏆 Matematik Ustası";

  else if (starCount === 4)
    rank = "🥇 Süper Öğrenci";

  else if (starCount === 3)
    rank = "⭐ Çalışkan Kaşif";

  else if (starCount === 2)
    rank = "🌈 Cesur Deneyici";

  else
    rank = "💙 Pofi'nin Arkadaşı";

  this.container.innerHTML = `
    <div class="card score-card">

      <div class="score-header">

        <img
          src="./assets/pofi.png"
          class="score-background-pofi"
        >

        <div class="score-stars">
          ${"⭐".repeat(starCount)}
        </div>

        <div class="score-rank">
          ${rank}
        </div>

        <div class="score-stats">

          <div class="score-stat">
            🎯 ${correctCount}/${total}
          </div>

          <div class="score-stat">
            ❌ ${incorrectCount}
          </div>

        </div>

        <h2 class="score-title">
          Test Sonucu
        </h2>

        <p class="score-message">
          ${message}
        </p>

      </div>

      <button
        class="btn btn-primary"
        id="btn-restart"
        style="margin-bottom:30px;"
      >
        Yeni Test Başlat 🔄
      </button>

      <h3 class="form-label">
        Soru Detayları
      </h3>

      <div class="score-details-container">

        ${questions.map((q, idx) => {

          const isUserCorrect =
            q.userAnswer === q.correctAnswer;

          return `
            <div class="
              score-question-card
              ${isUserCorrect ? "correct" : "incorrect"}
            ">

              <div class="score-question-title">
                ${idx + 1}. Soru
                ${isUserCorrect ? "✅" : "❌"}
              </div>

              <div class="score-question-text">
                ${q.questionText}
              </div>

              <div class="score-question-ans">
                Doğru cevap:
                ${q.correctAnswer}
              </div>

              ${
                q.explanation
                ?
                `
                <div class="score-question-exp">
                  ${q.explanation}
                </div>
                `
                :
                ""
              }

            </div>
          `;
        }).join("")}

      </div>

    </div>
  `;

  this.bindEvents();
}
}

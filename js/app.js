import { SelectorComponent } from './components/selector.js';
import { QuizComponent } from './components/quiz.js';
import { ScoreComponent } from './components/score.js';
import { QuizEngine } from './services/quiz-engine.js';

class App {
  constructor() {
    this.containerId = 'app-container';
    this.state = {
      currentView: 'selector', // selector | quiz | score
      selection: null,        // { grade, subject, topic, count }
      questions: []           // Test soruları listesi
    };
  }

  /**
   * Uygulamayı başlatır.
   */
  init() {
    console.log("🚀 AI Soru Bankası Prototipi Başlatıldı!");
    this.navigate('selector');
  }

  /**
   * Ekran geçişlerini yönetir.
   * @param {string} viewName - selector | quiz | score
   * @param {object} data - Görünüme aktarılacak ek veri
   */
  navigate(viewName, data = null) {
    this.state.currentView = viewName;
    
    switch (viewName) {
      case 'selector':
        this.renderSelector();
        break;
      case 'quiz':
        this.renderQuiz(data);
        break;
      case 'score':
        this.renderScore(data);
        break;
      default:
        console.error(`Bilinmeyen görünüm: ${viewName}`);
    }
  }

  /**
   * Konu Seçim Ekranını çizer.
   */
  renderSelector() {
    const selector = new SelectorComponent(this.containerId, (selectionData) => {
      this.state.selection = selectionData;
      console.log("📁 Seçimler Alındı:", selectionData);
      
      // Soru motorunu çağırıp soruları getir
      QuizEngine.getQuestions(selectionData)
        .then(questions => {
          this.state.questions = questions;
          console.log("📝 Üretilen Sorular:", questions);
          // Soru çözüm ekranına geç
          this.navigate('quiz', questions);
        })
        .catch(err => {
          console.error("Soru üretiminde hata:", err);
          alert("Sorular hazırlanırken bir sorun oluştu. Lütfen tekrar deneyin.");
          this.renderSelector(); // Seçim ekranına geri dön
        });
    });
    
    selector.render();
  }

  /**
   * Soru Çözüm Ekranını çizer.
   * @param {Array} questions 
   */
  renderQuiz(questions) {
    const quiz = new QuizComponent(this.containerId, questions, (scoreData) => {
      console.log("🏆 Test Tamamlandı. İstatistikler:", scoreData);
      // Sonuç ekranına geç
      this.navigate('score', scoreData);
    });
    
    quiz.render();
  }

  /**
   * Sonuç Ekranını çizer.
   * @param {object} scoreData 
   */
  renderScore(scoreData) {
    const score = new ScoreComponent(this.containerId, scoreData, () => {
      console.log("🔄 Yeni Test Başlatılıyor...");
      // Seçim ekranına dön
      this.navigate('selector');
    });
    
    score.render();
  }
}

// Uygulamayı DOM yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});

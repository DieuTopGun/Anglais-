// 40 questions sur nombres, jours, mois en anglais et vocabulaire de base


const questions = [
    //exemple : { question: "Comment dit-on '1' en anglais ?", answers: ["Two", "One", "Zero", "Three"], correct: 1 }
    //pour ajouter une autre question juste a mettre , a la fin de la ligne
    { question: "Comment dit-on 'Lundi' en anglais ?", answers: ["Saturday", "Tuesday", "Monday", "Friday"], correct: 2 },
    { question: "Comment dit-on 'Mardi' en anglais ?", answers: ["Monday", "Thursday", "Friday", "Tuesday"], correct: 3 },
    { question: "Comment dit-on 'Mercredi' en anglais ?", answers: ["Monday", "Wednesday", "Friday", "Tuesday"], correct: 1 },
    { question: "Comment dit-on 'Jeudi' en anglais ?", answers: ["Thursday", "Wednesday", "Friday", "Tuesday"], correct: 0 },
    { question: "Comment dit-on 'Vendredi' en anglais ?", answers: ["Thursday", "Wednesday", "Friday", "Tuesday"], correct: 2 },
    { question: "Comment dit-on 'Samedi' en anglais ?", answers: ["Thursday", "Wednesday", "Sunday", "Saturday"], correct: 3 },
    { question: "Comment dit-on 'Dimanche' en anglais ?", answers: ["Thursday", "Sunday", "Friday", "Tuesday"], correct: 1 },
    { question: "Comment dit-on 'Janvier' en anglais ?", answers: ["June", "January", "Friday", "July"], correct: 1 },
    { question: "Comment dit-on 'Février' en anglais ?", answers: ["April", "September", "February", "October"], correct: 2 },
    { question: "Comment dit-on 'Mars' en anglais ?", answers: ["September", "April", "October", "March"], correct: 3 },
    { question: "Comment dit-on 'Avril' en anglais ?", answers: ["October", "September", "April", "February"], correct: 2 },
    { question: "Comment dit-on 'Mai' en anglais ?", answers: ["May", "April", "October", "December"], correct: 0 },
    { question: "Comment dit-on 'Juin' en anglais ?", answers: ["September", "June", "October", "February"], correct: 1 },
    { question: "Comment dit-on 'Juillet' en anglais ?", answers: ["September", "April", "July", "October"], correct: 2 },
    { question: "Comment dit-on 'Août' en anglais ?", answers: ["October", "September", "June", "August"], correct: 3 },
    { question: "Comment dit-on 'Semptembre' en anglais ?", answers: ["June", "October", "September", "December"], correct: 2 },
    { question: "Comment dit-on 'Octobre' en anglais ?", answers: ["October", "July", "February", "April"], correct: 0 },
    { question: "Comment dit-on 'Novembre' en anglais ?", answers: ["October", "September", "February", "November"], correct: 3 },
    { question: "Comment dit-on 'Décembre' en anglais ?", answers: ["September", "October", "December", "Tuesday"], correct: 2 },
    { question: "Comment dit-on 'Un' en anglais ?", answers: ["Three", "Two", "Four", "One"], correct: 3 },
    { question: "Comment dit-on 'Deux' en anglais ?", answers: ["Three", "Two", "Four", "One"], correct: 1 },
    { question: "Comment dit-on 'Trois' en anglais ?", answers: ["Three", "Two", "Four", "One"], correct: 0 },
    { question: "Comment dit-on 'Quatre' en anglais ?", answers: ["Three", "Two", "Four", "One"], correct: 2 },
    { question: "Comment dit-on 'Cinq' en anglais ?", answers: ["Three", "Five", "Fifteen", "One"], correct: 1 },
    { question: "Comment dit-on 'Six' en anglais ?", answers: ["Sixteen", "Two", "Seventeen", "Six"], correct: 3 },
    { question: "Comment dit-on 'Sept' en anglais ?", answers: ["Three", "Seventeen", "Seven", "Six"], correct: 2 },
    { question: "Comment dit-on 'Huit' en anglais ?", answers: ["Eighteen", "Eight", "Eighty", "Eleven"], correct: 1 },
    { question: "Comment dit-on 'Neuf' en anglais ?", answers: ["Nine", "Eighteen", "Nineteen", "Ninety"], correct: 0 },
    { question: "Comment dit-on 'Dix' en anglais ?", answers: ["Three", "Thirty", "Ten", "Thirteen"], correct: 2 },
    { question: "Comment dit-on 'Onze' en anglais ?", answers: ["Twelve", "Eight", "Fifty", "Eleven"], correct: 3 },
    { question: "Comment dit-on 'Douze' en anglais ?", answers: ["Twelve", "Eight", "Fifty", "Eleven"], correct: 0 }
  ];
  function getRandomQuestions(num) {
    const copy = [...questions]; // On fait une copie du tableau original
    const result = [];
  
    while (result.length < num && copy.length > 0) {
      const index = Math.floor(Math.random() * copy.length);
      result.push(copy.splice(index, 1)[0]); // On prend une question au hasard sans doublon
    }
  
    return result;
  }
  const quizContainer = document.getElementById("quiz-container");
  let currentQuestions = [];
  let score = 0;
  let questionIndex = 0;
  
  function showQuestion() {
    if(questionIndex >= currentQuestions.length) {
      quizContainer.innerHTML = `<h2>Quiz terminé! Score: ${score} / ${currentQuestions.length}</h2>
      <button onclick="startQuiz()">Recommencer</button>`;
      return;
    }
    const q = currentQuestions[questionIndex];
    let answersHtml = "";
    q.answers.forEach((ans, i) => {
      answersHtml += `<button onclick="selectAnswer(${i}, this)">${ans}</button>`;
    });
  
    quizContainer.innerHTML = `
      <div class="question">${q.question}</div>
      <div class="answers">${answersHtml}</div>
    `;
  }
  
  function selectAnswer(selected, btn) {
    const q = currentQuestions[questionIndex];
    if(selected === q.correct) {
      score++;
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
    // Bloquer les boutons
    const buttons = document.querySelectorAll(".answers button");
    buttons.forEach(b => b.disabled = true);
    // Passage à la question suivante après 1.2s
    setTimeout(() => {
      questionIndex++;
      showQuestion();
    }, 1200);
  }
  
  function startQuiz() {
    score = 0;
    questionIndex = 0;
    currentQuestions = getRandomQuestions(20);
    showQuestion();
  }
  
  window.onload = startQuiz;
  
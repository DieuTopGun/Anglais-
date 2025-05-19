// 40 questions sur nombres, jours, mois en anglais et vocabulaire de base


const questions = [
  // Nombres (15 questions)
  { question: "How do you say '1' in English?", answers: ["Two", "One", "Zero", "Three"], correct: 1 },
  { question: "How do you say '5' in English?", answers: ["Six", "Five", "Four", "Seven"], correct: 1 },
  { question: "What is '10' in English?", answers: ["Twelve", "Eleven", "Ten", "Twenty"], correct: 2 },
  { question: "How do you say '15' in English?", answers: ["Five", "Fifteen", "Fourteen", "Fifty"], correct: 1 },
  { question: "What is '20' in English?", answers: ["Twelve", "Thirty", "Twenty", "Two"], correct: 2 },
  { question: "How do you say '100' in English?", answers: ["Ten", "One hundred", "Hundred", "Thousand"], correct: 1 },
  { question: "What number is 'Seventy'?", answers: ["77", "7", "70", "17"], correct: 2 },
  { question: "How do you say '0' in English?", answers: ["Zero", "None", "Nothing", "One"], correct: 0 },
  { question: "What is '30' in English?", answers: ["Thirty-one", "Thirty", "Three", "Thirteen"], correct: 1 },
  { question: "How do you say '40' in English?", answers: ["Fourth", "Four", "Forty", "Fourty"], correct: 2 },
  { question: "What number is 'Ninety'?", answers: ["90", "9", "99", "19"], correct: 0 },
  { question: "How do you say '50' in English?", answers: ["Fifty-five", "Fifteen", "Fifty", "Five"], correct: 2 },
  { question: "What is '60' in English?", answers: ["Sixteen", "Six", "Seventy", "Sixty"], correct: 3 },
  { question: "How do you say '25' in English?", answers: ["Fifty", "Twenty-five", "Twenty", "Fifteen"], correct: 1 },
  { question: "What number is 'Thirteen'?", answers: ["30", "13", "3", "31"], correct: 1 },

  // Jours de la semaine (13 questions)
  { question: "What is 'lundi' in English?", answers: ["Saturday", "Monday", "Sunday", "Tuesday"], correct: 1 },
  { question: "How do you say 'mercredi' in English?", answers: ["Thursday", "Wednesday", "Tuesday", "Monday"], correct: 1 },
  { question: "What day is 'vendredi' in English?", answers: ["Sunday", "Friday", "Monday", "Friday"], correct: 1 },
  { question: "How do you say 'dimanche' in English?", answers: ["Tuesday", "Sunday", "Monday", "Saturday"], correct: 1 },
  { question: "What is 'jeudi' in English?", answers: ["Thursday", "Friday", "Tuesday", "Wednesday"], correct: 0 },
  { question: "How do you say 'samedi' in English?", answers: ["Saturday", "Sunday", "Friday", "Thursday"], correct: 0 },
  { question: "What day is 'mardi' in English?", answers: ["Wednesday", "Monday", "Tuesday", "Thursday"], correct: 2 },
  { question: "What is the first day of the week in English?", answers: ["Monday", "Friday", "Saturday", "Sunday"], correct: 0 },
  { question: "How do you say 'weekend' in French?", answers: ["Weekend", "Month", "Week", "Year"], correct: 0 },
  { question: "Which day comes after Friday?", answers: ["Thursday", "Saturday", "Monday", "Sunday"], correct: 1 },
  { question: "Which day comes before Wednesday?", answers: ["Monday", "Tuesday", "Friday", "Thursday"], correct: 1 },
  { question: "How do you say 'jour' in English?", answers: ["Year", "Month", "Night", "Day"], correct: 3 },
  { question: "What is 'week' in French?", answers: ["Année", "Semaine", "Jour", "Mois"], correct: 1 },

  // Mois de l'année (12 questions)
  { question: "How do you say 'janvier' in English?", answers: ["March", "July", "June", "January"], correct: 3 },
  { question: "What is 'février' in English?", answers: ["December", "April", "October", "February"], correct: 3 },
  { question: "How do you say 'mars' in English?", answers: ["May", "August", "September", "March"], correct: 3 },
  { question: "What is 'avril' in English?", answers: ["July", "March", "June", "April"], correct: 3 },
  { question: "How do you say 'mai' in English?", answers: ["August", "May", "March", "January"], correct: 1 },
  { question: "What is 'juin' in English?", answers: ["May", "June", "August", "July"], correct: 1 },
  { question: "How do you say 'juillet' in English?", answers: ["July", "September", "June", "August"], correct: 0 },
  { question: "What is 'août' in English?", answers: ["October", "August", "November", "April"], correct: 1 },
  { question: "How do you say 'septembre' in English?", answers: ["December", "September", "October", "January"], correct: 1 },
  { question: "What is 'octobre' in English?", answers: ["August", "November", "October", "September"], correct: 2 },
  { question: "How do you say 'novembre' in English?", answers: ["January", "November", "October", "December"], correct: 1 },
  { question: "What is 'décembre' in English?", answers: ["October", "November", "January", "December"], correct: 3 }
];

// Tirer 20 questions aléatoires parmi les 40
function getRandomQuestions(num) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
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
// 40 questions sur nombres, jours, mois en anglais et vocabulaire de base

const questions = [
  // Nombres (15 questions)
  { question: "How do you say '1' in English?", answers: ["One", "Two", "Ten", "Zero"], correct: 0 },
  { question: "How do you say '5' in English?", answers: ["Five", "Seven", "Four", "Six"], correct: 0 },
  { question: "What is '10' in English?", answers: ["Ten", "Twelve", "Twenty", "Eleven"], correct: 0 },
  { question: "How do you say '15' in English?", answers: ["Fifteen", "Fifty", "Five", "Fourteen"], correct: 0 },
  { question: "What is '20' in English?", answers: ["Twenty", "Twelve", "Two", "Thirty"], correct: 0 },
  { question: "How do you say '100' in English?", answers: ["One hundred", "Ten", "Thousand", "Hundred"], correct: 0 },
  { question: "What number is 'Seventy'?", answers: ["70", "17", "7", "77"], correct: 0 },
  { question: "How do you say '0' in English?", answers: ["Zero", "One", "None", "Nothing"], correct: 0 },
  { question: "What is '30' in English?", answers: ["Thirty", "Thirteen", "Thirty-one", "Three"], correct: 0 },
  { question: "How do you say '40' in English?", answers: ["Forty", "Fourty", "Four", "Fourth"], correct: 0 },
  { question: "What number is 'Ninety'?", answers: ["90", "9", "19", "99"], correct: 0 },
  { question: "How do you say '50' in English?", answers: ["Fifty", "Fifteen", "Fifty-five", "Five"], correct: 0 },
  { question: "What is '60' in English?", answers: ["Sixty", "Six", "Sixteen", "Seventy"], correct: 0 },
  { question: "How do you say '25' in English?", answers: ["Twenty-five", "Twenty", "Fifteen", "Fifty"], correct: 0 },
  { question: "What number is 'Thirteen'?", answers: ["13", "30", "3", "31"], correct: 0 },

  // Jours de la semaine (13 questions)
  { question: "What is 'lundi' in English?", answers: ["Monday", "Tuesday", "Sunday", "Saturday"], correct: 0 },
  { question: "How do you say 'mercredi' in English?", answers: ["Wednesday", "Thursday", "Tuesday", "Monday"], correct: 0 },
  { question: "What day is 'vendredi' in English?", answers: ["Friday", "Friday", "Sunday", "Monday"], correct: 0 },
  { question: "How do you say 'dimanche' in English?", answers: ["Sunday", "Saturday", "Monday", "Tuesday"], correct: 0 },
  { question: "What is 'jeudi' in English?", answers: ["Thursday", "Wednesday", "Friday", "Tuesday"], correct: 0 },
  { question: "How do you say 'samedi' in English?", answers: ["Saturday", "Sunday", "Friday", "Thursday"], correct: 0 },
  { question: "What day is 'mardi' in English?", answers: ["Tuesday", "Monday", "Wednesday", "Thursday"], correct: 0 },
  { question: "What is the first day of the week in English?", answers: ["Monday", "Sunday", "Saturday", "Friday"], correct: 0 },
  { question: "How do you say 'weekend' in French?", answers: ["Weekend", "Week", "Month", "Year"], correct: 0 },
  { question: "Which day comes after Friday?", answers: ["Saturday", "Sunday", "Thursday", "Monday"], correct: 0 },
  { question: "Which day comes before Wednesday?", answers: ["Tuesday", "Thursday", "Monday", "Friday"], correct: 0 },
  { question: "How do you say 'jour' in English?", answers: ["Day", "Night", "Month", "Year"], correct: 0 },
  { question: "What is 'week' in French?", answers: ["Semaine", "Jour", "Mois", "Année"], correct: 0 },

  // Mois de l'année (12 questions)
  { question: "How do you say 'janvier' in English?", answers: ["January", "June", "July", "March"], correct: 0 },
  { question: "What is 'février' in English?", answers: ["February", "December", "April", "October"], correct: 0 },
  { question: "How do you say 'mars' in English?", answers: ["March", "May", "August", "September"], correct: 0 },
  { question: "What is 'avril' in English?", answers: ["April", "March", "June", "July"], correct: 0 },
  { question: "How do you say 'mai' in English?", answers: ["May", "March", "August", "January"], correct: 0 },
  { question: "What is 'juin' in English?", answers: ["June", "July", "May", "August"], correct: 0 },
  { question: "How do you say 'juillet' in English?", answers: ["July", "June", "August", "September"], correct: 0 },
  { question: "What is 'août' in English?", answers: ["August", "April", "October", "November"], correct: 0 },
  { question: "How do you say 'septembre' in English?", answers: ["September", "October", "December", "January"], correct: 0 },
  { question: "What is 'octobre' in English?", answers: ["October", "September", "November", "August"], correct: 0 },
  { question: "How do you say 'novembre' in English?", answers: ["November", "December", "October", "January"], correct: 0 },
  { question: "What is 'décembre' in English?", answers: ["December", "November", "October", "January"], correct: 0 }
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
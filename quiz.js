// 40 questions sur nombres, jours, mois en anglais et vocabulaire de base


const questions = [
  // Nombres (15 questions)
  { question: "Comment dit-on '1' en anglais ?", answers: ["Two", "One", "Zero", "Three"], correct: 1 },
  { question: "Comment dit-on '5' en anglais ?", answers: ["Six", "Five", "Four", "Seven"], correct: 1 },
  { question: "Comment dit-on '10' en anglais ?", answers: ["Twelve", "Eleven", "Ten", "Twenty"], correct: 2 },
  { question: "Comment dit-on '15' en anglais ?", answers: ["Five", "Fifteen", "Fourteen", "Fifty"], correct: 1 },
  { question: "Comment dit-on '20' en anglais ?", answers: ["Twelve", "Thirty", "Twenty", "Two"], correct: 2 },
  { question: "Comment dit-on '100' en anglais ?", answers: ["Ten", "One hundred", "Hundred", "Thousand"], correct: 1 },
  { question: "Quel chiffre correspond à 'Seventy' ?", answers: ["77", "7", "70", "17"], correct: 2 },
  { question: "Comment dit-on '0' en anglais ?", answers: ["Zero", "None", "Nothing", "One"], correct: 0 },
  { question: "Comment dit-on '30' en anglais ?", answers: ["Thirty-one", "Thirty", "Three", "Thirteen"], correct: 1 },
  { question: "Comment dit-on '40' en anglais ?", answers: ["Fourth", "Four", "Forty", "Fourty"], correct: 2 },
  { question: "Quel chiffre correspond à 'Ninety' ?", answers: ["90", "9", "99", "19"], correct: 0 },
  { question: "Comment dit-on '50' en anglais ?", answers: ["Fifty-five", "Fifteen", "Fifty", "Five"], correct: 2 },
  { question: "Comment dit-on '60' en anglais ?", answers: ["Sixteen", "Six", "Seventy", "Sixty"], correct: 3 },
  { question: "Comment dit-on '25' en anglais ?", answers: ["Fifty", "Twenty-five", "Twenty", "Fifteen"], correct: 1 },
  { question: "Quel chiffre correspond à 'Thirteen' ?", answers: ["30", "13", "3", "31"], correct: 1 },

  // Jours de la semaine (13 questions)
  { question: "Comment dit-on 'lundi' en anglais ?", answers: ["Saturday", "Monday", "Sunday", "Tuesday"], correct: 1 },
  { question: "Comment dit-on 'mercredi' en anglais ?", answers: ["Thursday", "Wednesday", "Tuesday", "Monday"], correct: 1 },
  { question: "Comment dit-on 'vendredi' en anglais ?", answers: ["Sunday", "Friday", "Monday", "Friday"], correct: 1 },
  { question: "Comment dit-on 'dimanche' en anglais ?", answers: ["Tuesday", "Sunday", "Monday", "Saturday"], correct: 1 },
  { question: "Comment dit-on 'jeudi' en anglais ?", answers: ["Thursday", "Friday", "Tuesday", "Wednesday"], correct: 0 },
  { question: "Comment dit-on 'samedi' en anglais ?", answers: ["Saturday", "Sunday", "Friday", "Thursday"], correct: 0 },
  { question: "Comment dit-on 'mardi' en anglais ?", answers: ["Wednesday", "Monday", "Tuesday", "Thursday"], correct: 2 },
  { question: "Quel est le premier jour de la semaine en anglais ?", answers: ["Monday", "Friday", "Saturday", "Sunday"], correct: 0 },
  { question: "Comment dit-on 'weekend' en français ?", answers: ["Weekend", "Month", "Week", "Year"], correct: 0 },
  { question: "Quel jour vient après vendredi ?", answers: ["Thursday", "Saturday", "Monday", "Sunday"], correct: 1 },
  { question: "Quel jour vient avant mercredi ?", answers: ["Monday", "Tuesday", "Friday", "Thursday"], correct: 1 },
  { question: "Comment dit-on 'jour' en anglais ?", answers: ["Year", "Month", "Night", "Day"], correct: 3 },
  { question: "Comment dit-on 'semaine' en anglais ?", answers: ["Année", "Semaine", "Jour", "Mois"], correct: 1 },

  // Mois de l'année (12 questions)
  { question: "Comment dit-on 'janvier' en anglais ?", answers: ["March", "July", "June", "January"], correct: 3 },
  { question: "Comment dit-on 'février' en anglais ?", answers: ["December", "April", "October", "February"], correct: 3 },
  { question: "Comment dit-on 'mars' en anglais ?", answers: ["May", "August", "September", "March"], correct: 3 },
  { question: "Comment dit-on 'avril' en anglais ?", answers: ["July", "March", "June", "April"], correct: 3 },
  { question: "Comment dit-on 'mai' en anglais ?", answers: ["August", "May", "March", "January"], correct: 1 },
  { question: "Comment dit-on 'juin' en anglais ?", answers: ["May", "June", "August", "July"], correct: 1 },
  { question: "Comment dit-on 'juillet' en anglais ?", answers: ["July", "September", "June", "August"], correct: 0 },
  { question: "Comment dit-on 'août' en anglais ?", answers: ["October", "August", "November", "April"], correct: 1 },
  { question: "Comment dit-on 'septembre' en anglais ?", answers: ["December", "September", "October", "January"], correct: 1 },
  { question: "Comment dit-on 'octobre' en anglais ?", answers: ["August", "November", "October", "September"], correct: 2 },
  { question: "Comment dit-on 'novembre' en anglais ?", answers: ["January", "November", "October", "December"], correct: 1 },
  { question: "Comment dit-on 'décembre' en anglais ?", answers: ["October", "November", "January", "December"], correct: 3 },
  // 6 questions 
  { question: {"Quel est le pronom personnel sujet pour 'moi' ?"}, answers: ["Je", "Tu", "Il", "Nous"], correct: 0 },
  { question: {"Quel est le pronom personnel sujet pour 'toi' ?"}, answers: ["Je", "Il", "Tu", "Vous"], correct: 2 },
  { question: {"Quel est le pronom personnel sujet pour 'Paul' ?"}, answers: ["Elle", "Il", "Tu", "On"], correct: 1 },
  { question: {"Quel est le pronom personnel sujet pour 'Paul et moi' ?"}, answers: ["Vous", "Ils", "Nous", "Tu"], correct: 2 },
  { question: {"Quel est le pronom personnel sujet pour 'Paul et toi' ?"}, answers: ["Vous", "Nous", "Ils", "Tu"], correct: 0 },
  { question: {"Quel est le pronom personnel sujet pour 'Les enfants' ?"}, answers: ["Ils", "Vous", "On", "Nous"], correct: 0 },
//6 questions 
  { question: {"Quelle est la forme du verbe 'être' à la 1re personne du singulier ?"}, answers: ["es", "suis", "est", "sommes"], correct: 1 },
  { question: {"Quelle est la forme du verbe 'être' à la 2e personne du singulier ?"}, answers: ["es", "êtes", "est", "suis"], correct: 0 },
  { question: {"Quelle est la forme du verbe 'être' à la 3e personne du singulier ?"}, answers: ["sommes", "êtes", "est", "es"], correct: 2 },
  { question: {"Quelle est la forme du verbe 'être' à la 1re personne du pluriel ?"}, answers: ["sommes", "sont", "êtes", "es"], correct: 0 },
  { question: {"Quelle est la forme du verbe 'être' à la 2e personne du pluriel ?"}, answers: ["êtes", "sommes", "est", "sont"], correct: 0 },
  { question: {"Quelle est la forme du verbe 'être' à la 3e personne du pluriel ?"}, answers: ["sont", "sommes", "êtes", "est"], correct: 0 },
// 6 questions 
  { question: {"Quelle est la forme du verbe 'avoir' à la 1re personne du singulier ?"}, answers: ["ai", "as", "a", "avons"], correct: 0 },
  { question: {"Quelle est la forme du verbe 'avoir' à la 2e personne du singulier ?"}, answers: ["a", "ai", "as", "avez"], correct: 2 },
  { question: {"Quelle est la forme du verbe 'avoir' à la 3e personne du singulier ?"}, answers: ["ont", "a", "as", "ai"], correct: 1 },
  { question: {"Quelle est la forme du verbe 'avoir' à la 1re personne du pluriel ?"}, answers: ["ont", "avez", "avons", "as"], correct: 2 },
  { question: {"Quelle est la forme du verbe 'avoir' à la 2e personne du pluriel ?"}, answers: ["avez", "avons", "a", "ai"], correct: 0 },
  { question: {"Quelle est la forme du verbe 'avoir' à la 3e personne du pluriel ?"}, answers: ["a", "ont", "avons", "avez"], correct: 1 },
  
  { question: {"Quel pronom personnel correspond à 'Marie' ?"}, answers: ["Il", "Elle", "Tu", "Nous"], correct: 1 },
  { question: {"Quel pronom personnel correspond à 'Jean et Pierre' ?"}, answers: ["Ils", "Vous", "Nous", "Il"], correct: 0 },
  { question: {"Quel pronom personnel remplace 'toi et moi' ?"}, answers: ["Nous", "Vous", "Ils", "Tu"], correct: 0 },
  { question: {"Quel pronom utilise-t-on avec le verbe 'sommes' ?"}, answers: ["Je", "Nous", "Vous", "Ils"], correct: 1 },
  { question: {"Quel pronom utilise-t-on avec le verbe 'êtes' ?"}, answers: ["Tu", "Nous", "Vous", "Ils"], correct: 2 },
  { question: {"Quel pronom utilise-t-on avec le verbe 'es' ?"}, answers: ["Je", "Tu", "Il", "Nous"], correct: 1 },
  { question: {"Quel pronom utilise-t-on avec 'ai' ?"}, answers: ["Je", "Tu", "Il", "Nous"], correct: 0 },
  { question: {"Quel pronom utilise-t-on avec 'a' ?"}, answers: ["Je", "Tu", "Il/Elle", "Nous"], correct: 2 },
  { question: {"Quel pronom utilise-t-on avec 'ont' ?"}, answers: ["Ils", "Nous", "Tu", "Je"], correct: 0 },
  { question: {"Quelle est la terminaison du verbe 'être' avec 'tu' ?"}, answers: ["es", "est", "suis", "êtes"], correct: 0 },
  { question: {"Quelle est la terminaison du verbe 'être' avec 'vous' ?"}, answers: ["sont", "es", "êtes", "sommes"], correct: 2 },
  { question: {"Quelle est la terminaison du verbe 'avoir' avec 'nous' ?"}, answers: ["avez", "avons", "ai", "as"], correct: 1 },
  { question: {"Quelle est la terminaison du verbe 'avoir' avec 'vous' ?"}, answers: ["avez", "avons", "ont", "a"], correct: 0 },
  { question: {"Quel verbe correspond à la phrase : 'Il ___ un frère.'"}, answers: ["suis", "es", "a", "ai"], correct: 2 },
  { question: {"Quel verbe correspond à la phrase : 'Je ___ fatigué.'"}, answers: ["es", "suis", "est", "sont"], correct: 1 },
  { question: {"Quel verbe correspond à la phrase : 'Ils ___ à l’école.'"}, answers: ["es", "sommes", "sont", "êtes"], correct: 2 },
  { question: {"Quel verbe correspond à la phrase : 'Nous ___ une voiture.'"}, answers: ["as", "avons", "ai", "avez"], correct: 1 },
  { question: {"Complétez : Tu ___ intelligent."}, answers: ["es", "est", "suis", "êtes"], correct: 0 },
  { question: {"Complétez : Vous ___ des amis."}, answers: ["ont", "avez", "a", "ai"], correct: 1 },
  { question: {"Complétez : Je ___ deux soeurs."}, answers: ["as", "ai", "a", "avons"], correct: 1 },
  { question: {"Quel est le pronom pour un groupe de filles ?"}, answers: ["Ils", "Elles", "Vous", "Nous"], correct: 1 },
  { question: {"Quel est le verbe 'être' avec 'elles' ?"}, answers: ["suis", "sont", "est", "sommes"], correct: 1 },
  { question: {"Quel est le verbe 'avoir' avec 'elles' ?"}, answers: ["ai", "a", "ont", "avez"], correct: 2 },
  { question: {"Quel est le verbe 'être' avec 'on' ?"}, answers: ["es", "sommes", "est", "êtes"], correct: 2 },
  { question: {"Quel est le pronom pour parler de soi-même ?"}, answers: ["Je", "Tu", "Il", "Nous"], correct: 0 },
  { question: {"Quel est le pronom pour une personne qu’on tutoie ?"}, answers: ["Je", "Tu", "Il", "Vous"], correct: 1 },
  { question: {"Quel est le verbe 'avoir' pour 'tu' ?"}, answers: ["ai", "as", "a", "avons"], correct: 1 },
  { question: {"Quel est le verbe 'être' pour 'je' ?"}, answers: ["es", "est", "suis", "sommes"], correct: 2 },
  { question: {"Quel est le verbe 'avoir' pour 'ils' ?"}, answers: ["a", "as", "ont", "avez"], correct: 2 },
  { question: {"Quel est le verbe 'avoir' pour 'vous' ?"}, answers: ["avez", "avons", "ont", "a"], correct: 0 }
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
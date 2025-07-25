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
  { question: "Comment dit-on 'vendredi' en anglais ?", answers: ["Sunday", "Friday", "Monday", "Thursday"], correct: 1 },
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
{ question: "Quel est le pronom personnel sujet pour 'moi' ?", answers: ["I", "you", "he", "she"], correct: 0 },
  { question: "Quel est le pronom personnel sujet pour 'toi' ?", answers: ["he", "I", "you", "you (formal)"], correct: 2 },
  { question: "Quel est le pronom personnel sujet pour 'lui' ?", answers: ["she", "they (masc.)", "he", "you"], correct: 2 },
  { question: "Quel est le pronom personnel sujet pour 'elle' ?", answers: ["I", "she", "we", "you"], correct: 1 },
  { question: "Quel est le pronom personnel sujet pour 'nous' ?", answers: ["you (plural)", "they (masc.)", "we", "they (fem.)"], correct: 2 },
  { question: "Quel est le pronom personnel sujet pour 'vous' ?", answers: ["you (singular)", "you", "we", "they (masc.)"], correct: 1 },
  { question: "Quel est le pronom personnel sujet pour 'eux' ?", answers: ["they (fem.)", "he", "we", "they (masc.)"], correct: 3 },
  { question: "Quel est le pronom personnel sujet pour 'elles' ?", answers: ["they (fem.)", "we", "you", "he"], correct: 0 },
  { question: "Quel est le pronom personnel sujet pour 'Jean et moi' ?", answers: ["you", "we", "they (masc.)", "she"], correct: 1 },
  { question: "Quel est le pronom personnel sujet pour 'Marie et toi' ?", answers: ["we", "they (masc.)", "you", "you (singular)"], correct: 2 },
  { question: "Quel est le pronom personnel sujet pour 'Paul' ?", answers: ["he", "she", "you", "I"], correct: 0 },
  { question: "Quel est le pronom personnel sujet pour 'Sophie' ?", answers: ["he", "you", "she", "you (plural)"], correct: 2 },
  { question: "Quel est le pronom personnel sujet pour 'les enfants' ?", answers: ["he", "they (fem.)", "you", "they (masc.)"], correct: 3 },
  { question: "Quel est le pronom personnel sujet pour 'ma sœur et moi' ?", answers: ["we", "you", "they (masc.)", "they (fem.)"], correct: 0 },
  { question: "Quel est le pronom personnel sujet pour 'toi et lui' ?", answers: ["they (masc.)", "you", "we", "she"], correct: 1 },
  { question: "Quel est le pronom personnel sujet pour 'la voiture' ?", answers: ["she", "he", "we", "you"], correct: 0 },
  { question: "Quel est le pronom personnel sujet pour 'le livre' ?", answers: ["she", "you", "he", "we"], correct: 2 },
  { question: "Quel est le pronom personnel sujet pour 'mes parents' ?", answers: ["they (masc.)", "they (fem.)", "we", "you"], correct: 0 },
  { question: "Quel est le pronom personnel sujet pour 'toi et moi' ?", answers: ["we", "you", "they (masc.)", "she"], correct: 0 },
  { question: "Quel est le pronom personnel sujet pour 'les filles' ?", answers: ["they (masc.)", "they (fem.)", "you", "we"], correct: 1 },
  
  { question: "Comment dit-on 'je' en anglais ?", answers: ["I", "you", "he", "she"], correct: 0 },
  { question: "Comment dit-on 'tu' en anglais ?", answers: ["we", "they", "you", "he"], correct: 2 },
  { question: "Comment dit-on 'il' en anglais ?", answers: ["he", "she", "it", "they"], correct: 0 },
  { question: "Comment dit-on 'elle' en anglais ?", answers: ["he", "we", "she", "they"], correct: 2 },
  { question: "Comment dit-on 'nous' en anglais ?", answers: ["you", "we", "they", "he"], correct: 1 },
  { question: "Comment dit-on 'vous' en anglais ?", answers: ["you", "they", "we", "she"], correct: 0 },
  { question: "Comment dit-on 'ils' en anglais ?", answers: ["we", "they", "you", "he"], correct: 1 },
  { question: "Comment dit-on 'elles' en anglais ?", answers: ["she", "you", "they", "we"], correct: 2 },
  { question: "Comment dit-on 'Jean et moi' en anglais ?", answers: ["you", "they", "we", "he"], correct: 2 },
  { question: "Comment dit-on 'Marie et toi' en anglais ?", answers: ["you", "we", "they", "she"], correct: 0 },
  { question: "Comment dit-on 'Paul' en anglais ?", answers: ["he", "she", "you", "I"], correct: 0 },
  { question: "Comment dit-on 'Sophie' en anglais ?", answers: ["she", "he", "they", "you"], correct: 0 },
  { question: "Comment dit-on 'les enfants' en anglais ?", answers: ["he", "they", "you", "it"], correct: 1 },
  { question: "Comment dit-on 'ma sœur et moi' en anglais ?", answers: ["we", "they", "you", "she"], correct: 0 },
  { question: "Comment dit-on 'toi et lui' en anglais ?", answers: ["they", "you", "we", "he"], correct: 1 },
  { question: "Comment dit-on 'la voiture' en anglais ?", answers: ["it", "he", "she", "they"], correct: 0 },
  { question: "Comment dit-on 'le livre' en anglais ?", answers: ["he", "she", "it", "they"], correct: 2 },
  { question: "Comment dit-on 'mes parents' en anglais ?", answers: ["they", "we", "you", "he"], correct: 0 },
  { question: "Comment dit-on 'toi et moi' en anglais ?", answers: ["we", "you", "they", "she"], correct: 0 },
  { question: "Comment dit-on 'les filles' en anglais ?", answers: ["she", "they", "we", "you"], correct: 1 },
  { question: "Comment dit-on 'ça' ou 'cela' en anglais ?", answers: ["he", "she", "they", "it"], correct: 3 },
  { question: "Quel est le pronom personnel sujet en anglais pour un objet comme 'la voiture' ?", answers: ["he", "she", "it", "they"], correct: 2 },
  { question: "Quel pronom personnel sujet en anglais utilise-t-on pour un animal ou un objet ?", answers: ["it", "he", "we", "they"], correct: 0 },
  { question: "Quel pronom anglais remplace un mot comme 'le soleil' ?", answers: ["she", "they", "he", "it"], correct: 3 },
  { question: "Quel pronom anglais utilise-t-on pour parler du temps, comme dans 'il pleut' ?", answers: ["it", "he", "they", "she"], correct: 0 },

  //La date
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
    { question: "Comment dit-on 'Douze' en anglais ?", answers: ["Twelve", "Eight", "Fifty", "Eleven"], correct: 0 },
    //La famille questions
    
      { question: "Comment dit-on 'La mère' en anglais ?", answers: ["The mother", "The father", "The sister", "The aunt"], correct: 0 },
      { question: "Comment dit-on 'Le frère' en anglais ?", answers: ["The cousin", "The brother", "The uncle", "The son"], correct: 1 },
      { question: "Comment dit-on 'Le père' en anglais ?", answers: ["The nephew", "The uncle", "The father", "The brother"], correct: 2 },
      { question: "Comment dit-on 'La sœur' en anglais ?", answers: ["The niece", "The daughter", "The aunt", "The sister"], correct: 3 },
      
      { question: "Comment dit-on 'Les parents' en anglais ?", answers: ["The parents", "The children", "The cousins", "The siblings"], correct: 0 },
      { question: "Comment dit-on 'Le fils' en anglais ?", answers: ["The nephew", "The son", "The uncle", "The brother"], correct: 1 },
      { question: "Comment dit-on 'La fille' en anglais ?", answers: ["The sister", "The mother", "The daughter", "The aunt"], correct: 2 },
      { question: "Comment dit-on 'Le grand-père' en anglais ?", answers: ["The uncle", "The grandfather", "The father", "The cousin"], correct: 1 },
      
      { question: "Comment dit-on 'La grand-mère' en anglais ?", answers: ["The aunt", "The sister", "The grandmother", "The mother"], correct: 2 },
      { question: "Comment dit-on 'L’oncle' en anglais ?", answers: ["The nephew", "The uncle", "The cousin", "The brother"], correct: 1 },
      { question: "Comment dit-on 'La tante' en anglais ?", answers: ["The aunt", "The cousin", "The sister", "The niece"], correct: 0 },
      { question: "Comment dit-on 'Le cousin' en anglais ?", answers: ["The nephew", "The niece", "The cousin", "The uncle"], correct: 2 },
      
      { question: "Comment dit-on 'Le neveu' en anglais ?", answers: ["The nephew", "The niece", "The cousin", "The aunt"], correct: 0 },
      { question: "Comment dit-on 'La nièce' en anglais ?", answers: ["The uncle", "The nephew", "The niece", "The cousin"], correct: 2 },
      { question: "Do you have any ___? (frères et sœurs)", answers: ["siblings", "cousins", "parents", "children"], correct: 0 },
      { question: "What is the English word for 'frère'?", answers: ["brother", "sister", "father", "uncle"], correct: 0 },
      
      { question: "What is the English word for 'mère'?", answers: ["mother", "aunt", "daughter", "sister"], correct: 0 },
      { question: "How do you say 'grand-père' in English?", answers: ["grandfather", "grandmother", "uncle", "father"], correct: 0 },
      { question: "How do you say 'fils' in English?", answers: ["son", "nephew", "brother", "cousin"], correct: 0 },
      { question: "How do you say 'sœur' in English?", answers: ["sister", "daughter", "aunt", "mother"], correct: 0 }
    
    
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

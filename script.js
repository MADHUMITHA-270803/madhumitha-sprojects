// ================= DOM ELEMENTS =================
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = quizContainer.querySelector(".answer-options");
const nextQuestionBtn = quizContainer.querySelector(".next-question-btn");
const questionStatus = quizContainer.querySelector(".question-status");
const timerDisplay = quizContainer.querySelector(".timer-duration");
const resultContainer = document.querySelector(".result-container");

// ================= QUIZ STATE =================
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;

let quizCategory = "DBMS";
let numberOfQuestions = 5;

let currentQuestion = null;
let questionIndex = 0;
let correctAnswersCount = 0;
let disableSelection = false;

let filteredQuestions = [];
let userAnswers = [];

// ================= TIMER =================
const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
};

const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;
    if (currentTime <= 0) {
      clearInterval(timer);
      disableSelection = true;
      highlightCorrectAnswer();
      nextQuestionBtn.style.visibility = "visible";
    }
  }, 1000);
};

// ================= UTILS =================
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// ================= QUESTION PREP =================
const prepareQuestions = () => {
  const categoryData = questions.find(q => q.category === quizCategory);
  if (!categoryData) return [];

  return shuffleArray([...categoryData.questions]).slice(0, numberOfQuestions);
};

// ================= RENDER QUESTION =================
const renderQuestion = () => {
  if (questionIndex >= filteredQuestions.length) {
    showQuizResult();
    return;
  }

  currentQuestion = filteredQuestions[questionIndex];
  disableSelection = false;
  nextQuestionBtn.style.visibility = "hidden";

  resetTimer();
  startTimer();

  quizContainer.querySelector(".question-text").textContent = currentQuestion.question;
  questionStatus.innerHTML = `Question <b>${questionIndex + 1}</b> of <b>${filteredQuestions.length}</b>`;

  const progress = quizContainer.querySelector(".progress");
  progress.style.width = `${(questionIndex / filteredQuestions.length) * 100}%`;

  answerOptions.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    li.onclick = () => handleAnswer(li, index);
    answerOptions.appendChild(li);
  });
};

// ================= ANSWER LOGIC =================
const highlightCorrectAnswer = () => {
  const correctOption = answerOptions.children[currentQuestion.correctAnswer];
  if (correctOption) correctOption.classList.add("correct");
};

const handleAnswer = (option, index) => {
  if (disableSelection) return;

  clearInterval(timer);
  disableSelection = true;

  const isCorrect = index === currentQuestion.correctAnswer;
  option.classList.add(isCorrect ? "correct" : "incorrect");

  if (isCorrect) correctAnswersCount++;

  highlightCorrectAnswer();
  nextQuestionBtn.style.visibility = "visible";
};

// ================= RESULT =================
const showQuizResult = () => {
  document.querySelector(".quiz-popup").classList.remove("active");
  document.querySelector(".result-popup").classList.add("active");

  const percentage = Math.round((correctAnswersCount / filteredQuestions.length) * 100);

  resultContainer.querySelector(".result-message").innerHTML = `
    Score: <b>${correctAnswersCount}</b> / ${filteredQuestions.length}<br>
    Percentage: <b>${percentage}%</b>
  `;
};

// ================= START QUIZ =================
const startQuiz = () => {
  const selectedCategory = configContainer.querySelector(".category-option.active");
  const selectedCount = configContainer.querySelector(".question-option.active");

  if (!selectedCategory || !selectedCount) {
    alert("Please select category and number of questions");
    return;
  }

  quizCategory = selectedCategory.textContent;
  numberOfQuestions = parseInt(selectedCount.textContent);

  questionIndex = 0;
  correctAnswersCount = 0;

  filteredQuestions = prepareQuestions();

  document.querySelector(".config-popup").classList.remove("active");
  document.querySelector(".quiz-popup").classList.add("active");

  renderQuestion();
};

// ================= RESET =================
  const resetQuiz = () => {
  // Hide result, show config
  document.querySelector(".result-popup").classList.remove("active");
  document.querySelector(".config-popup").classList.add("active");

  // 🔥 HARD RESET UI STATE
  document
    .querySelectorAll(".category-option, .question-option")
    .forEach(btn => btn.classList.remove("active"));

  // 🔥 RESET INTERNAL STATE
  quizCategory = null;
  numberOfQuestions = null;
};



// ================= EVENTS =================
nextQuestionBtn.onclick = () => {
  questionIndex++;
  renderQuestion();
};

resultContainer.querySelector(".try-again-btn").onclick = resetQuiz;
configContainer.querySelector(".start-quiz-btn").onclick = startQuiz;

configContainer.querySelectorAll(".category-option, .question-option").forEach(btn => {
  btn.onclick = () => {
    const parent = btn.parentElement;
    parent.querySelector(".active")?.classList.remove("active");
    btn.classList.add("active");
  };
});

var myButton = document.getElementById("Button");
var startContainer = document.querySelector(".startContainer");
var quizArea = document.querySelector(".quizArea");
//var user =

quizArea.style.display = "none";

var questions = [
  {
    questionText: "What does an array store?",
    choices: ["String", "Boolean", "Objects", "All data types"],
    answer: "All data types",
  },
  {
    questionText: "What does a boolean expression give you?",
    choices: ["String", "Object", "Number", "True/False"],
    answer: "True/False",
  },
  {
    questionText: "What symbol describes an array?",
    choices: ["''", "{}", "[]", "not listed"],
    answer: "[]",
  },
];

var questionIndex = 0;
var timer = 100;

function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  document.querySelector(".question").innerText = currentQuestion.questionText;
  document.querySelector(".btn1").innerText = currentQuestion.choices[0];
  document.querySelector(".btn2").innerText = currentQuestion.choices[1];
  document.querySelector(".btn3").innerText = currentQuestion.choices[2];
  document.querySelector(".btn4").innerText = currentQuestion.choices[3];
}

function startQuiz() {
  startContainer.style.display = "none";
  quizArea.style.display = "block";
  renderQuestion();
  startTimer();
}

// function displayMessage(){
//     var score = 
// }

function startTimer() {
  var timeInterval = setInterval(function () {
    if (timer > 1) {
      timer -= 1;
      document.querySelector(".timer").innerText = timer;
    }
  }, 1000);
}

quizArea.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    var userChoice = event.target.innerText;
    var correct = questions[questionIndex].answer;
    if (correct !== userChoice) {
      timer -= 10;
    }
    questionIndex++;
    renderQuestion();
    // clearInterval(setInterval);
  }
});

myButton.addEventListener("click", startQuiz);




// event.preventDefault();


// :hover css?
// event.currentTarget.setAttribute(
//  "style",
//  "background-color: #EE442F; color: white;"
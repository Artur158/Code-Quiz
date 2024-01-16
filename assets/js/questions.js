
var startButton = document.getElementById("start");
var timerElement = document.getElementById("time");
var questionTitleElement = document.getElementById("question-title");
var choicesElement = document.getElementById("choices");
var feedbackElement = document.getElementById("feedback");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var endScreen = document.getElementById("end-screen");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("questions");


var questions = [
    {
    title: "What is JavaScript?",
    choices: ["A programing language", "Same thing as Java", "A roll of ancient paper", "Type of Coffee machine"],
    correctAnswer: "A programing language",
    },
        {
    title: "What does CSS stand for?",
    choices: ["Coding Style Sheets", "Cascading Style Shoes", "Cascading Style Sheets", "Cascading Side Sheets"],
    correctAnswer: "Cascading Style Sheets",
    },
    {
    title: "What is JavaScript?",
    choices: ["A programing language", "Same thing as Java", "A roll of anciant paper", "Type of Coffee machine"],
    correctAnswer: "A programing language",
    },
        
];


var currentQuestionIndex = 0;
var timer;
var timeLeft = 0;
var score = 0;


function startQuiz() {
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    timeLeft = 100; 
    Question();
    startTimer();
}


function Question() {
    var currentQuestion = questions[currentQuestionIndex];
    questionTitleElement.textContent = currentQuestion.title;
    choicesElement.innerHTML = ""; 

    currentQuestion.choices.forEach(function (choice, index) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function () {
        checkAnswer(choice, currentQuestion.correctAnswer);
    });
    choicesElement.appendChild(choiceButton);
    });
}


function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
    score += 10;
    } else {
    
    timeLeft -= 5;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    }


    feedbackElement.textContent =
    selectedAnswer === correctAnswer ? "Correct!" : "Incorrect!";


    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    Question();
    } else {
    endQuiz();
    }
}


function endQuiz() {
    clearInterval(timer);
    questionsScreen.classList.add("hide");
    endScreen.classList.remove("hide");
    document.getElementById("final-score").textContent = score;
}


function startTimer() {
    timer = timerLeft(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    }
    }, 1000);
}


startButton.addEventListener("click", startQuiz);


submitButton.addEventListener("click", function () {
    var initials = initialsInput.value.trim();

});

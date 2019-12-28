// Creating Objects, storing certain variables
var player = {
    isPlaying: false,
    isWaiting: false,
    numberCorrect: 0,
    numberIncorrect: 0,
    wins: 0,
    losses: 0
}

// Setting up an empty array for questions, the current question, and the status of the game (timer)
var questionsArray = [];
var currentQuestion;
var gameStatus = [];

// timer variables.  timer = variable for javascript timer.  time = variables for actual time.
var questionTimer;
var summaryTimer;
var timeQuestion = 10000;
var timeSummary = 15000;
var time = 0;
var counter;

var timeProgress = {
    start: function () {
        counter = setInterval(timeProgress.count, 1000);
    },
    stop: function () {
        clearInterval(counter);
        time = 0;
    },
    count: function () {
        time++;
        console.log(time);
    }
}
$(document).ready(function () {
});

function initialization() {
    player.isPlaying = !player.isPlaying;
    gameStatus = [];
    player.numberCorrect = 0;
    player.numberIncorrect = 0;
    questionsArray = createQuestionArray();
}

function createQuestionArray() {
    function questionObject(question, answers, correctAnswer, userAnswer, answerExplanation, picture, isCorrect, isTimeUp) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = this.answers[correctAnswer];
        this.userAnswer = this.answers[userAnswer];
        this.answerExplanation = answerExplanation;
        this.picture = picture;
        this.isCorrect = isCorrect;
        this.isTimeUp = isTimeUp;
    }

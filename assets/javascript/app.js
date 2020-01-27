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

    var question0 = new questionObject(
        /*question:*/ "What is the national food of Italy",
        /*answers:*/ ["Pizza", "Bolognese sauce with tagliatelle pasta", "Gelato", "Spaghetti", null],
        /*correctAnswer:*/ 1,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/BologneseSauceWithTagliatellePasta.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
        
      var question1 = new questionObject(
        /*question:*/ "What European nation consumes more spicy Mexican food than any other?",
        /*answers:*/ ["Sweden", "Spain", "Norway", "Greece", null],
        /*correctAnswer:*/ 2,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/Norway.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question2 = new questionObject(
        /*question:*/ "What flavor of ice cream did Baskin-Robbins introduce to commemorate America's landing on the moon on July 20, 1969?",
        /*answers:*/ ["Moon Pie", "Cosmic Brownie", "Galactic Grape", "Lunar Cheesecake", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/LunarCheesecsake.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question3 = new questionObject(
        /*question:*/ "What is the most widely eaten fish in the world?",
        /*answers:*/ ["Halibut", "Salmon", "Trout", "Herring", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/Herring.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question4 = new questionObject(
        /*question:*/ "What nation produces two thirds of the world's vanilla?",
        /*answers:*/ ["Argentina", "Brazil", "Chile", "Madagascar", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/Madagascar.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question5 = new questionObject(
        /*question:*/ "What was the first commercially manufactured breakfast cereal?",
        /*answers:*/ ["Rice Crispies", "Raisin Bran", "Corn Flakes", "Shredded Wheat", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/ShreddedWheat.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question6 = new questionObject(
        /*question:*/ "What is the only essential vitamin not found in the white potato?",
        /*answers:*/ ["Vitamin D", "Vitamin B-12", "Vitamin K", "Vitamin A", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/VitaminA.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question7 = new questionObject(
        /*question:*/ "Where did the pineapple plant originate?",
        /*answers:*/ ["South America", "Hawaii", "Sri Lanka", "Portugal", null],
        /*correctAnswer:*/ 0,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/SouthAmerica.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question8 = new questionObject(
        /*question:*/ "What country saw the cultivation of the first potato, in 200 A.D.?",
        /*answers:*/ ["Europe", "South America", "North Americia", "Asia", null],
        /*correctAnswer:*/ 1,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/SouthAmerica.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question9 = new questionObject(
        /*question:*/ "What state was Coca-Cola first sold in?",
        /*answers:*/ ["Georgia", "New York", "Chicago", "Florida", null],
        /*correctAnswer:*/ 0,
        /*userAnswer:*/ 4,
        /*picture:*/ "assets/images/Georgia.jpeg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
        
    
      return questionsArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
      // return questionsArray = [question0];
    }
    function startQuestionTimer(){
      timeProgress.stop();
      questionTimer = setTimeout(questionTimeRanOut,timeQuestion);
      timeProgress.start(); 
    }
    
    function startSummaryTimer(){
      timeProgress.stop();
      player.isWaiting = !player.isWaiting;
      if (questionsArray.length > 0){
       summaryTimer = setTimeout(setQuestionAnswers,timeSummary);
      }
      else{
        summaryTimer = setTimeout(endGame,timeSummary);
      }
      timeProgress.start();
    }
    
    function stopQuestionTimer(){
      clearTimeout(questionTimer);
    }
    
    function stopSummaryTimer(){
      clearTimeout(summaryTimer);
    }
    
    function questionTimeRanOut(){
      
      currentQuestion.isTimeUp = !currentQuestion.isTimeUp;
      console.log("time ran out!" + currentQuestion.isTimeUp + currentQuestion.userAnswer)
      setUserSelection();
    }
    
    function setQuestionAnswers(){
      removeQuestionAnswers();
      if (player.isWaiting){
        player.isWaiting = !player.isWaiting;
      }
      selectRandomQuestion();
      displayQuestion();
      displayAnswers();
      startQuestionTimer();
    }
    
    
    function selectRandomQuestion(){
      var randomIndex = Math.floor(Math.random()*questionsArray.length);
      currentQuestion = questionsArray[randomIndex];
    
      // remove question from array.  
      questionsArray.splice(randomIndex,1);
    }
    
    
    function displayQuestion(){
    var mainQuestionColumn = $("<div></div>");
      mainQuestionColumn.attr({
        class: "col-md-12",
        id: "questionColumn"
      });
    
      var questionRowDiv = $("<div></div>");
      questionRowDiv.attr({
        class:"row",
        id:"individualQuestionRow"
      });
    
      var firstColumnDiv = $("<div></div>");
      firstColumnDiv.attr({
        class: "col-md-3 question"
      });
    
      var questionColumnDiv = $("<div></div>");
      questionColumnDiv.attr({
        class: "col-md-6 question",
        id: "individualQuestionColumn"
      });
    
      var questionText = $("<h2></h2>");
      questionText.text(currentQuestion.question);
    
      questionText.appendTo(questionColumnDiv);
      firstColumnDiv.appendTo(questionRowDiv);
      questionColumnDiv.appendTo(questionRowDiv);
      questionRowDiv.appendTo(mainQuestionColumn);
      mainQuestionColumn.appendTo("#questionRow");
    }
    
    function displayAnswers(){
      var mainAnswersColumn = $("<div></div>");
      mainAnswersColumn.attr({
        class: "col-md-12",
        id: "answersColumn"
      });
    
      for (i = 0; i < currentQuestion.answers.length - 1; i++){
        var answersRowDiv = $("<div></div>");
        answersRowDiv.attr({
          class: "row",
          id: "answerRow" + i
        })
    
        var firstColumnDiv = $("<div></div>");
        firstColumnDiv.attr({
          class: "col-md-3",
          id: "firstColumn" + i
        });
    
        var secondColumnDiv = $("<div></div>");
        secondColumnDiv.attr({
          class: "col-md-3",
          id: "secondColumn" + i
        });
        
        var answersColumnDiv = $("<div></div>");
        answersColumnDiv.attr({
          class: "col-md-6 answers",
          id: "answer" + i
        });
        var answersText = $("<h2></h2>"); 
        // answersText.text(currentQuestion.answers[i]);
    
        var answerButton = $("<button></button>");
        answerButton.attr({
          class: "answersButtons",
          id: "answerButton" + i
        })
        answerButton.text(currentQuestion.answers[i]);
    
        // answersText.appendTo(answersColumnDiv);
        answerButton.appendTo(answersColumnDiv);
        firstColumnDiv.appendTo(answersRowDiv);
        answersColumnDiv.appendTo(answersRowDiv);
        secondColumnDiv.appendTo(answersRowDiv);
        answersRowDiv.appendTo(mainAnswersColumn);
        mainAnswersColumn.appendTo("#answersRow");
      };
    
      $('html, body').animate({
          scrollTop: $("#answerButton3").offset().top
    }, 2000);
    }
    
    function userSelection(i){
      currentQuestion.userAnswer = currentQuestion.answers[i];
    }
    
    function checkAnswer(){
      if (currentQuestion.correctAnswer == currentQuestion.userAnswer){
        currentQuestion.isCorrect = !currentQuestion.isCorrect;
        player.numberCorrect++;
      }
      else{
        player.numberIncorrect++;
      }
      console.log(currentQuestion);
    }
    
    function collectGameStatus(){
      gameStatus.push(currentQuestion);
      console.table(gameStatus);
    }
    
    function setUserSelection(){
      checkAnswer();
      collectGameStatus();
      stopQuestionTimer();
      summarizeQuesiton();
      displaySummaryQuestion();
      startSummaryTimer(); 
    }
    
    function summarizeQuesiton(){
      if (currentQuestion.isCorrect){
        $(".modal-title").text("Good Job! You answered correctly!");
      } 
      else if(!currentQuestion.isCorrect && !currentQuestion.isTimeUp){
        $(".modal-title").text("Wrong answer... The correct answer is:")
      }
      else if(currentQuestion.isTimeUp){
        $(".modal-title").text("Time's Up!")
      }
      $("#correctAnswer").text(currentQuestion.correctAnswer);
      $(".picture").attr("src",currentQuestion.picture);
      $("#answerExplanation").text(currentQuestion.answerExplanation);
    }
    
    function displaySummaryQuestion(){
      $("#myModal").modal("show");  
      // $("#startGameButton").show();
    
    }
    
    function displayFinalSummary(){
      $("#startGameButton").show();
      $("#pressStartText").show();
      var summaryColumn = $("<div></div>");
      summaryColumn.addClass("col-md-12");
      summaryColumn.attr("id", "summaryColumn");
    
      var questionsCorrectRow = $("<div></div>");
      questionsCorrectRow.addClass("col-md-12");
      questionsCorrectRow.attr("id", "questionsCorrectRow");
    
      var questionsCorrectColumn = $("<div></div>");
      questionsCorrectColumn.addClass("col-md-12");
      questionsCorrectColumn.attr("id", "questionsCorrect");
      questionsCorrectText = $("<h2></h2>");
    
      questionsCorrectText.text("Number of questions correct: " + player.numberCorrect);
    
      questionsCorrectText.appendTo(questionsCorrectColumn);
      questionsCorrectColumn.appendTo(questionsCorrectRow);
      questionsCorrectRow.appendTo(summaryColumn);
    
      var questionsIncorrectRow = $("<div></div>");
      questionsIncorrectRow.addClass("col-md-12");
      questionsIncorrectRow.attr("id", "questionsIncorrectRow");
    
      var questionsIncorrectColumn = $("<div></div>");
      questionsIncorrectColumn.addClass("col-md-12");
      questionsIncorrectColumn.attr("id", "questionsIncorrect");
      questionsIncorrectText = $("<h2></h2>");
    
      questionsIncorrectText.text("Number of questions incorrect: " + player.numberIncorrect);
    
      questionsIncorrectText.appendTo(questionsIncorrectColumn);
      questionsIncorrectColumn.appendTo(questionsIncorrectRow);
      questionsIncorrectRow.appendTo(summaryColumn);
      summaryColumn.appendTo("#summaryRow");
    }
    
    function endGame(){
        removeQuestionAnswers();
        displayFinalSummary();
        console.log("game is over");
        console.table(gameStatus);
        player.isPlaying = !player.isPlaying;
    }
    
    
    function removeQuestionAnswers(){
      $("#myModal").modal("hide");
      $("#questionColumn").remove();
      $("#answersColumn").remove();
    }
    
    $(document).on("click","#startGameButton", function(){
      $("#summaryColumn").remove();
      initialization();
      setQuestionAnswers();
      // startQuestionTimer();
      $("#startGameButton").hide();
      $("#pressStartText").hide();
    });
    
    $(document).on("click", ".answersButtons", function(){
      if (!player.isWaiting && player.isPlaying){
        console.log($(this).attr("id"));
        var selectedAnswer = $(this).attr("id");
        selectedAnswer = parseInt(selectedAnswer.charAt(12));
        userSelection(selectedAnswer);
        setUserSelection();
        console.log(selectedAnswer);
      }
    });
  



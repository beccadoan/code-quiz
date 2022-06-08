
// Initialize to first question
var questionNumber = 0;
var timeRemaining = 75000;

// grab elements from html
var timeRemainingEl = $("#remaining-time");
var resultsDivEl = $("#result-div");
var resultSpanEl = $("#result-here");
var startQuizBtnEl = $("#start-quiz");
var quizDescriptionEl = $("#quiz-description");
var questionHeaderEl = $("#question-here");
var mainContentEl = $("#main-content");
var viewHighScoresEl = $("#view-scores");
var scoreFormDivEl = $("#score-form-div");
var answerListGroupEl = $("#answers-here");
var submitButtonEl = $("#submit-btn");

// Quiz Questions and Answers
var quizData = {
    questions: ["Commonly used date types DO NOT include",
     "The condition in an if / else statement is enclosed with _____",
    "Arrays in JavaScript can be used to store _____",
    "String values must be enclosed with _____ when being assigned to variables",
    "A very useful tool used during development and debugging for printing content to the debugger is:"],
    answers: [["1. strings","2. booleans","3. alerts","4. numbers"],
    ["1. quotes","2. curly brackets","3. parentheses","4. square brackets"],
    ["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"],
    ["1. commas","2. curly brackets","3. quotes","4. parenthesis"],
    ["1. JavaScript","2. terminal/bash","3. for loops","4. console log"]],
    correctAnswers: [2,2,3,2,3]
}
// function begins when 'start quiz' is pressed
var startQuiz = function(){
    // initialize remaining time to 75s/ 75000ms
    timeRemaining = 75000;

    // hide start quiz button
    $(startQuizBtnEl).hide();

    // hide paragraph element describing quiz
    $(quizDescriptionEl).hide();

    // uncenter text in Header
    $(questionHeaderEl).text(quizData.questions[questionNumber]).removeClass("text-center")

    // starts an interval timer: runs the myTimer function every second, which decrements the time by 1
    let myVar = setInterval(myTimer, 1000); 
    
    // this function will be run once every second
    function myTimer() {

        // if time reaches 0, stop the interval timer, and set time remaining to 0 in case it goes negative
        // display results
        if (timeRemaining <= 0){
            clearInterval(myVar);
            $(timeRemainingEl).text("0");
            timeRemaining = 0;
            displayResults();
        // if time did not reach 0, display time remaining and subtract a second
        } else {
            $(timeRemainingEl).text((timeRemaining/1000).toString())
            timeRemaining-=1000;
        }
    }
    
    // create quiz questions and answers from quiz data element
    for (var i = 0; i < quizData.answers[0].length; i++){
        // create list element
        var answerListEl = $("<li></li>");
        // create button element with id of answer-0, answer-1, etc, depending on which answer it is
        var answerBtnEl = $("<button></button>").attr("id", "answer-"+i.toString()).addClass("btn answer-btn");
        // put the answer in the button
        $(answerBtnEl).text(quizData.answers[questionNumber][i]);
        // append list item with button
        answerListEl.append(answerBtnEl);
        // append newest button list item to the original unordered list
        answerListGroupEl.append(answerListEl);
    }
 
    // when user clicks on an answer button
    $(answerListGroupEl).on("click","button", function(){
        // display whether it was correct or not
        rightOrWrong(this);
        // if you aren't on the last question, display the next question
        if (questionNumber<quizData.questions.length-1){
            nextQuestion();
        // if you are on the last question, display the result
        } else {
            displayResults();
        }
    })

    function nextQuestion(){
        // increment question number
        questionNumber++;

        // update question to next question
        $(questionHeaderEl).text(quizData.questions[questionNumber])
        // update all answer buttons with  new answers
        for (var i = 0; i < quizData.answers[questionNumber].length; i++){
            $("#answer-"+i.toString()).text(quizData.answers[questionNumber][i]);
        }
    }

    function rightOrWrong(element){
        // display element from hidden
        resultsDivEl.show();

        // check the answer element chosen against the correct answer in the quiz date
        // if it's correct, display 'correct'
        if (parseInt($(element).attr('id').replace("answer-","")) === quizData.correctAnswers[questionNumber]){
            $(resultSpanEl).text("Correct");
        // if the answer is incorrect, display 'wrong' and subtract 20s from the timer
        } else {
            $(resultSpanEl).text("Wrong");
            timeRemaining-=20000;
        }
    }
    // displays score and let's user input info to save
    function displayResults() {
        $(answerListGroupEl).hide();
        $(scoreFormDivEl).show();
        $(questionHeaderEl).text("All Done!")
        $(quizDescriptionEl).text("Your final score is "+(timeRemaining/1000).toString()).show();
        clearInterval(myVar);

    }
}

// view the saved high scores
var viewHighScores = function(){
    console.log("view high scores here");
}

// when "start quiz" button is clicked
$(startQuizBtnEl).on("click", function(){
    startQuiz();
})

// view the saved high scores when the 
$(viewHighScoresEl).on("click", function(){
    viewHighScores();
})

$(submitButtonEl).on("click", function(){
    console.log("my function logs!");
})
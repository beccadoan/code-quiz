
// Initialize to first question
var questionNumber = 0;

var resultsDivEl = $("<div></div>").addClass("final-result");
var resultSpanEl = $("<span></span>").attr('id',"result-here");

// Quiz Questions and Answers
var quizData = {
    questions: ["Commonly used date types DO NOT include",
     "The condition in an if / else statement is enclosed with _____",
    "Arrays in JavaScript can be used to store _____",
    "String values must be enclosed with _____ when being assigned to variables",
    "A very useful tool used during development and debugging for printing content to the debugger is:"],
    answers: [["1. strings","2. booleans","3. alerts","4. numbers"],
    ["1. quotes","2. curly brackets","3. parentheses","4. square brackets"],
    ["1. numbers and strings","other arrays","booleans","all of the above"],
    ["1. commas","2. curly brackets","3. quotes","4. parenthesis"],
    ["1. JavaScript","2. terminal/bash","3. for loops","4. console log"]],
    correctAnswers: [2,2,3,2,3]
}


var startQuiz = function(){
    // remove start quiz button
    $("#start-quiz").remove();

    // remove paragraph element describing quiz
    $("#quiz-description").remove();

    // change text in Header
    $("#question-here").text(quizData.questions[questionNumber]).removeClass("text-center")

    var answerDivEl = $("<div></div>").attr("id", "answers-here");
    var answerListGroupEl = $("<ol></ol>")

    for (var i = 0; i < quizData.answers[0].length; i++){
        var answerListEl = $("<li></li>");
        var answerBtnEl = $("<button></button>").attr("id", "answer-"+i.toString()).addClass("btn answer-btn");
        $(answerBtnEl).text(quizData.answers[questionNumber][i]);
        answerListEl.append(answerBtnEl);
        answerListGroupEl.append(answerListEl);
    }
    $(answerDivEl).append(answerListGroupEl);
    
    $('#main-content').append(answerDivEl);
    
    $("#answers-here").on("click","button", function(){
        rightOrWrong(this);
        if (questionNumber<quizData.questions.length-1){
            nextQuestion();
        } else {
            displayResults();
        }
    })

    function nextQuestion(){
        questionNumber++;
        $("#question-here").text(quizData.questions[questionNumber])
        for (var i = 0; i < quizData.answers[questionNumber].length; i++){
            $("#answer-"+i.toString()).text(quizData.answers[questionNumber][i]);
        }
    }

    function rightOrWrong(element){
        if(questionNumber === 0) {
            
            resultsDivEl.append(resultSpanEl);
            $('#main-content').append(resultsDivEl);
        }
    
        if (parseInt($(element).attr('id').replace("answer-","")) === quizData.correctAnswers[questionNumber]){
            $(resultSpanEl).text("Correct");
            console.log("correct");
        } else {
            $(resultSpanEl).text("Wrong");
            console.log("wrong");
        }
    }

    function displayResults() {
        console.log("You did so good!!");
    }
}

// when "start quiz" button is clicked
$("#start-quiz").on("click", function(){
    startQuiz();
})


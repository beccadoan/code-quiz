
// Initialize to first question
var questionNumber = 0;

// Quiz Questions and Answers
var quizDate = {
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
    $("#question-here").text("Question 1").removeClass(".text-center")

    var answerDivEl = $("<div></div>").attr("id", "answers-here");
    var answerListGroupEl = $("<ol></ol>")

    for (var i = 0; i < quizDate.answers[0].length; i++){
        var answerListEl = $("<li></li>");
        var answerBtnEl = $("<button></button>").attr("id", "answers-here-"+i.toString()).addClass("btn answer-btn");
        $(answerBtnEl).text(quizDate.answers[questionNumber][i]);
        answerListEl.append(answerBtnEl);
        answerListGroupEl.append(answerListEl);
    }
    $(answerDivEl).append(answerListGroupEl);
    
    $('#main-content').append(answerDivEl);
    
    return
}




// when "start quiz" button is clicked
$("#start-quiz").on("click", function(){
    startQuiz();
})

// when an answer button is clicked
$("#answers-here-0").on("click", function(){
    console.log("clicked")
})


// Initialize to first question
var questionNumber = 0;

// Quiz Questions and Answers
var quizDate = {
    questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
    answers: [["Question 1","Question 1","Question 1","Question 1"],["A1","A2","A3","A4"],["A1","A2","A3","A4"],["A1","A2","A3","A4"]],
    correctAnswers: [0,4,1,2]
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

    for (var i = 0; i < quizDate.questions.length; i++){
        var answerListEl = $("<li></li>");
        var answerBtnEl = $("<button></button>").attr("id", "answers-here-"+i.toString()).addClass("btn answer-btn");
        $(answerBtnEl).text(quizDate.answers[questionNumber][i]);
        answerListEl.append(answerBtnEl);
        answerListGroupEl.append(answerListEl);
    }
    $(answerDivEl).append(answerListGroupEl);
    
    $('#main-content').append(answerDivEl);

   



}




// when "start quiz" button is clicked
$("#start-quiz").on("click", function(){
    startQuiz();
})

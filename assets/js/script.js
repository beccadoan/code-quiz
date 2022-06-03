var quizDate = {
    questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
    answers: [["A1","A2","A3","A4"],["A1","A2","A3","A4"],["A1","A2","A3","A4"],["A1","A2","A3","A4"]],
    correctAnswers: [0,4,1,2]
}


var startQuiz = function(){
    //initialize to first question
    var questionNumber = 0;
    // remove start quiz button
    $("#start-quiz").remove();

    // remove paragraph element describing quiz
    $("#quiz-description").remove();

    // change text in Header
    $("#question-here").text("Question 1").removeClass(".text-center")

    var answerDivEl = $("<div></div>").addAttr("id", "answers-here");
    var answerListGroupEl = $("<ol></ol>")
    spanEl.text("My span el");
    answerDivEl.append(spanEl);

    $('#main-content').append(answerDivEl);



}




// when "start quiz" button is clicked
$("#start-quiz").on("click", function(){
    startQuiz();
})

//Quiz
//-> score
// -> questions
// -> index
// -> getQuestion(index);
// -> checkOptionWithAnswer();
// -> isFinished();
// -----------------------------
// Question
//  -> text
//  -> choices
//  -> answer
//  -> isCorrectAnswer(choice)
//  -----------------------------
function Quiz(questions) {
    this.score = 0;
    this.questions = questions; 
    this.questionIndex = 0; 
}
  
  //Get me the Question by Index
Quiz.prototype.getQuestionByIndex = function () {
    return this.questions[this.questionIndex];
};
  
  //Verify the answer with option and goto next question.
Quiz.prototype.checkOptionWithAnswer = function (answer) {
    if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
};
  
  //Checks wether the questions got over or not.
Quiz.prototype.isFinished = function () {
    return this.questionIndex === this.questions.length;
};
  
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
  
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};
  
function showScores() {
    var quizElement = document.getElementById("quiz");
    var resPercentage = (quiz.score / questions.length) * 100;
    var result = `<h1> Result </h1>
        <h2 id='score'> Your Scores: ${quiz.score} and mark percentage is ${resPercentage}% </h2>`;
    quizElement.innerHTML = result;
}
  
function loadQuestions() {
    if (quiz.isFinished()) {
      showScores();
    } else 
    {
      // show question
      var questionElement = document.getElementById("question");
      var questionLoaded = quiz.getQuestionByIndex();
      questionElement.innerHTML = questionLoaded.text;
  
      //show options
      var choices = questionLoaded.choices;
      for (let idx = 0; idx < choices.length; idx++) 
      {
        var choiceElement = document.getElementById("choice" + idx);
        choiceElement.innerHTML = choices[idx];
  
        var btnElement = document.getElementById("btn" + idx);
        btnElement.onclick = () => 
        {
          quiz.checkOptionWithAnswer(choices[idx]);
          loadQuestions();
        };
      }
      showProgress();
    }
}
  
function showProgress() {
    var currQuestIndex = quiz.questionIndex + 1;
    var progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currQuestIndex} of ${quiz.questions.length}`;
}
  
var questions = [
    new Question(
      "Which of this is known as the Yoga Capital of India?",
      ["Varanasi, Uttar Pradesh", "Haridwar, Uttarakhand", "Rishikesh, Uttarakhand", "Dharamshala, Himachal Pradesh"],
      "Rishikesh, Uttarakhand"
    ),
    new Question(
      "What is India's Golden Quadrilateral?",
      ["A national highway", "A historic monument", "A Buddhist monastery", "None of the above"],
      "A national highway"
    ),
    new Question(
      "Which of these is a heritage & historical monument of Pink City-Jaipur?",
      ["Mehrangarh Fort", "Hawa Mahal", "Umaid Bhawan Palace", "Patwon Ki Haveli"],
      "Hawa Mahal"
    ),
    new Question(
      "By the banks of which Indian river is the tallest statue in the world located?",
      ["Ganga", "Brahmaputra", "Narmada", "Sutlej"],
      "Narmada"
    ),
    new Question(
      "Which of these cuisines is traditionally served on a banana leaf?",
      ["Rajasthani cuisine", "Kathiawadi Cuisine", "Awadhi cuisine", "Tamil cuisine"],
      "Tamil cuisine"
    ),
];
  
var quiz = new Quiz(questions);
loadQuestions();
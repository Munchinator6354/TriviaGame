// Make a function called startQuiz that gets called when the #startButton is clicked

var que1 = {"question": "Question #1 - How many members of the Istari are there?",
            "answer": 2,
            "options": ["a) 7","b) 4", "c) 5", "d) 16"]}
            
var que2 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}

var que3 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}

var que4 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}
            
var que5 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}

var que6 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}

var que7 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}

var que8 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}
            
var que9 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}

var que10 = {"question": "what is ",
            "answer": 1,
            "options": ["answer","answer2", "answer3", "answer4"]}            


var arrQue = [que1,que2,que3,que4,que5,que6,que7,que8,que9,que10]


for (var i = 0; i < arrQue.length; i++) {
  $("#questionsArea").append(i);
}



//$("#startButton").click(function(){
    //.html("The paragraph was clicked.");
//});





// Within startQuiz function have it grab the "#questionsArea" and overwrite what is there currently (the #startButton)

// Make a timer that starts counting down for 120 seconds from the onclick button event.

// Make the 120 second timer display text showing the timer count down at the top of the #questionsArea div.

// Beneath the 120 second timer, display a set of 10 questions

// Each question will have 4 possible answers (a, b, c, d). Make it so only 1 answer can be selected of the 4 at a time.

// Each answer will have a "bubble" next to it to click and mark it as the selected answer

// Make a button append beneath the 10 questions that says "Done"

// Create an endQuiz function that overwrites the "#questionsArea" div with
    //1) Amount of Correct Answers
    //2) Amount of Incorrect Answers
    //3) Amount of Questions Unanswered
// Make the endQuiz function get called when the timer reaches 0 OR if the client clicks the "#doneButton"





    

    
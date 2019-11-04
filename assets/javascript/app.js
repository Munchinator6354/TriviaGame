// // Make a function called startQuiz that gets called when the #startButton is clicked

// var que1 = {"question": "Question #1 - How many members of the Istari are there?",
//             "answer": 2,
//             "options": ["a) 7","b) 4", "c) 5", "d) 16"]}

// var que2 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}

// var que3 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}

// var que4 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}


// var que5 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}

// var que6 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}

// var que7 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}

// var que8 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}

// var que9 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}

// var que10 = {"question": "what is ",
//             "answer": 1,
//             "options": ["answer","answer2", "answer3", "answer4"]}            
// var arrQue = [que1,que2,que3,que4,que5,que6,que7,que8,que9,que10]
// for (var i = 0; i < arrQue.length; i++) {
//   $("#questionsArea").append(i);
// }
var timer;

var questions = [

    // ques1 is also the object but is your question you are going to display to the page,
    // correct answer is questions.ques1.correct

    // how to display the question
    // $('#display').html(questions.ques1.question)

    {
        question: 'what is your name',
        choices: ['tom', 'andy', 'john'],
        correct: "andy"
    },

    {
        question: 'what is your age',
        choices: ["20", "30", "40"],
        correct: "30"
    },

    {
        question: 'what is your favorite food',
        choices: ['apple', 'pear', 'banana'],
        correct: "pear"
    }




]

var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--
        $("#timerNumber").html(game.counter)
        if (game.counter === 0) {
            game.done();
        }
    },
    start: function () {

        timer = setInterval(game.countdown, 1000);
        $("#timerArea").append("<h2>Time Remaining: <span id='timerNumber'>30</span></h2>");
        $("#startButton").remove();

        for (i = 0; i < questions.length; i++) {
            $("#questionsArea").append(`<p>${questions[i].question}</p>`);

            for (j = 0; j < questions[i].choices.length; j++) {
                $("#questionsArea").append(`<input type="radio" name="question-${i}" value="${questions[i].choices[j]}"> 
                ${questions[i].choices[j]}`)
            }
            $("#questionsArea").append(`<p>----------------------------------------------</p>`)
        }
    },
    done: function () {
        var inputs = $("#questionsArea").children("input:checked")

        for (var i = 0; i < inputs.length; i++) {

            if ($(inputs[i]).val() === questions[i].correct) {

                game.correct++

            }
            else {
                game.incorrect++
            }
        }
        console.log(game.correct);
    },
    result: function () {

    }
}



$("#startButton").click(function () {
    game.start();
});


//make countdown method to start timer (it will append the timer to the html, also will start timer)
//also make condition method that checks the counter, and if it is === 0 will invoke the "done" function
//done function will stop timer and check user input for the choices
//append amount of correct and incorrect answers
//if users choice === the game.correct 0 1 or 2 which ever is right, increment the "correct" property by ++
//otherwise increment incorrect property ++
//append correct and incorrect answers to the html











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
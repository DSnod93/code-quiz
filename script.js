



// start timer when start button is clicked.....   79sec
// show next question after completing the first 
// if answered incorrectly subtract time from the clock
// when timer hits 0 or all questions are answered THEN
// game is over
// when game is over user can save initials and score
// store users initials and score



// Questions for quiz with choices and correct answers
var questions = [
    {
        question: 'Commonly used data types DO Not Include: ',
        choices: [
            'strings',
            'booleans',
            'alerts',
            'numbers'
        ],
        correct: 'alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed with ',
        choices: [
            'quotes',
            'curly brackets',
            'parenthesis',
            'square brackets'
        ],
        correct: 'parenthesis'
    },
    {
        question: 'Arrays in Javascript can be used to store ',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above'
        ],
        correct: 'all of the above'
    },
    {
        question: 'String values must be enclosed within _____   when being assigned to variables. ',
        choices: [
            'commas',
            'curly brackets',
            'quotes',
            'parenthesis'
        ],
        correct: 'quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is ',
        choices: [
            'JavaScript',
            'terminal/bash',
            'for loops',
            'console.log'
        ],
        correct: 'console.log'
    }
];


var score = 0;
var timeLeft = 0;
var timer;
var currentQuestion = 0;

// start countdown 
function startQuiz() {

    timeLeft = 79;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);

    nextQuestion();
}




// countdown ends
function endQuiz() {
    clearInterval(timer);

    var content = `
    <h2>All done!</h2>
    <p>Your final score is </p>
    <label for="initials">Enter initials:</label>
    <input type="text" id="name" placeholder="First and Last initial">
    <button onclick="setScore()">Set score</button>
    `
    document.getElementById("quizMain").innerHTML = content;
}





// loop through questions

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endQuiz();
        return;
    }

    var content = "<h2>" + questions[currentQuestion].question + "</h2>"

    for (var radioLoop = 0; radioLoop < questions[currentQuestion].choices.length; radioLoop++) {
        var radioCode = "<button onclick=\"[CORRECT]\">[CHOICE]</button>";
        radioCode = radioCode.replace("[CHOICE]", questions[currentQuestion].choices[radioLoop]);
        if (questions[currentQuestion].choices[radioLoop] == questions[currentQuestion].correct) {
            radioCode = radioCode.replace("[CORRECT]", "correct()");
        }
        else {
            radioCode= radioCode.replace("[CORRECT]", "incorrect()");
        }
        content += radioCode
    }
    document.getElementById("quizMain").innerHTML = content;
}





// if user choose wrong answer subtract 20secs from clock
function incorrect() {
    timeLeft -=20;
    nextQuestion();
}



// if user chooses right answer THEN increase score by 20pts
function correct() {
    score +=20
    nextQuestion();
}


// store the score on local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore();
}



// retrieve score from local storage
function getScore() {
var content = `
<h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("quizMain").innerHTML = content;
}




// clear score and name value in the local storage if user selects 'clear score'
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetQuiz();
}






// reset the quiz 
function resetQuiz() {
    clearInterval(timer);
    score = 0;
    currentQuestion = 0;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var content = `
    <h1>Coding Quiz Challenge</h1>
    <p>
    Try to answer the following code-related questions within the time limit. Keep in mind that incorrect
    answers will penalize your score/time by ten seconds!
    </p>
    <button onclick="startQuiz()">Start</button>`;

    document.getElementById("quizMain").innerHTML = content;
}
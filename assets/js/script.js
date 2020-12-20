



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

// start countdown 
function startQuiz() {

    timeLeft = 79;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft")

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}




// countdown ends
function endQuiz() {
    clearInterval(timer);

    var content = `
    <h2>All done!</h2>
    <p>Your final score is </p>
    <label for="initials">Enter initials:</label>
    <input type="text" id="name" placeholder="First and Last initial">
    `
    document.getElementById("quizMain").innerHTML = content;
}

//

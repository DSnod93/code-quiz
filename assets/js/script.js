// start timer when start button is clicked.....   79sec


// show next question after completing the first 
// if answered incorrectly subtract time from the clock
// when timer hits 0 or all questions are answered THEN
// game is over
// when game is over user can save initials and score
// store users initials and score

var questions = [
    {
        question: 'Commonly used data types DO Not Include: ',
        choices: [
            '1. strings',
            '2. booleans',
            '3. alerts',
            '4. numbers'
        ],
        correct: '3. alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed with ',
        choices: [
            '1. quotes',
            '2. curly brackets',
            '3. parenthesis',
            '4. square brackets'
        ],
        correct: '3. parenthesis'
    },
    {
        question: 'Arrays in Javascript can be used to store ',
        choices: [
            '1. numbers and strings',
            '2. other arrays',
            '3. booleans',
            '4. all of the above'
        ],
        correct: '4. all of the above'
    },
    {
        question: 'String values must be enclosed within    when being assigned to variables. ',
        choices: [
            '1. commas',
            '2. curly brackets',
            '3. quotes',
            '4. parenthesis'
        ],
        correct: '3. quotes',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is ',
        choices: [
            '1. JavaScript',
            '2. terminal/bash',
            '3. for loops',
            '4. console.log'
        ],
        correct: '4. console.log'
    }
];
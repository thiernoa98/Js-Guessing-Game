// Lesson 03.09 Start
// Guess the Mystery Number
// In this lesson we will write a number guessing program:

// First we need a few global variables.
let randNum = 0;
let playerGuess = 0; //the num guessed
let guessLeft = 7;

//the footer vars, games played and guessing average
let gamesPlayed = 0, guessAvg = 0, totalGuesses = 0;

// Next, get the DOM elements used for the game. 
const playBtn = document.getElementById('play-btn');
const guessBtn = document.getElementById('guess-btn');

//the footer spans for games played and guessed ave
const totGamesSpan = document.getElementById('tot-games-span');
const guessAvgSpan = document.getElementById('guess-avg-span');

// Have each button listen for its respective function to call when clicked.
playBtn.addEventListener('click', playGame);
guessBtn.addEventListener('click', evalGuess);

// get the "guess box" (number input box), which is also hidden by CSS on page load :
//the input is from the querySelector(), its used to get the html inputs
let guessInputBox = document.querySelector('input'); 
//console.log(guessInputBox);
// Get the h2 that displays the feedback:
const feedback = document.getElementById('feedback');

// Declare the playGame function, which runs when the player clicks the PLAY button. 
function playGame() {

    randNum = Math.ceil(Math.random() * 100);
    playBtn.style.display = 'none'; //hide the play btn onClick();
    console.log(randNum);
    //place evrything in the center for inline
    guessInputBox.style.display = 'inline';
    guessBtn.style.display = 'inline';
    feedback.style.display = 'inline-block';

    //reset
    // playerGuess = 0;
    // guessLeft = 7;
    // guessInputBox.value ;
    feedback.textContent = "Guess the mystery number from 1-100";
}

// The evalGuess function runs when the user clicks the GUESS button. This function gets the value from the input box and converts it to a real number using the Number() method.
function evalGuess() {
    totalGuesses ++; //each time we guess a num we increease by 1
    guessLeft --; //substtract each time they get it wrong

    //evaluate the guess button
    playerGuess = Number(guessInputBox.value);

    if (playerGuess < randNum) {
        feedback.textContent = `Your Guess is Too Low! try again ${guessLeft} tries left` 
    }else if(playerGuess > randNum){
        feedback.textContent = `Your Guess is Too HIGH! try again ${guessLeft} tries left`;
    }else{
        feedback.textContent = `Congrats! You guessed the right Number ${randNum}`;
        resetGame();
    }
    
    if(guessLeft == 0){
        feedback.textContent = `You're out of tries, please try again!`
        resetGame(); 
    }
}

function resetGame() {
    playerGuess = 0;
    guessLeft = 7;
    guessInputBox.value ;
    guessInputBox.style.display = 'none';
    guessBtn.style.display = 'none';
    playBtn.style.display = 'inline';
    playBtn.textContent = 'Play Again';
    //feedback.textContent = "Guess the mystery number from 1-100";

    //update the game once the game over
    gamesPlayed ++; //gameover, increase the game played
    guessAvg = totalGuesses /gamesPlayed;

    totGamesSpan.textContent = gamesPlayed;
    guessAvgSpan.textContent = guessAvg;
}
/* 
- if the guess is too low, user gets feedback (too LOW) and guesses again
- else if the guess is too low, user gets feedback (too HIGH) and guesses again 
- else guess matches mystery number, so user is congratulated and GUESS button is replaced by PLAY AGAIN button
- user gets 7 guesses, which count down and are displayed with each guess
- when the user gets it right, the resetGame()
 function is called
 */


// The resetGame function is called when the user guesses correctly. The function restores all the settings as they are on page load. 



   

// Guess the Mystery Number

let randNum = 0;
let playerGuess = 0; //the num guessed
let guessLeft = 7;

let gamesPlayed = 0, guessAvg = 0, totalGuesses = 0;
 
const playBtn = document.getElementById('play-btn');
const guessBtn = document.getElementById('guess-btn');

const totGamesSpan = document.getElementById('tot-games-span');
const guessAvgSpan = document.getElementById('guess-avg-span');

playBtn.addEventListener('click', playGame);
guessBtn.addEventListener('click', evalGuess);


let guessInputBox = document.querySelector('input'); 

//hoisting
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

    feedback.textContent = "Guess the mystery number from 1-100";
}

//evaluate the game
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

//reset 
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

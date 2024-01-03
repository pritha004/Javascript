let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const prevGuesses=document.querySelector(".guesses");
let remainingGuess=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement('p');

let prevGuess=[];
let numGuesses=0;

let playGame=true;

if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess<1){
        alert("Please enter a number greater than 0");
    }else if(guess>100){
        alert("Please enter a number less than equal to 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuesses===9){
            displayGuess(guess);
            displayMsg(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess===randomNumber){
        displayMsg(`You guessed it right`);
        endGame();
    }else if(guess<randomNumber){
        displayMsg(`Number is TOOO low`);
    }else if(guess>randomNumber){
        displayMsg(`Number is TOOO high`);
    }
}

function displayGuess(guess){
    userInput.value=``;
    prevGuesses.innerHTML+=`${guess} `;
    numGuesses++;
    remainingGuess.innerHTML=`${10-numGuesses}`;
}

function displayMsg(msg) {
    lowOrHi.innerHTML=`<h3>${msg}</h3>`
}

function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','');
    submit.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame(); 
}

function newGame() {
    const newGameBtn=document.querySelector("#newGame");
    newGameBtn.addEventListener("click",(e)=>{
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuesses=0;
        prevGuesses.innerHTML='';
        remainingGuess.innerHTML=`${10-numGuesses}`;
        userInput.removeAttribute("disabled");
        submit.removeAttribute("disabled");
        lowOrHi.innerHTML=``;
        startOver.removeChild(p);
        playGame=true;
    })
}


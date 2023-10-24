
const options = ['rock', 'paper', 'scissor']

function getComputerChoice(a) {
  const randomChoiceIndex = Math.floor(Math.random() * options.length)
  const randomChoice = options[randomChoiceIndex];
    return randomChoice;
}

// casses where the player will win : 
// rock ---- sicsser 
// paper -- rock 
// sicosser -- paper 

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if((playerSelection == 'rock'&& computerSelection == "scissor")
    || (playerSelection == 'paper' && computerSelection == 'rock')
    || (playerSelection == 'scissor' && computerSelection == 'paper')
    ){
        return "player";
    } 
    else {
        return "computer";
    }
}



function playRound(playerSelection, computerSelection) {
    const result = checkWinner (playerSelection, computerSelection); 
    if( result == 'Tie') {
        return "it's a Tie!"
    } 
    else if (result == "player") {
        return `your ${playerSelection} has crushed the computer ${computerSelection}`
    } 
    else {
        return `the computer ${computerSelection} has crushed your ${playerSelection}`
    }
    
}

function getPleyerChoice () {
    let validatedInput = false; 
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissors"); 
        if(choice == null ) {
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true; 
            return choiceInLower; 
        }

        
    }
}



function game() {
    let scorePlayer = 0; 
    let scoreComputer = 0; 
    console.log('welcome!'); 
    for(let i = 0; i < 5 ; i++){
        const playerSelection = getPleyerChoice(); 
        const computerSelection = getComputerChoice(); 
        console.log(playRound(playerSelection, computerSelection)); 
        console.log("----------------------------");
        if (checkWinner(playerSelection, computerSelection) == "player") {
            scorePlayer ++; 
        } else if (checkWinner(playerSelection, computerSelection) == "computer") {
            scoreComputer++; 
        }
    }
    console.log("game Over");

    if (scorePlayer > scoreComputer) {
         console.log('player was the winner');
        
    } else if (scorePlayer < scoreComputer ) {
        console.log('computer has won');
    } else {
        console.log('its a tie ');
    }
}


game() ; 
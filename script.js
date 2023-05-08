
const choice = ['rock', 'paper', 'scissor']

function getComputerChoice(a) {
  const randomChoiceIndex = Math.floor(Math.random() * choice.length)
  const randomChoice = choice[randomChoiceIndex]
    return randomChoice;
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    // if a and b are equal
    // print draw
    // else if a < b 
    // b is the winner 
    // else a is the winner 
    // rock vs rock--------------
    // paper vs paper --------
    // scissor vs scissor ----------
    // rock vs paper ----------
    // rock vs scissor ---------
    // paper vs rock -----
    // scissor vs paper
    // paper vs scissor 
    // scissor vs rock 


    if (playerSelection == computerSelection) {
       return console.log("DRAW");
    }else if (playerSelection == 'rock' && computerSelection == "paper") {
        return  console.log('the computer paper has beaten your rock ');
    }else if (playerSelection == 'rock' && computerSelection== 'scissor') {
        return console.log("Your rock has crushed the computer scissor ");
    }else if (playerSelection == 'paper' && computerSelection== 'rock') {
        return console.log("Your paper has crushed computer rock");
    }else if (playerSelection == 'scissor' && computerSelection== 'paper') {
        return  console.log("player scissor has won");
    } else {
        return console.log("a win for the computer ")
    }

  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
 


  console.log(getComputerChoice(choice))
  console.log(playRound(playerSelection, computerSelection))
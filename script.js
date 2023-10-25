
let result;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const buttonBox = document.querySelector(".selections");
const buttons = document.querySelectorAll('button');
const roundsBox = document.querySelector(".rounds");
const selection = ["ROCK", "PAPER", "SCISSORS"];
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#compScore");



buttons.forEach((button) => {

  button.addEventListener('click', () => {
    playerSelection = button.textContent;
    playRound(computerSelection());
    game();
  });
});

const computerSelection = function () {
  return selection[Math.floor(Math.random() * 3)];
};



function playRound(computerSelection) {
  const h1 = document.createElement("h1");
  const oneRound = document.createElement("div");
  oneRound.classList.add("oneRound");
  let playerPic = new Image(45, 45);
  let compPic = new Image(45, 45);
  playerPic.src = `./images/${playerSelection}.png`;
  compPic.src = `./images/${computerSelection}.png`;
  if (playerSelection == computerSelection) {
    h1.textContent = "DRAW";
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    h1.textContent = "WIN";
    playerScore += 1;
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    h1.textContent = "WIN";
    playerScore += 1;
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    h1.textContent = "WIN";
    playerScore += 1;
  } else {
    h1.textContent = "LOSE";
    computerScore += 1;
  }
  oneRound.appendChild(playerPic);
  oneRound.appendChild(h1);
  oneRound.appendChild(compPic);
  roundsBox.prepend(oneRound);
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
}



function game() {
  const finalResult = document.createElement("div");
  finalResult.classList.add("rounds");
  if (playerScore != 5 && computerScore != 5) {
    return
  } else if (playerScore == 5) {
    finalResult.textContent = "YOU WON! :)";
    finalResult.style.backgroundColor = "green";

  } else if (computerScore == 5) {
    finalResult.textContent = "YOU LOST! :(";
    finalResult.style.backgroundColor = "red";
  }
  roundsBox.prepend(finalResult);
  buttonBox.replaceWith(finalResult);
}
















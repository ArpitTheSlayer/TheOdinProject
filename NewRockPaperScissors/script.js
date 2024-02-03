function getComputerChoice() {
  let computerSelection = "";
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerSelection = "Rock";
      break;

    case 2:
      computerSelection = "Paper";
      break;

    case 3:
      computerSelection = "Scissors";
      break;
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  div.innerHTML += `<br>You chose ${playerSelection} while Computer chose ${computerSelection}.<br>`;
  if (playerSelection === computerSelection) {
    div.innerHTML += "It's a draw. Points to none.<br>";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    div.innerHTML += "You Win!<br>";
    playerScore++;
  } else {
    div.innerHTML += "You Lose!<br>";
    computerScore++;
  }
  para.textContent = `Player: ${playerScore} vs Computer: ${computerScore}`;
}

function gameOver() {
  buttons.forEach((button) => (button.disabled = true));
  div.innerHTML = `<br>You scored ${playerScore} points while Computer scored ${computerScore} points.<br>`;
  if (playerScore === 5) {
    div.innerHTML += "You won 5 times. So you won the game.<br><br>";
  } else {
    div.innerHTML += "Computer won 5 times. So you lost the game.<br><br>";
  }

  const playAgain = document.createElement("button");
  playAgain.textContent = "Play Again";
  div.appendChild(playAgain);
  playAgain.addEventListener("click", () => {
    div.innerHTML = "";
    computerScore = 0;
    playerScore = 0;
    buttons.forEach((button) => (button.disabled = false));
  });
}

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");
const para = document.querySelector("p");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
    if (!(playerScore < 5 && computerScore < 5)) {
      gameOver();
    }
  });
});

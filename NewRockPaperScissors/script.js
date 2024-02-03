function getComputerChoice() {
  let computerSelection = "";
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerSelection = "rock";
      break;

    case 2:
      computerSelection = "paper";
      break;

    case 3:
      computerSelection = "scissors";
      break;
  }
  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = "";
  while (true) {
    playerSelection = prompt("Enter your choice:").toLowerCase();
    if (
      !(
        playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors"
      )
    ) {
      console.log("Invalid choice. Choose again.");
    } else {
      break;
    }
  }
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  console.log(
    `You chose ${playerSelection} while Computer chose ${computerSelection}.`
  );
  if (playerSelection === computerSelection) {
    console.log("It's a draw. So let's have a rematch.");
    playRound(getPlayerChoice(), getComputerChoice());
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You Win!");
    playerScore++;
  } else {
    console.log("You Lose!");
    computerScore++;
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
  console.log(
    `You scored ${playerScore} points while Computer scored ${computerScore} points.`
  );
  if (playerScore === 5) {
    console.log("You won 5 times. So you won the game.");
  } else {
    console.log("Computer won 5 times. So you lost the game.");
  }
}

let computerScore = 0;
let playerScore = 0;

game();

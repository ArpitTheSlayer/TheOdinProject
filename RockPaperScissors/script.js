let player = "";
let computer = "";
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");

function playerChoice(pchoice) {
  section1.style.display = "none";
  imageSelector(pchoice, "pchoice");
  player = pchoice;
  computerChoice();
}

function computerChoice() {
  section2.style.display = "flex";
  let n = Math.floor(Math.random() * 3 + 1);
  let cchoice = "";
  switch (n) {
    case 1:
      cchoice = "Rock";
      break;
    case 2:
      cchoice = "Paper";
      break;
    case 3:
      cchoice = "Scissors";
      break;
  }

  imageSelector(cchoice, "cchoice");
  computer = cchoice;
  finalResult();
}

function imageSelector(choice, element) {
  let result = document.querySelector(`#${element}`);

  switch (choice) {
    case "Rock":
      result.src = "./images/rock.png";
      break;
    case "Paper":
      result.src = "./images/paper.png";
      break;
    case "Scissors":
      result.src = "./images/scissors.png";
      break;
  }
}

function finalResult() {
  section3.style.display = "block";

  let decision = document.querySelector("#result");

  if (player === computer) {
    decision.innerHTML = "You Almost Had It! It's a draw!";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    decision.innerHTML = "Congratulations! You Won!";
  } else {
    decision.innerHTML = "Better Luck Next Time! You lose!";
  }
}

function retry() {
  section1.style.display = "block";
  section2.style.display = "none";
  section3.style.display = "none";
}

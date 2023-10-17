function roll() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let dice = document.getElementById("dice");

  switch (randomNumber) {
    case 1:
      dice.src = "./images/dice_1.svg";
      dice.alt = "1";
      break;
    case 2:
      dice.src = "./images/dice_2.svg";
      dice.alt = "2";
      break;
    case 3:
      dice.src = "./images/dice_3.svg";
      dice.alt = "3";
      break;
    case 4:
      dice.src = "./images/dice_4.svg";
      dice.alt = "4";
      break;
    case 5:
      dice.src = "./images/dice_5.svg";
      dice.alt = "5";
      break;
    case 6:
      dice.src = "./images/dice_6.svg";
      dice.alt = "6";
      break;
  }
}

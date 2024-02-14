const displayResult = document.querySelector("#result");
const currentOperator = document.querySelector("#current-operator");
const currentOperand = document.querySelector("#current-operand");
const buttonContainer = document.querySelector("#button-container");
let previousValue = "";
let nextValue = "";
let result = 0;
let isEqualPressed = false;
const allPossibleKeysArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  ".",
  "=",
  "Delete",
  "Backspace",
];

buttonContainer.addEventListener("click", (e) => showInput(e.target));
addEventListener("keydown", (e) => keyboardInput(e));

function showInput(button) {
  if (displayResult.textContent.includes("D")) {
    previousValue = "";
    nextValue = "";
    isEqualPressed = false;
    displayResult.textContent = "";
    currentOperator.textContent = "";
    currentOperand.textContent = "";
  }
  if (!isEqualPressed && (button.id === "operand" || button.id === "dot")) {
    if (button.id === "dot" && !currentOperand.textContent.includes(".")) {
      currentOperand.textContent += button.textContent;
    } else if (button.id !== "dot") {
      currentOperand.textContent += button.textContent;
    }
  }
  if (
    button.id === "operator" &&
    isEqualPressed &&
    displayResult.textContent !== ""
  ) {
    isEqualPressed = false;
    currentOperator.textContent = button.textContent;
  } else if (button.id === "operator") {
    isEqualPressed = false;
    if (currentOperand.textContent !== "") {
      displayResult.textContent = currentOperand.textContent;
      operate(currentOperator);
      currentOperand.textContent = "";
    }
    currentOperator.textContent = button.textContent;
  } else if (
    button.id === "equal" &&
    displayResult.textContent !== "" &&
    currentOperand.textContent !== "" &&
    currentOperator.textContent !== ""
  ) {
    isEqualPressed = true;
    operate(currentOperator);
    currentOperator.textContent = "";
    currentOperand.textContent = "";
  }
  if (button.id === "clear") {
    previousValue = "";
    nextValue = "";
    isEqualPressed = false;
    displayResult.textContent = "";
    currentOperator.textContent = "";
    currentOperand.textContent = "";
  }
  if (button.id === "delete") {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);
  }
}

function keyboardInput(keyboardButton) {
  if (allPossibleKeysArray.includes(keyboardButton.key)) {
    buttonContainer.querySelectorAll("button").forEach((button) => {
      if (button.textContent === keyboardButton.key) {
        showInput(button);
      } else if (
        keyboardButton.key === "Backspace" &&
        button.textContent === "C"
      ) {
        showInput(button);
      }
    });
  }
}

function operate(button) {
  if (previousValue === "") {
    previousValue = currentOperand.textContent;
  } else {
    nextValue = currentOperand.textContent;
    switch (button.textContent) {
      case "+":
        result = add(+previousValue, +nextValue);
        break;
      case "-":
        result = subtract(+previousValue, +nextValue);
        break;
      case "*":
        result = multiply(+previousValue, +nextValue);
        break;
      case "/":
        result = divide(+previousValue, +nextValue);
        break;
    }
    if (!isFinite(result)) {
      displayResult.textContent = "Don't you know basic maths!";
      return;
    } else if (
      result.toString().includes(".") &&
      result.toString().split(".")[1].length > 5
    ) {
      result = result.toFixed(5);
    }
    previousValue = result;
    displayResult.textContent = result;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

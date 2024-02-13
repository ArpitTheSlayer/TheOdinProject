const displayResult = document.querySelector("#result");
const currentOperator = document.querySelector("#current-operator");
const currentOperand = document.querySelector("#current-operand");
const buttonContainer = document.querySelector("#button-container");
let previousValue = "";
let nextValue = "";
let result = 0;
let isEqualPressed = false;

buttonContainer.addEventListener("click", (e) => showInput(e.target));

function showInput(button) {
  if (
    !isEqualPressed &&
    (button.id === "operand" || button.id === "zero" || button.id === "dot")
  ) {
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
  } else if (button.id === "equal") {
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
    } else if (result.toString().split(".")[1].length > 5) {
      result = result.toFixed(5);
      previousValue = result;
      displayResult.textContent = result;
    } else {
      previousValue = result;
      displayResult.textContent = result;
    }
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

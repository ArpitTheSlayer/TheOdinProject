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

function operate(displayValue) {
  console.log(displayValue);
  let [a, operator, b] = displayValue.split(" ");
  a = +a;
  b = +b;
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b).toFixed(2);
  }
}

function showInput(button) {
  if (button >= 0 && button <= 9) {
    display.textContent += button;
  } else if (
    button === "+" ||
    button === "-" ||
    button === "*" ||
    button === "/"
  ) {
    display.textContent += ` ${button} `;
  } else if (button === "=") {
    displayValue = display.textContent;
    display.textContent = operate(displayValue);
  } else {
    display.textContent = "";
    displayValue = "";
  }
}

const display = document.querySelector("#display");
const buttonContainer = document.querySelector("#button-container");
let displayValue = "";

buttonContainer.addEventListener("click", (e) =>
  showInput(e.target.textContent)
);

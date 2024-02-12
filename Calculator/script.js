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
  let values = displayValue.split(" ");
  let a,
    operator,
    b,
    result = 0;
  for (let i = 0; i < values.length; i += 2) {
    if (i === 0) {
      [a, operator, b] = [values[i], values[i + 1], values[i + 2]];
    } else {
      [a, operator, b] = [result, values[i + 1], values[i + 2]];
    }
    a = +a;
    b = +b;
    switch (operator) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = subtract(a, b);
        break;
      case "*":
        result = multiply(a, b);
        break;
      case "/":
        result = divide(a, b);
        break;
    }
  }
  if (!isFinite(result)) {
    return "Don't you know basic maths!";
  }
  if (Math.floor(result) !== result) {
    result = result.toFixed(10);
  }
  if (values.at(-1) === "") {
    return `${result} ${values.at(-2)} `;
  }
  return result;
}

function showInput(button) {
  if (display.textContent.includes("D")) {
    display.textContent = "";
    displayValue = "";
  }
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
  } else if (button === "C") {
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

const container = document.querySelector("#container");
const gridSize = document.querySelector("#grid-size");
const randomColors = document.querySelector("#random-colors");
const pencilEffect = document.querySelector("#pencil-effect");
let isRandomColorOn = false;
let isPencilEffectOn = false;
let alphaValue = 0.1;

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  const subDiv = [];
  for (let j = 0; j < 16; j++) {
    subDiv[j] = document.createElement("div");
    div.appendChild(subDiv[j]);
  }
  container.appendChild(div);
}

let pixels = document.querySelectorAll("#container>div>div");
pixels.forEach((pixel) => displayPixel(pixel));

gridSize.addEventListener("click", makeGrid);

randomColors.addEventListener("click", () => {
  if (isRandomColorOn) {
    isRandomColorOn = false;
  } else {
    isRandomColorOn = true;
  }
});

pencilEffect.addEventListener("click", () => {
  if (isPencilEffectOn) {
    isPencilEffectOn = false;
  } else {
    isPencilEffectOn = true;
  }
});

function displayPixel(pixel) {
  pixel.addEventListener("mouseover", (e) => {
    if (isRandomColorOn) {
      e.target.style.backgroundColor = generateRandomColor();
    } else {
      e.target.style.backgroundColor = "red";
    }
    if (isPencilEffectOn) {
      e.target.style.backgroundColor = incrementAlphaOfColor();
      alphaValue += 0.1;
    } else {
      alphaValue = 0.1;
    }
  });
}

function makeGrid() {
  container.innerHTML = "";
  let number = 101;
  while (number > 100) {
    number = +prompt("Enter grid size:");
    if (number > 100) {
      alert("Grid size is too big! Grid size should be less than 100.");
    }
  }
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    const subDiv = [];
    for (let j = 0; j < number; j++) {
      subDiv[j] = document.createElement("div");
      div.appendChild(subDiv[j]);
    }
    container.appendChild(div);
    pixels = document.querySelectorAll("#container>div>div");
    pixels.forEach((pixel) => displayPixel(pixel));
  }
}

function generateRandomColor() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r},${g},${b})`;
}

function incrementAlphaOfColor() {
  return `rgba(255, 0, 0, ${alphaValue})`;
}

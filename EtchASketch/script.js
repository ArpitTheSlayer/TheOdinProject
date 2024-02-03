const container = document.querySelector("#container");

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

pixels.forEach((pixel) => {
  pixel.addEventListener(
    "mouseover",
    (e) => (e.target.style.backgroundColor = "red")
  );
});

const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("click", makeGrid);

function makeGrid() {
  container.innerHTML = "";

  let number = +prompt("Enter grid size:");
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    const subDiv = [];
    for (let j = 0; j < number; j++) {
      subDiv[j] = document.createElement("div");
      div.appendChild(subDiv[j]);
    }
    container.appendChild(div);

    pixels = document.querySelectorAll("#container>div>div");

    pixels.forEach((pixel) => {
      pixel.addEventListener(
        "mouseover",
        (e) => (e.target.style.backgroundColor = "red")
      );
    });
  }
}

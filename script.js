let container = document.querySelector(".container");
let k = 50;

let mouseDown = false;
let clicky = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
document.body.onclick = () => (clicky = true);

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.border = "2px solid red";
container.style.width = "1200px";
container.style.height = "1200px";

function generateBox() {
  for (let i = 1; i <= k; i++) {
    let boxColumn = document.createElement("div");
    boxColumn.classList.add("boxColumn");

    boxColumn.style.display = "flex";
    boxColumn.style.flexDirection = "row";

    container.appendChild(boxColumn);

    for (let j = 1; j <= k; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      let size = String(1200 / k) + "px";
      console.log(size);

      box.style.backgroundColor = "white";
      // box.style.maxWidth = size;
      // box.style.maxHeight = size;
      box.style.width = size;
      box.style.height = size;
      // box.style.border = "1px solid blue";

      boxColumn.append(box);
    }
  }
}
function draw() {
  const box = Array.from(document.querySelectorAll(".box"));

  box.forEach((b) => {
    b.addEventListener("mouseover", (event) => {
      if (clicky && mouseDown) {
        b.style.backgroundColor = "black";
      }
    });
  });
}

generateBox();
draw();

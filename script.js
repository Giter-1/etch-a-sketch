let container = document.querySelector(".container");
let k = 50;

container.style.display = "flex";
container.style.flexDirection = "column";

function generateBox() {
  for (let i = 1; i <= k; i++) {
    let boxColumn = document.createElement("div");
    boxColumn.classList.add("boxColumn");

    boxColumn.style.display = "flex";
    boxColumn.style.flexDirection = "row";
    boxColumn.style.borderRadius = "5px";

    container.appendChild(boxColumn);

    for (let j = 1; j <= k; j++) {
      let box = document.createElement("div");
      box.classList.add("box");

      box.style.backgroundColor = "white";
      box.style.maxWidth = "50px";
      box.style.maxHeight = "50px";
      box.style.width = "50px";
      box.style.height = "50px";
      box.style.border = "2px solid blue";

      boxColumn.append(box);
    }
  }
}

function draw() {
  const box = Array.from(document.querySelectorAll(".box"));

  box.forEach((b) => {
    b.addEventListener("mouseover", (event) => {
      b.style.backgroundColor = "black";
      console.log("this ran two");
    });
  });

  console.log("This ran three");
}

generateBox();
draw();

box.forEach((b) => {
  b.addEventListener("mouseover", (event) => {
    b.addEventListener("click", (event) => {
      b.style.backgroundColor = "black";
      console.log("this ran two");
    });
  });
});

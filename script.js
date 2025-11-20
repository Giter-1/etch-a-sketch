let container = document.querySelector(".container");
let k = 10;

container.setAttribute("style", "display: flex; flex-direction: column;");

function generateBox() {
  for (let i = 1; i <= k; i++) {
    let boxColumn = document.createElement("div");
    boxColumn.classList.add("boxColumn");

    boxColumn.setAttribute(
      "style",
      "display: flex; flex-direction: row; ; border: 2px solid red; border-radius: 5px;"
    );

    container.appendChild(boxColumn);

    for (let i = 1; i <= k; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute(
        "style",
        "background-color: green; max-width: 50px; max-height: 50px; width: 50px; height: 50px; border: 2px solid blue; border-radius: 5px;"
      );
      boxColumn.append(box);
    }
  }
}

function draw() {
  const box = document.querySelector(".box");
  box.addEventListener("click", (event) => {
    box.setAttribute("style", "background-color: black");
    console.log("this ran two");
  });
  console.log("This ran three");
}

generateBox();
draw();

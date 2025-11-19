let container = document.querySelector(".container");

container.setAttribute(
  "style",
  "display: flex; flex-direction: column; gap: 20px;"
);

function generateBox() {
  for (let i = 1; i <= 2; i++) {
    let boxColumn = document.createElement("div");
    boxColumn.classList.add("boxColumn");

    boxColumn.setAttribute(
      "style",
      "display: flex; flex-direction: row; padding: 20px; border: 2px solid red;"
    );

    container.appendChild(boxColumn);

    for (let i = 1; i <= 4; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute(
        "style",
        "background-color: green; padding: 30px; border: 2px solid blue;"
      );
      boxColumn.append(box);
      console.log("This ran");
    }
  }
}

generateBox();

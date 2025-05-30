const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //equally sized number of columns of same width
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`; //equally sized number of rows of same height

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "black";
    });

    container.appendChild(box); // add boxes inside container
  }
}

document.getElementById("NewGridBtn").addEventListener("click", () => {
  let size = prompt("Enter grid size (1-100):");
  size = Number(size);
  if (isNaN(size) || size < 1 || size > 100) { //validation
    alert("Invalid size");
    return;
  }
  createGrid(size);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  const boxes = container.querySelectorAll(".box");
  boxes.forEach(box => box.style.backgroundColor = "white");
});


createGrid(4); //defualt

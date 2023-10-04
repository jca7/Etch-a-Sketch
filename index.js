const topContainer = document.getElementById("container");
document.addEventListener("DOMContentLoaded", function () { // Adding rows to the container

  for (let i = 0; i < 16; i++) {
      const newRowDiv = document.createElement("div");
      newRowDiv.classList.add("rows");
      topContainer.appendChild(newRowDiv);
  }
  const rowContainer = document.querySelectorAll(".rows"); // selecting all the created rows
  for (let i = 0; i < rowContainer.length; i++) { // looping through EACH of the rows.
    const row = rowContainer[i];
    for (let j = 0; j < 16; j++) { // Creating squares for each of the 16 rows.  
      const newSquareDiv = document.createElement("div");
      newSquareDiv.classList.add("square");
      row.appendChild(newSquareDiv);
    }
  }
  const squares = document.querySelectorAll(".square"); // selecting all squares
  squares.forEach(square => square.addEventListener('mouseover', (event) => { // looping throguh each square and adding an eventListener with mouseover event
    event.target.style.backgroundColor = "purple";
  }));

});

document.addEventListener('click', askForNumber)

function askForNumber() { 

  let number = prompt("Change the number of squares to (Max - 100): ");
  if (number === null || isNaN(number) || number > 100) {
    alert("sorry that's too high of number");
    newSquares();

  } else {
    while (topContainer.firstChild) {
      topContainer.removeChild(topContainer.firstChild)
    }
    for (let i = 0; i < number; i++) {
      const newRowDiv = document.createElement("div");
      newRowDiv.classList.add("rows");
      topContainer.appendChild(newRowDiv);
     }
    const rowContainer = document.querySelectorAll(".rows"); // selecting all the created rows
    for (let i = 0; i < rowContainer.length; i++) { // looping through EACH of the rows.
      const row = rowContainer[i];
      for (let j = 0; j < rowContainer.length; j++) { // Creating squares for each of the 16 rows.  
      const newSquareDiv = document.createElement("div");
      newSquareDiv.classList.add("square");
      row.appendChild(newSquareDiv);
      }
    }
    const squares = document.querySelectorAll(".square"); // selecting all squares
    squares.forEach((square) => 
      square.addEventListener('mouseover', (event) => { // looping throguh each square and adding an eventListener with mouseover event
        event.target.style.backgroundColor = "purple";
      }));
    }
}


function newSquares() {
  number = 16;
  while (topContainer.firstChild) {
    topContainer.removeChild(topContainer.firstChild)
  }
  for (let i = 0; i < number; i++) {
    const newRowDiv = document.createElement("div");
    newRowDiv.classList.add("rows");
    topContainer.appendChild(newRowDiv);
   }
  const rowContainer = document.querySelectorAll(".rows"); // selecting all the created rows
  for (let i = 0; i < rowContainer.length; i++) { // looping through EACH of the rows.
    const row = rowContainer[i];
    for (let j = 0; j < rowContainer.length; j++) { // Creating squares for each of the 16 rows.  
    const newSquareDiv = document.createElement("div");
    newSquareDiv.classList.add("square");
    row.appendChild(newSquareDiv);
    }
  }
  const squares = document.querySelectorAll(".square"); // selecting all squares
  squares.forEach((square) => 
    square.addEventListener('mouseover', (event) => { // looping throguh each square and adding an eventListener with mouseover event
      event.target.style.backgroundColor = "purple";
    }));
}
 
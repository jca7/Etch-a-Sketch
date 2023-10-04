document.addEventListener("DOMContentLoaded", function () { // Adding rows to the container
  const container = document.getElementById("container");
  for (let i = 0; i < 16; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("rows");
      container.appendChild(newDiv);
  }
  const rowContainer = document.querySelectorAll(".rows"); // selecting all the created rows
  for (let i = 0; i < rowContainer.length; i++) { // looping through EACH of the rows.
    const row = rowContainer[i];
    for (let j = 0; j < 16; j++) { // Creating squares for each of the 16 rows.  
      const newSquare = document.createElement("div");
      newSquare.classList.add("square");
      row.appendChild(newSquare);
    }
  }
  const squares = document.querySelectorAll(".square"); // selecting all squares
  squares.forEach(square => square.addEventListener('mouseover', (event) => { // looping throguh each square and adding an eventListener with mouseover event
    event.target.style.backgroundColor = "purple";
  }));

});






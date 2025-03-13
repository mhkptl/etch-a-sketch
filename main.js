const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#btn");


function sideSize() {

    let size = prompt("Enter a side length");
        
        if (size > 100) {
            size = 100;
        }
        else if (size < 1) {
            size = 1;
        }

    return size;
}

function createGrid() {
    
    let size = sideSize();

    // clear the previous grid: while the container has a firstChild, it will be deleted
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // create grid
    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("gridRow");

        for (let col = 0; col < size; col++){
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("gridSquare");
            rowDiv.appendChild(squareDiv);
        }

        container.appendChild(rowDiv);
    }
    
    // change color on hover
    const squares = document.querySelectorAll(".gridSquare");

    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {event.target.style.backgroundColor = "pink";});
    });

}

//sizeBtn.addEventListener("click", sideSize());
sizeBtn.addEventListener("click", () => createGrid());

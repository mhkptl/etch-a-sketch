const container = document.querySelector("#container");

for (let row = 0; row <= 16; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("gridRow");

    for (let col = 0; col <= 16; col++){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("gridSquare");
        rowDiv.appendChild(squareDiv);
    }

    container.appendChild(rowDiv);
}
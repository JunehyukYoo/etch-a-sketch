// Constants defining the size of the box is here
const length = 16;
const containerSize = 480;
let tileSize = containerSize / length;
let colorToggle = false;

let container = document.querySelector(".container");
container.setAttribute("style", `width: ${containerSize}px; height: ${containerSize}px;`);

// Add tile divs into the container div as children
for (let i = 0; i < length * length; i++) {
    let div = document.createElement("div");
    div.classList.add("tile");
    div.setAttribute("style", `width: ${tileSize}px; height: ${tileSize}px;`);
    container.appendChild(div);
}

let isDrawing = false;

// Function to color in cells only on mousedown and mouseover
function colorTile(e) {
    if (!isDrawing) return;

    // false = black, true = white
    if (!colorToggle) {
        e.target.style.backgroundColor = "black";
    } else {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}
// Add mousedown and mouseover event listeners for each tile
const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    tile.addEventListener("mousedown", (e) => {
        isDrawing = true;
        colorTile(e);
    });
    tile.addEventListener("mouseover", colorTile);
});

// Check for mouseup to stop drawing
document.addEventListener("mouseup", () => {
    isDrawing = false;
});

// Check clearing the page on button click
let btnErase = document.querySelector("#button-erase");
btnErase.addEventListener("click", () => {
    tiles.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});

// Check clearing the page on button click
let btnColor = document.querySelector("#button-color");
btnColor.addEventListener("click", () => {
        colorToggle = !colorToggle;
});
// Constants defining the size of the box is here
const length = 16;
const containerSize = 480;
let tileSize = containerSize / length;

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

// Function to color in cells on mousedown and mouseover
function colorTile(e) {
    if (!isDrawing) return;
    e.target.style.backgroundColor = "black";
}
// Add mousedown and mouseover event listeners for each time
const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    tile.addEventListener("mousedown", (e) => {
        isDrawing = true;
        colorTile(e);
    });
    tile.addEventListener("mouseover", colorTile);
});

// Check for mouseup
document.addEventListener("mouseup", () => {
    isDrawing = false;
});
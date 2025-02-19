// Constants defining the size of the box is here
const length = 16;
const containerSize = 480;
let tileSize = containerSize / length;

let container = document.querySelector(".container");
container.setAttribute("style", `width: ${containerSize}px; height: ${containerSize}px;`);

for (let i = 0; i < length * length; i++) {
    let div = document.createElement("div");
    div.classList.add("tile");
    div.setAttribute("style", `width: ${tileSize}px; height: ${tileSize}px;`);
    container.appendChild(div);

}
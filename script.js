let currentPlayer = "X";
const NUMBER_OF_ROWS = 3;
const truns = NUMBER_OF_ROWS ** 2;
let turnsCounter = 0;

const createBoard = () => {
    const container = document.querySelector(".container");
    const board = document.createElement("div");

    board.classList.add("board");

    for (let i = 0; i < NUMBER_OF_ROWS ** 2; i++) {
        const cellElementString = `<div class="cell"><span class="value"></span></div>`;
        const cellElement = document.createRange().createContextualFragment(cellElementString);

        cellElement.querySelector(".cell").onclick = (event) => console.log("You clicked me!");
        board.appendChild(cellElement);

        // set/change the value of --grid-rows css variable
        document.documentElement.style.setProperty("--grid-rows", NUMBER_OF_ROWS);
    }

    container.insertAdjacentElement("afterbegin", board);
}

createBoard();
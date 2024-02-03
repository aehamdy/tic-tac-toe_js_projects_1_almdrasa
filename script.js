let currentPlayer = "X";
const NUMBER_OF_ROWS = 3;
const truns = NUMBER_OF_ROWS ** 2;
let turnsCounter = 0;

/*
    let x = [
        ["X", "_", "_"],
        ["_", "X", "_"],
        ["_", "_", "X"],
    ]
*/

const cellClickHandler = (event, index) => {
    const cell = event.target;
    const row = Math.floor(index / NUMBER_OF_ROWS);
    const col = index % NUMBER_OF_ROWS;
    console.log({row});
    console.log({col});
}

const createBoard = () => {
    const container = document.querySelector(".container");
    const board = document.createElement("div");

    board.classList.add("board");

    for (let i = 0; i < NUMBER_OF_ROWS ** 2; i++) {
        const cellElementString = `<div class="cell"><span class="value"></span></div>`;
        const cellElement = document.createRange().createContextualFragment(cellElementString);

        cellElement.querySelector(".cell").onclick = (event) => cellClickHandler(event, i);
        board.appendChild(cellElement);

        // set/change the value of --grid-rows css variable
        document.documentElement.style.setProperty("--grid-rows", NUMBER_OF_ROWS);
    }

    container.insertAdjacentElement("afterbegin", board);
}

createBoard();
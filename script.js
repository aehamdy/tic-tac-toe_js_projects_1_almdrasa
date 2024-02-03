let currentPlayer = "X";
const NUMBER_OF_ROWS = 3;
const turns = NUMBER_OF_ROWS ** 2;
let turnsCounter = 0;

/*
    let x = [
        ["X", "_", "_"],
        ["_", "X", "_"],
        ["_", "_", "X"],
    ]
*/

let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
]

const getCellPlacement = (index, numberOfRows) => {
    const row = Math.floor(index / numberOfRows);
    const col = index % numberOfRows;

    return [row, col];
};

const checkWin = () => false;

const runWinEvent = () => false;

const runDrawEvent = () => false;

const drawMarkInCell = (cell, currentPlayer) => {
    cell.querySelector(".value").textContent = currentPlayer;
    cell.classList.add(`cell--${currentPlayer}`);
}

const cellClickHandler = (event, index) => {
    const cell = event.target;
    const [row, col] = getCellPlacement(index, NUMBER_OF_ROWS);

    if (board[row][col] === "_") {
        turnsCounter++;
        board[row][col] = currentPlayer;

        drawMarkInCell(cell, currentPlayer);

        if (checkWin()) {
            runWinEvent();
        } else {
            turnsCounter === turns && runDrawEvent();

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
};

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
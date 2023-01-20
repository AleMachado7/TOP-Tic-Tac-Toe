// create game board module
const gameBoard = (() => {
  let boardArray = new Array(9);
  const boardField = document.querySelector(".game-board");

  // create the board fields
  for (let i = 0; i < boardArray.length; i++) {
    const field = document.createElement("div");
    field.classList.add("board-field");
    field.setAttribute("data-index", `${i}`);
    boardField.appendChild(field);
  }

  const getBoard = () => boardArray;

  // display the markers
  const displayMarkers = () => {
    const fields = document.querySelectorAll(".board-field");
    fields.forEach((field) => {
      const fieldIndex = field.getAttribute("data-index");
      field.textContent = boardArray[fieldIndex];
    });
  };

  const setMarker = (playerMarker, fieldIndex) => {
    if (boardArray[fieldIndex] === undefined) {
      boardArray[fieldIndex] = playerMarker;
      displayMarkers();
    }
  };

  const clearBoard = () => {
    boardArray = new Array(9);
    displayMarkers();
  };

  return { getBoard, setMarker, clearBoard };
})();

const gameFlow = (() => {
  let currentPlayer = "X";
  const gameInfo = document.querySelector("#game-info");
  gameInfo.textContent = `It's player ${currentPlayer} turn.`;

  const changePlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameInfo.textContent = `It's player ${currentPlayer} turn.`;
  };

  const checkForWinner = () => {
    let roundWon = false;
    const board = gameBoard.getBoard();
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const cellA = board[condition[0]];
      const cellB = board[condition[1]];
      const cellC = board[condition[2]];

      if (cellA === undefined || cellB === undefined || cellC === undefined) {
        continue;
      }
      if (cellA === cellB && cellB === cellC) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      gameInfo.textContent = `${currentPlayer} wins!`;
    } else if (!board.includes(undefined)) {
      gameInfo.textContent = "It`s a draw!";
    } else {
      changePlayer();
    }
  };

  const fields = document.querySelectorAll(".board-field");
  fields.forEach((field) => {
    field.addEventListener("click", () => {
      const fieldIndex = field.getAttribute("data-index");
      gameBoard.setMarker(currentPlayer, fieldIndex);
      checkForWinner();
    });
  });
})();

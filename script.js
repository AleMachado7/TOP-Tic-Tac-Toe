// create game board module
const gameBoard = (() => {
  const boardArray = new Array(9);
  const boardField = document.querySelector(".game-board");

  // create the board fields
  for (let i = 0; i < boardArray.length; i++) {
    const field = document.createElement("div");
    field.classList.add("board-field");
    field.setAttribute("data-index", `${i}`);
    boardField.appendChild(field);
  }

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

  return { setMarker };
})();

const gameFlow = (() => {
  let currentPlayer = "X";
  const playerTurn = document.querySelector("#game-info");
  playerTurn.textContent = `It's player ${currentPlayer} turn.`;

  const changePlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerTurn.textContent = `It's player ${currentPlayer} turn.`;
  };

  const fields = document.querySelectorAll(".board-field");
  fields.forEach((field) => {
    field.addEventListener("click", () => {
      const fieldIndex = field.getAttribute("data-index");
      gameBoard.setMarker(currentPlayer, fieldIndex);
      changePlayer();
    });
  });
})();

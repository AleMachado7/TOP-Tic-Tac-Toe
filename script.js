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

  const setMarker = (playerMark) => {
    if (boardArray[fieldIndex] !== undefined) {
      console.log("This field is already taken");
    }
  };

  return { setMarker, displayMarkers };
})();

const player = (playerName, playerMarker) => {
  const setMarker = () => {
    const fields = document.querySelectorAll(".board-field");
  };

  return { playerName, setMarker };
};

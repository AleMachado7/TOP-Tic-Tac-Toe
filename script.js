// create game board module
const gameBoard = (() => {
  const marks = ["X", "X", "O", "X", "O", "O", "X", "O", "X"];

  const setMark = (mark) => {
    marks.push(mark);
  };

  const drawBoard = () => {
    const board = document.querySelector(".game-board");
    marks.forEach((mark) => {
      const newMark = document.createElement("div");
      newMark.textContent = mark;
      newMark.classList.add("mark");
      board.appendChild(newMark);
    });
  };

  return { setMark, drawBoard };
})();

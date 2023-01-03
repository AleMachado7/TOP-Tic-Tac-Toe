// create game board module
const gameBoard = (() => {
    const board = [];
    
    const setMark = (mark) => {
        board.push(mark);
    }

    const getBoard = () => {
        console.log(board);
    }

    return {setMark, getBoard}
})();
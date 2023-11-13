function square(x, y) {
  return [x, y];
}

function gameBoard() {
  let board = [];

  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      board.push(square(i, j));
    }
  }

  function has(square) {
    for(let value of board) {
      if(value[0] == square[0] && value[1] == square[1]) return true;
    }

    return false;
  }

  return {
    board,
    has
  }
}
let myBoard = gameBoard();
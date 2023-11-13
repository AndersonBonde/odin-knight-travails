function gameBoard() {
  let board = [];

  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      board.push([i, j]);
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

function knight(pos = [0, 0], step = 0) {
  let next = nextPossibleMoves(pos);

  function nextPossibleMoves(from) {
    let arr = [];
  
    arr.push([from[0] + 2, from[1] + 1]);
    arr.push([from[0] + 2, from[1] - 1]);
    arr.push([from[0] + 1, from[1] + 2]);
    arr.push([from[0] + 1, from[1] - 2]);
    arr.push([from[0] - 2, from[1] + 1]);
    arr.push([from[0] - 2, from[1] - 1]);
    arr.push([from[0] - 1, from[1] + 2]);
    arr.push([from[0] - 1, from[1] - 2]);
  
    return arr.filter((value) => myBoard.has(value));
  }

  return { pos, next, step };
}

function knightMoves(initial, final) {
  if(!Array.isArray(initial)) throw new Error('Initial value must be an array');
  if(!Array.isArray(final)) throw new Error('Final value must be an array');
  
  let queue = [];
  let levelOrder = [];
  let found = false;

  queue.push(knight(initial));

  while(!found) {
    let curr = queue.shift();
    levelOrder.push(curr.pos);
    for(let value of curr.next) {
      queue.push(knight(value, curr.step + 1));
    }

    if(curr.pos[0] == final[0] && curr.pos[1] == final[1]) {
      found = true;
      return curr.step;
    }
  }
}
let test = knightMoves([1, 2], [6, 7]);
console.log(`You made it in ${test} moves!`);

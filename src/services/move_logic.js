const logic = {
  getPawnMoves: function (color, [row, col]) {
    let moves = [];
    if (color === 'light') {
      moves.push([(row - 1), col]);
      if (row === 6) {
        moves.push([(row - 2), col]);
      }
    } else {
      moves.push([(row + 1), col]);
      if (row === 1) {
        moves.push([(row + 2), col]);
      }
    }
    // TODO: implement diagonal takes
    return moves;
  }
}

export default logic;


const logic = {
  getPawnMoves: function (color, [row, col]) {
    let moves = [];
    moves.push(this.moveUp(color, [row, col]));
    if (this.pawnOnStartingRow(color, row)) {
      moves.push(this.moveUp(color, [row, col], 2));
    }
    // TODO: implement diagonal takes
    return moves;
  },

  moveUp: function(color, [row, col], distance = 1) {
    if (color === 'light') {
      return [(row - distance), col];
    } else {
      return [(row + distance), col];
    }
  },

  pawnOnStartingRow: function(color, row) {
    return (
      (color === 'light' && row === 6) || 
      (color === 'dark' && row === 1)
    );
  }
}

export default logic;


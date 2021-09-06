import { Piece } from "../classes/piece";
import logic from "./move_logic";

const ALPHA = 'abcdefgh'.split('');

const helpers = {
  getAlphaLocation: function ([row, col]) {
    return (8 - row).toString().concat(ALPHA[col]);
  },
  
  getInitialBoard: function () {
    let board = Array(8).fill().map(() => Array(8));
    let index = 0;
    Array(8).fill(null).forEach((_, row) => {
      Array(8).fill(null).forEach((_, col) => {
        board[row][col] = INIT_BOARD[index];
        index++;
      });
    });
    return board;
  },
  
  moveEqualsLocation: function (move, location) {
    return (move[0] === location[0] && move[1] === location[1]);
  },
  
  getPossibleMoves: function (piece, [row, col]) {
    if (piece.getName() === 'pawn') {
      return logic.getPawnMoves(piece.getColor(), [row, col])
    }
    return [];
  }
}

export default helpers;

const INIT_BOARD = [
  new Piece('rook', 'dark'), new Piece('knight', 'dark'), new Piece('bishop', 'dark'), new Piece('queen', 'dark'), new Piece('king', 'dark'), new Piece('bishop', 'dark'), new Piece('knight', 'dark'), new Piece('rook', 'dark'),
  new Piece('pawn', 'dark'), new Piece('pawn', 'dark'), new Piece('pawn', 'dark'), new Piece('pawn', 'dark'), new Piece('pawn', 'dark'), new Piece('pawn', 'dark'), new Piece('pawn', 'dark'), new Piece('pawn', 'dark'),
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null,
  new Piece('pawn', 'light'), new Piece('pawn', 'light'), new Piece('pawn', 'light'), new Piece('pawn', 'light'), new Piece('pawn', 'light'), new Piece('pawn', 'light'), new Piece('pawn', 'light'), new Piece('pawn', 'light'),
  new Piece('rook', 'light'), new Piece('knight', 'light'), new Piece('bishop', 'light'), new Piece('queen', 'light'), new Piece('king', 'light'), new Piece('bishop', 'light'), new Piece('knight', 'light'), new Piece('rook', 'light'),
];
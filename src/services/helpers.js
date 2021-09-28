import { Piece } from "../classes/piece";
import { PIECES, COLORS } from "../config/constants"
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
    if (piece.getName() === PIECES.PAWN) {
      return logic.getPawnMoves(piece.getColor(), [row, col])
    }
    return [];
  }
}

export default helpers;

const INIT_BOARD = [
  new Piece(PIECES.ROOK, COLORS.DARK), new Piece(PIECES.KNIGHT, COLORS.DARK), new Piece(PIECES.BISHOP, COLORS.DARK), new Piece(PIECES.QUEEN, COLORS.DARK), new Piece(PIECES.KING, COLORS.DARK), new Piece(PIECES.BISHOP, COLORS.DARK), new Piece(PIECES.KNIGHT, COLORS.DARK), new Piece(PIECES.ROOK, COLORS.DARK),
  new Piece(PIECES.PAWN, COLORS.DARK), new Piece(PIECES.PAWN, COLORS.DARK), new Piece(PIECES.PAWN, COLORS.DARK), new Piece(PIECES.PAWN, COLORS.DARK), new Piece(PIECES.PAWN, COLORS.DARK), new Piece(PIECES.PAWN, COLORS.DARK), new Piece(PIECES.PAWN, COLORS.DARK), new Piece(PIECES.PAWN, COLORS.DARK),
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null,
  new Piece(PIECES.PAWN, COLORS.LIGHT), new Piece(PIECES.PAWN, COLORS.LIGHT), new Piece(PIECES.PAWN, COLORS.LIGHT), new Piece(PIECES.PAWN, COLORS.LIGHT), new Piece(PIECES.PAWN, COLORS.LIGHT), new Piece(PIECES.PAWN, COLORS.LIGHT), new Piece(PIECES.PAWN, COLORS.LIGHT), new Piece(PIECES.PAWN, COLORS.LIGHT),
  new Piece(PIECES.ROOK, COLORS.LIGHT), new Piece(PIECES.KNIGHT, COLORS.LIGHT), new Piece(PIECES.BISHOP, COLORS.LIGHT), new Piece(PIECES.QUEEN, COLORS.LIGHT), new Piece(PIECES.KING, COLORS.LIGHT), new Piece(PIECES.BISHOP, COLORS.LIGHT), new Piece(PIECES.KNIGHT, COLORS.LIGHT), new Piece(PIECES.ROOK, COLORS.LIGHT),
];
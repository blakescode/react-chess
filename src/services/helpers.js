import { Piece } from "../classes/piece";

const ALPHA = 'abcdefgh'.split('');

export function getAlphaLocation([row, col]) {
  return (8 - row).toString().concat(ALPHA[col]);
}

export function getInitialBoard() {
  let board = Array(8).fill().map(() => Array(8));
  let index = 0;
  Array(8).fill(null).forEach((_, row) => {
    Array(8).fill(null).forEach((_, col) => {
      board[row][col] = INIT_BOARD[index];
      index++;
    });
  });
  return board;
}

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
const ALPHA = 'abcdefgh'.split('');

export function getAlphaLocation([row, col]) {
  return (8 - row).toString().concat(ALPHA[col]);
}

export function getPieceURL([row, col]) {
  
}

export function getInitialBoard() {
  // TODO: return array of initial pieces (starting locations etc..)

  return [];
}
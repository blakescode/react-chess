const ALPHA = 'abcdefgh'.split('');

export function getAlphaLocation(row, col) {
  return (8 - row).toString().concat(ALPHA[col]);
}
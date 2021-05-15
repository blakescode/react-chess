import { getAlphaLocation } from "./helpers";

export function handleClick([row, col]) {
  let alphaLocation = getAlphaLocation([row, col]);
  alert(alphaLocation + ' clicked');
}
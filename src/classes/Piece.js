/* eslint-disable */
export class Piece {
  constructor(name, color) {
    this.name = name,
    this.color = color
  }

  getImageURL() {
    return process.env.PUBLIC_URL + '/assets/' + this.color + '-' + this.name + '.png';
  }

  getName() {
    return this.name;
  }

  getColor() {
    return this.color;
  }
}
export class Piece {
  constructor(name, color, [row, col]) {
    this.name = name,
    this.color = color,
    this.location = [row, col]
  }

  getImageURL() {
    return '../../public/assets/' + this.color + '-' + this.name;
  }
}
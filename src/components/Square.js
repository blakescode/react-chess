import './Square.css';
import React from 'react';
import { Piece } from '../classes/piece';

class Square extends React.Component {
  render() {
    let className = "square";
    let piece = new Piece();
    if (this.props.piece) {
      piece = this.props.piece;
    }
    className += (' ' + this.props.squareColor);
    return (
      <button 
        className={className}
        onClick={() => this.props.onClick(this.props.location)}
      >
        <img src={piece.getImageURL()}></img>
      </button>
    );
  }
}

export default Square
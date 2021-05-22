import './Square.css';
import React from 'react';

class Square extends React.Component {
  render() {
    let className = "square";
    className += (' ' + this.props.squareColor);
    if (this.props.isActive) {
      className += (' active');
    }
    return (
      <button 
        className={className}
        onClick={() => this.props.onClick(this.props.location)}
      >
        {this.displayPiece()}
        {this.displayPossible()}
      </button>
    );
  }

  displayPiece() {
    if (this.props.piece) {
      return (
        <img 
          className="piece"
          src={this.props.piece.getImageURL()}
          alt={this.props.piece.getName()}
        ></img>
      );
    }
  }

  displayPossible() {
    if (this.props.isPossibleMove) {
      if (this.props.piece) {
        return (
          <p>take</p>
        );
      }
      return (
        <p>move</p>
      );
    }
  }
}

export default Square
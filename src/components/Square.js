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
}

export default Square
import { getAlphaLocation, getInitialBoard, getPossibleMoves } from "../services/helpers";
import Board from './Board';
import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [getInitialBoard()], // each turn of history is a 2d Array of board pieces in correct positions
      moves: [],
      turnNumber: 0,
      whiteMovesNext: true,
      possibleMoves: []
    }
  }

  handleClick([row, col]) {
    let alphaLocation = getAlphaLocation([row, col]);
    const current = this.state.history[this.state.turnNumber];
    const piece = current[row][col];
    this.setState({
      possibleMoves: []
    });
    if (piece) {
      console.log('clicked '+ piece.getColor() + ' ' + piece.getName() + ' at position: ' + alphaLocation);
      if (this.state.whiteMovesNext && piece.getColor() === 'light') {
        this.setState({
          possibleMoves: getPossibleMoves(piece, [row, col])
        });
      }
    } else {
      console.log('clicked empty board at position: ' + alphaLocation);
    }
  }

  squareContainsPiece([row, col]) {
    const current = this.state.history[this.state.turnNumber];
    return Boolean(current[row][col]);
  }

  render() {
    const current = this.state.history[this.state.turnNumber];
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            boardState={current}
            possibleMoves={this.state.possibleMoves}
            onClick={(location) => this.handleClick(location)}
          />
        </div>
      </div>
    )
  }
}

export default Game
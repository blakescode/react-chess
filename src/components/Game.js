import helpers from "../services/helpers";
import Board from './Board';
import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [helpers.getInitialBoard()], // each turn of history is a 2d Array of board pieces in correct positions
      moves: [],
      turnNumber: 0,
      whiteMovesNext: true,
      possibleMoves: [],
      activePiece: null,
      activeLocation: null
    }
  }

  handleClick([row, col]) {
    let alphaLocation = helpers.getAlphaLocation([row, col]);
    const current = this.state.history[this.state.turnNumber];
    const piece = current[row][col];
    if (piece) {
      console.log('clicked '+ piece.getColor() + ' ' + piece.getName() + ' at position: ' + alphaLocation);
      if (this.isYourTurn(piece.getColor())) {
        this.setState({
          possibleMoves: helpers.getPossibleMoves(piece, [row, col]),
          activePiece: piece,
          activeLocation: [row, col]
        });
      }
    } else if (this.state.possibleMoves.find(move => helpers.moveEqualsLocation(move, [row, col]))) {
      console.log('valid move!');
      this.movePiece(this.state.activePiece, [row, col]);
      this.setState({
        possibleMoves: []
      });
    } else {
      console.log('clicked empty space at: ' + alphaLocation);
    }
  }

  movePiece(piece, [row, col]) {
    console.log('moving ' + piece.getName() + 
                ' from ' + helpers.getAlphaLocation(this.state.activeLocation) + 
                ' to ' + helpers.getAlphaLocation([row, col]));
    const current = this.state.history[this.state.turnNumber];
    current[this.state.activeLocation[0]][this.state.activeLocation[1]] = null;
    current[row][col] = piece;
    this.setState({
      history: this.state.history.concat([current]),
      whiteMovesNext: !this.state.whiteMovesNext,
      turnNumber: this.state.history.length
    });
  }

  isYourTurn(color) {
    return (
      (this.state.whiteMovesNext && color === 'light') ||
      (!this.state.whiteMovesNext && color === 'dark')
    );
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
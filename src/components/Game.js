import helpers from "../services/helpers";
import Board from "./Board/Board";
import InfoPanel from "./InfoPanel/InfoPanel";
import React from 'react';
import { COLORS, PIECES } from "../config/constants"

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [helpers.getInitialBoard()], // each turn of history is a 2d Array of board pieces in correct positions
      moves: [],
      turnNumber: 0,
      possibleMoves: [],
      activeColor: COLORS.LIGHT,
      activePiece: null,
      activeLocation: null
    }
  }

  handleClick([row, col]) {
    let alphaLocation = helpers.getAlphaLocation([row, col]);
    const current = this.state.history[this.state.turnNumber];
    const piece = current[row][col];
    if (piece && this.isYourTurn(piece.getColor())) {
      this.validPieceClicked(piece, [row, col]);
    } else if (this.state.possibleMoves.find(move => helpers.moveEqualsLocation(move, [row, col]))) {
      this.movePiece(this.state.activePiece, [row, col]);
    } else {
      console.log('clicked empty space at: ' + alphaLocation);
    }
  }

  validPieceClicked(piece, [row, col]) {
    let alphaLocation = helpers.getAlphaLocation([row, col]);
    console.log('clicked '+ piece.getColor() + ' ' + piece.getName() + ' at position: ' + alphaLocation);
    this.setState({
      possibleMoves: helpers.getPossibleMoves(piece, [row, col]),
      activePiece: piece,
      activeLocation: [row, col]
    });
  }

  movePiece(piece, [row, col]) {
    console.log('valid move!');
    console.log('moving ' + piece.getName() + 
                ' from ' + helpers.getAlphaLocation(this.state.activeLocation) + 
                ' to ' + helpers.getAlphaLocation([row, col]));
    const move = this.moveToString(piece, [row, col]);
    const current = this.state.history[this.state.turnNumber];
    current[this.state.activeLocation[0]][this.state.activeLocation[1]] = null;
    current[row][col] = piece;
    this.setState({
      history: this.state.history.concat([current]),
      moves: this.state.moves.concat(move),
      activeColor: this.toggleActiveColor(),
      turnNumber: this.state.history.length,
      possibleMoves: []
    });
  }

  moveToString(piece, [row, col]) {
    let move = '';
    const pieceName = piece.getName();
    if (pieceName !== PIECES.PAWN) {
      move += pieceName.slice(0).toUpperCase();
    }
    move += helpers.getAlphaLocation([row, col]);
    return move;
  }

  isYourTurn(color) {
    return this.state.activeColor === color;
  }

  toggleActiveColor() {
    if (COLORS.LIGHT === this.state.activeColor) {
      return COLORS.DARK;
    } else {
      return COLORS.LIGHT;
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
        <Board 
          boardState={current}
          possibleMoves={this.state.possibleMoves}
          onClick={(location) => this.handleClick(location)}
        />
        <InfoPanel
          moves={this.state.moves}
          activeColor={this.state.activeColor}
        />
      </div>
    )
  }
}

export default Game
import { getAlphaLocation, getInitialBoard } from "../services/helpers";
import Board from './Board';
import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [getInitialBoard()],
      moves: [],
      turnNumber: 0,
      whiteMovesNext: true
    }
  }

  handleClick([row, col]) {
    let alphaLocation = getAlphaLocation([row, col]);
    console.log(alphaLocation + ' clicked');
    this.state.moves.concat(this.state.turnNumber + ' ' + alphaLocation);
  }

  render() {
    const current = this.state.history[this.state.turnNumber];
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            boardState={current}
            onClick={(location) => this.handleClick(location)}
          />
        </div>
      </div>
    )
  }
}

export default Game
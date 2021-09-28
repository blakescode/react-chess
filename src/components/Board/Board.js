import './Board.css';
import Square from '../Square/Square';
import React from 'react';
import helpers from '../../services/helpers';
import { COLORS } from '../../config/constants';
  
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSquares: Array(8).fill().map(() => Array(8)),
      previousClick: [null, null]
    }
  }

  updateActiveSquares([row, col]) {
    const currentSquares = this.state.activeSquares;
    const pRow = this.state.previousClick[0];
    const pCol = this.state.previousClick[1];
    // reset previously clicked square (active) if it wasn't part of the currentClick
    if (pRow 
        && Boolean(currentSquares[pRow][pCol]) 
        && !this.wasPreviousClick([row, col])) 
    {
      currentSquares[pRow][pCol] = false;
    }
    currentSquares[row][col] = !Boolean(currentSquares[row][col]);
    this.setState({
      activeSquares: currentSquares,
      previousClick: [row, col]
    });
  }

  wasPreviousClick([row, col]) {
    return ((this.state.previousClick[0] === row) && (this.state.previousClick[1] === col)) 
  }

  isActive([row, col]) {
    return (
      this.inPreviousMove([row, col])
      || (this.state.activeSquares[row][col] && this.props.boardState[row][col])
    );
  }

  inPreviousMove([row, col]) {
    // TODO: return if square is part of previous move (to always show as active)
    return false;
  }

  toggleColor(color) {
    if (COLORS.LIGHT === color) {
      return COLORS.DARK;
    } else {
      return COLORS.LIGHT;
    }
  }

  render() {
    return (
      <div>
        {Array(8).fill(null).map((_, row) => {
          let nextColor = (row % 2 === 0) ? COLORS.LIGHT : COLORS.DARK;
          return (
            <div key={row.toString()}>
              {Array(8).fill(null).map((_, col) => {
                let squareColor = nextColor;
                let location = [row, col];
                let isActive = this.isActive(location);
                let isPossibleMove = this.props.possibleMoves.find(move => helpers.moveEqualsLocation(move, location));
                nextColor = this.toggleColor(nextColor);
                return (
                  <Square
                    key={location}
                    squareColor={squareColor}
                    isActive={isActive}
                    isPossibleMove={isPossibleMove}
                    location={location}
                    piece={this.props.boardState[row][col]}
                    onClick={(location) => {this.props.onClick(location); this.updateActiveSquares(location)}}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;

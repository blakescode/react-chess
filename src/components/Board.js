import './Board.css';
import Square from './Square';
import React from 'react';
  
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSquares: Array(8).fill().map(() => Array(8)),
      previousClick: [null, null]
    }
  }
  render() {
    return (
      <div>
        {Array(8).fill(null).map((_, row) => {
          let isLightColor = (row % 2 === 0) ? true : false;
          return (
            <div key={row.toString()}>
              {Array(8).fill(null).map((_, col) => {
                let squareColor = isLightColor ? 'light' : 'dark';
                let location = [row, col];
                let isActive = this.isActive(location);
                isLightColor = !isLightColor;
                return (
                  <Square
                    key={location}
                    squareColor={squareColor}
                    isActive={isActive}
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

  updateActiveSquares([row, col]) {
    const currentSquares = this.state.activeSquares;
    const pRow = this.state.previousClick[0];
    const pCol = this.state.previousClick[1];
    // reset previously clicked square (active) if it wasn't part of the currentClick
    if (pRow && Boolean(currentSquares[pRow][pCol]) && !this.wasPreviousClick([row, col]) ) {
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

}

export default Board;

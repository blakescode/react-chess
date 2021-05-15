import './Board.css';
import Square from './Square';
import React from 'react';
import { handleClick } from '../services/gameState';
  
class Board extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div>
            {Array(8).fill(null).map((_, row) => {
              let isLightColor = (row % 2 === 0) ? true : false;
              return (
                <div key={row.toString()}>
                  {Array(8).fill(null).map((_, col) => {
                    let squareColor = isLightColor ? 'light' : 'dark';
                    let location = [row, col];
                    isLightColor = !isLightColor;
                    return (
                      <Square
                        key={location}
                        squareColor={squareColor}
                        location={location}
                        onClick={(location) => handleClick(location)}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;

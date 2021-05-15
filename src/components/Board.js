import './Board.css';
import React from 'react';
import { getAlphaLocation } from '../services/helpers';

function Square(props) {
  let className = "square";
  className += (' ' + props.squareColor);
  return (
    <button 
      className={className}
    >
      {props.location}
    </button>
  );
}
  
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
                    let location = getAlphaLocation(row, col);
                    isLightColor = !isLightColor;
                    return (
                      <Square
                        key={location}
                        squareColor={squareColor}
                        location={location}
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

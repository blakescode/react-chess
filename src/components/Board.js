import './Board.css';
import Square from './Square';
import React from 'react';
  
class Board extends React.Component {
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
                isLightColor = !isLightColor;
                return (
                  <Square
                    key={location}
                    squareColor={squareColor}
                    location={location}
                    piece={this.props.boardState[row][col]}
                    onClick={(location) => this.props.onClick(location)}
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

import './InfoPanel.css';
import React from 'react';
  
class InfoPanel extends React.Component {
  render() {
    return (
      <div className="game-info-panel">
        <div className="active-color">
          <h1>{this.props.activeColor} to move</h1>
        </div>
        {this.displayMoveHistory()}
      </div>
    );
  }

  displayMoveHistory() {
    if (this.props.moves.length > 0) {
      let lightMoves = [];
      let darkMoves = [];
      for (let i = 0; i < this.props.moves.length; i++) {
        let move = this.props.moves[i];
        if (i % 2 === 0) {
          lightMoves.push(<li key={move} className="move">{move}</li>);
        } else {
          darkMoves.push(<li key={move} className="move">{move}</li>);
        }
      }
      return (
        <div className="move-history">
          <div className="moves-container">
            <h3>Light</h3>
            <ul className="move-list">
              {lightMoves}
            </ul>
          </div>
          <div className="moves-container">
            <h3>Dark</h3>
            <ul className="move-list">
              {darkMoves}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default InfoPanel;

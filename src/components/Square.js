import './Square.css';
import React from 'react';
import { getAlphaLocation } from '../services/helpers';

class Square extends React.Component {
  render() {
    let className = "square";
    className += (' ' + this.props.squareColor);
    return (
      <button 
        className={className}
        onClick={() => this.props.onClick(this.props.location)}
      >
        {getAlphaLocation(this.props.location)}
        {// TODO : get url of potential piece to display
        }
      </button>
    );
  }
}

export default Square
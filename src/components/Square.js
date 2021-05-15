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
      </button>
    );
  }
}

export default Square
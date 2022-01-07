import React from 'react';
import './Card.css';

function Card(props) {
  const classes = 'c-card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
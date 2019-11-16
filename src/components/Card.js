import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
        <h1>{props.title}</h1>
        <h3>Count: {props.count}</h3>
        <p>{props.description}</p>
    </div>
  );
}

export default Card;

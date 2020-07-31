import React from 'react';

function Day(props) {
  return (
    <div>
      <h3>{props.description}</h3>
      <p>{props.temp}&deg; {props.unit} &#124; Humidity: {props.humidity}&#37;</p>
    </div>
  );
}

export default Day;

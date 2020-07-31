import React from 'react';
import Day from './Day';

function Forecast(props) {
  return (
    <React.Fragment>
      <h2>Current Conditions for {props.location}</h2>
      <h3>{props.description}</h3>
      <h3>{props.temp}&deg; {props.unit}</h3>
      <Day />
    </React.Fragment>
  );
}

export default Forecast;

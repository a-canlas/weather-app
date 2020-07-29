import React from 'react';

function Forecast(props) {
  return (
    <React.Fragment>
      <h2>Current Conditions for {props.location}</h2>
      <h3>{props.description}</h3>
      <h3>{props.temp}&deg; {props.unit}</h3>
    </React.Fragment>
  );
}

export default Forecast;
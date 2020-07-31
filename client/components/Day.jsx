import React from 'react';
import moment from 'moment';

function Day(props) {
  const newDate = new Date();
  const dt = props.dt;
  const weekday = dt * 1000;
  newDate.setTime(weekday);
  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p>{props.temp}&deg; {props.unit} &#124; Humidity: {props.humidity}&#37;</p>
        <p>{props.description}</p>

      </div>
    </div>
  );
}

export default Day;

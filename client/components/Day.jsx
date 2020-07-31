import React from 'react';
import moment from 'moment';

function Day(props) {
  const newDate = new Date();
  const dt = props.dt;
  const weekday = dt * 1000;
  newDate.setTime(weekday);
  const iconClass = `owf owf-${props.icon} owf-5x`;
  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <i className={iconClass}></i>
        <h2>{props.temp}&deg; {props.unit}</h2>
        <p>Humidity: {props.humidity}&#37;</p>
        <p>{props.description}</p>

      </div>
    </div>
  );
}

export default Day;

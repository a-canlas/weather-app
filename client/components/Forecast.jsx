import React from 'react';
import Day from './Day';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.addDays = this.addDays.bind(this);
  }

  addDays() {
    const list = this.props.five;
    const dayElems = list.map((day, i) => {
      const temp = Math.round(day.main.temp);
      const dt = day.dt;
      return <Day key={i} description={day.weather[0].main} temp={temp} unit={this.props.unit} humidity={day.main.humidity} dt={dt}/>;
    });
    return dayElems;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="display-1 jumbotron">5 Day Forecast</h2>
          <h4 className="display-4 text-muted">{this.props.location}</h4>
          <div className="row justify-content-center">
            {this.addDays()}

          </div>

        </div>

      </React.Fragment>
    );
  }
}

export default Forecast;

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
      return <Day key={i} description={day.weather[0].main} temp={day.main.temp} unit={this.props.unit} humidity={day.main.humidity}/>;
    });
    return dayElems;
  }

  render() {
    return (
      <React.Fragment>
        <h2>Current Conditions for Here</h2>
        {this.addDays()}

      </React.Fragment>
    );
  }
}

export default Forecast;

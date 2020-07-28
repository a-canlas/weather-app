import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    };
  }

  render() {
    return (
      <p>Weather App</p>
    );
  }
}

export default App;

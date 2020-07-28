import React from 'react';
import SearchForm from './SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <p>Weather App</p>
        <SearchForm/>
      </React.Fragment>
    );
  }
}

export default App;

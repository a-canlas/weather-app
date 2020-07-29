import React from 'react';
import SearchForm from './SearchForm';
import Forecast from './Forecast';
import apiKey from '../apis';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      isCelsius: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    const key = apiKey.weather;
    const unit = this.state.isCelsius ? 'metric' : 'imperial';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${unit}`;
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({ weatherData: result });
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <React.Fragment>
        <p>Weather App</p>
        <SearchForm receiveCity={this.handleSearch}/>
        <Forecast />
      </React.Fragment>
    );
  }
}

export default App;

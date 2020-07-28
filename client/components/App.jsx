import React from 'react';
import SearchForm from './SearchForm';
import apiKey from '../apis';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    const key = apiKey.weather;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
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
      </React.Fragment>
    );
  }
}

export default App;

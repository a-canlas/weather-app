import React from 'react';
import SearchForm from './SearchForm';
import Forecast from './Forecast';
import apiKey from '../apis';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullData: null,
      fiveDay: null,
      isCelsius: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    const key = apiKey.weather;
    const unit = this.state.isCelsius ? 'metric' : 'imperial';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=${unit}`;
    fetch(url)
      .then(result => result.json())
      .then(result => {
        const fiveDay = result.list.filter(day => day.dt_txt.includes('21:00:00'));
        this.setState({ fullData: result, fiveDay: fiveDay });
      })
      .catch(err => console.error(err));

  }

  render() {
    // if (this.state.weatherData === null) {
    //   return (
    //     <React.Fragment>
    //       <p>Weather App</p>
    //       <SearchForm receiveCity={this.handleSearch}/>
    //       <p>Enter a city in the input above</p>
    //     </React.Fragment>
    //   );
    // }
    // const location = this.state.weatherData.name;
    // const description = this.state.weatherData.weather[0].main;
    // const temp = this.state.weatherData.main.temp;
    // const unit = this.state.isCelsius ? 'C' : 'F';
    // return (
    //   <React.Fragment>
    //     <p>Weather App</p>
    //     <SearchForm receiveCity={this.handleSearch}/>
    //     <Forecast location={location} description={description} temp={temp} unit={unit}/>
    //   </React.Fragment>
    // );

    return (
      <React.Fragment>
        <p>Weather App</p>
        <SearchForm receiveCity={this.handleSearch}/>
      </React.Fragment>
    );
  }
}

export default App;

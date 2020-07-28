import React from 'react';
import SearchForm from './SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    // eslint-disable-next-line no-console
    console.log('I received the city info: ', city);
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

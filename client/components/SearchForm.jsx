import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.updateText = this.updateText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateText(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const wrappedCity = this.state.city;
    if (!wrappedCity) {
      return;
    }
    this.props.receiveCity(wrappedCity);
    this.setState({ city: '' });
  }

  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" id="city" className="form-control" name="city" value={this.state.city} onChange={this.updateText}></input>
            <button className="btn btn-primary" type="submit" id="submitBtn">Submit</button>

          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;

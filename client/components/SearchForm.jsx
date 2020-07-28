import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <input type="text" id="city" name="city" value={this.state.city} onChange={this.updateText}></input>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;

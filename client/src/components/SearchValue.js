import React from "react";

class SearchValue extends React.Component {

    state = {
      value: ""
    }


  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.searchValue(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

export default SearchValue;

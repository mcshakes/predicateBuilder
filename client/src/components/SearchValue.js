import React from "react";
import "../css/Search.css";

class SearchValue extends React.Component {

    state = {
      value: ""
    }


  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.searchValue(this.state.value)
    this.props.fromTheBottom(this.state.value)
    event.preventDefault();
  }

  thisThing = () => {
    this.props.fromTheBottom(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
        className="search-form"
        >
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

export default SearchValue;

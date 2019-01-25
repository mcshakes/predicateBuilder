import React from "react";

class TwoSearchValues extends React.Component {
  state = {
    values: []
  }

  handleChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )

  }

  handleSubmit = (e) => {
    let newItems = [this.state.input1, this.state.input2]

    this.props.searchValue(newItems)
    this.props.accessSearchQueries(newItems)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form className="between-search-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value1} name="input1" onChange={this.handleChange}/> AND
          <input type="text" value={this.state.value2} name="input2" onChange={this.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default TwoSearchValues;

import React from "react";

class StringOperators extends React.Component {

  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  sendOperator = (event) => {
    let operator = event.target.value
    this.props.buildOperator(operator)
  }

  render() {
    return (
      <div>
        <form
          >
          <select
            onChange={this.sendOperator}
            >
            <option>Select One</option>
            <option value="equals">equals</option>
            <option value="contains">contains</option>
            <option value="starts with">starts with</option>
            <option value="in list">in list</option>
          </select>
        </form>
      </div>
    )
  }
}

export default StringOperators;

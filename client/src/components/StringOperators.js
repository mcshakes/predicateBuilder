import React from "react";
import "../css/PredicateSelection.css";

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
      <div className="operator-form">
        <form>
          <select
            onChange={this.sendOperator}
            className="select-str-operators"
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

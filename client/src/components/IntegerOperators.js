import React from "react";
import "../css/PredicateSelection.css";

class IntegerOperators extends React.Component {

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
    event.preventDefault()
  }

  render() {
    return (
      <div className="operator-form">
        <form>
          <select
            onChange={this.handleChange && this.sendOperator}
            className="select-int-operators"
            >
            <option>Select One</option>
            <option value="equals">equals</option>
            <option value="between">between</option>
            <option value="greater than">greater than</option>
            <option value="less than">less than</option>
            <option value="in list">in list</option>
          </select>
        </form>
      </div>
    )
  }
}

export default IntegerOperators;

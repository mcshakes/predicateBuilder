import React from "react";
import "../css/PredicateSelection.css";

class StringOperators extends React.Component {

  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    }, () => {
      this.sendOperator(this.state.value);
    })
  }


  sendOperator = (operator) => {
    this.props.buildOperator(operator)
  }

  render() {
    return (
      <div className="operator-form">
        <form>
          <select
            onChange={
              this.handleChange
            }
            className="select-str-operators"
            value={this.state.value}
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

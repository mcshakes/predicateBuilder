import React from "react";

class IntegerOperators extends React.Component {

  buildOperator = (event) => {
    let operator = event.target.value
    this.props.buildOperator(operator)
  }

  render() {
    return (
      <div>
        <form>
          <select
            onChange={this.sendOperator}
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

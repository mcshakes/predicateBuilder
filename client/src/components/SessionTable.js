import React from "react";
import PredicateSelection from "./PredicateSelection";
import IntegerOperators from "./IntegerOperators";
import StringOperators from "./StringOperators";

class SessionTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: [],
      predicateBuilder: [],
      type: "",
      operator: "",
      searchValue: ""
    }
  }

  onColumnChange = (predicate) => {
    this.setState({
      predicateBuilder: [...this.state.predicateBuilder, predicate[0]],
      type: predicate[1]
    })
  }

  onOperatorChange = (operator) => {
    this.setState({
      predicateBuilder: [...this.state.predicateBuilder, operator]
    })
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const isEmpty = this.state.predicateBuilder === "";
    const isIntegerType = this.state.type === "integer"
    const isStringType = this.state.type === "string"

    let renderOperaterSelect;

    if (!isEmpty && isIntegerType) {
      renderOperaterSelect = <IntegerOperators buildOperator={this.onOperatorChange}/>
    }
    if (!isEmpty && isStringType) {
      renderOperaterSelect = <StringOperators buildOperator={this.onOperatorChange}/>
    }

    return (
      <div>
        <PredicateSelection buildColumn={this.onColumnChange}/>
        {renderOperaterSelect}
        {/* <form>
          <input type="text" value={this.state.searchValue} onChange={this.handleChange}/>
        </form> */}
      </div>
    )
  }
}

export default SessionTable

import React from "react";
import PredicateSelection from "./PredicateSelection";
import IntegerOperators from "./IntegerOperators";
import StringOperators from "./StringOperators";
import SearchValue from "./SearchValue";

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

  submitSearchValue = (value) => {

    this.setState({
      searchValue: [...this.state.predicateBuilder, value]
    })
  }



  render() {
    const isEmpty = this.state.predicateBuilder.length === 0;
    const isIntegerType = this.state.type === "integer"
    const isStringType = this.state.type === "string"

    let renderOperaterSelect;
    let showUserInput;

    if (!isEmpty && isIntegerType) {
      renderOperaterSelect = <IntegerOperators buildOperator={this.onOperatorChange}/>
    }
    if (!isEmpty && isStringType) {
      renderOperaterSelect = <StringOperators buildOperator={this.onOperatorChange}/>
    }

    if (!isEmpty) {
      showUserInput = <SearchValue searchValue={this.submitSearchValue}/>
    }

    return (
      <div>
        <PredicateSelection buildColumn={this.onColumnChange}/>
        {renderOperaterSelect}
        {showUserInput}
      </div>
    )
  }
}

export default SessionTable

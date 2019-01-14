import React from "react";
import PredicateSelection from "./PredicateSelection";
import IntegerOperators from "./IntegerOperators";
import StringOperators from "./StringOperators";

class SessionTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: [],
      predicateBuilder: ""
    }
  }

  onColumnChange = (predicate) => {
    this.setState({
      predicateBuilder: predicate
    })
  }

  render() {
    const isEmpty = this.state.predicateBuilder === "";
    const isIntegerType = this.state.predicateBuilder[1] === "integer"
    const isStringType = this.state.predicateBuilder[1] === "string"

    let renderOperaterSelect;

    if (!isEmpty && isIntegerType) {
      renderOperaterSelect = <IntegerOperators />
    }
    if (!isEmpty && isStringType) {
      renderOperaterSelect = <StringOperators />
    }

    return (
      <div>
        <PredicateSelection buildColumn={this.onColumnChange}/>
        {renderOperaterSelect}
      </div>
    )
  }
}

export default SessionTable

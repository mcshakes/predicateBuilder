import React from "react";
import PredicateSelection from "./PredicateSelection";

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
    return (
      <div>
        <PredicateSelection buildColumn={this.onColumnChange}/>
      </div>
    )
  }
}

export default SessionTable

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

  render() {
    return (
      <div>
        <PredicateSelection />
      </div>
    )
  }
}

export default SessionTable

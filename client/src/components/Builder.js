import React from "react";
import SessionTable from './SessionTable';
import QueryString from "./QueryString";
import EqualQuery from "./EqualQuery";

class Builder extends React.Component {
  state = {
    query: ""
  }

  getBack = (query) => {
    this.setState({
      query
    })
  }

  renderMatch = (state) => {

    let operator = state.query[1]
    // console.log("operator", state.query[1])

    switch (operator) {
      case "equals":
        return <EqualQuery predicateInfo={state.query}/>
        break;
      default:
        return null;
    }
  }

  render() {

    return (
      <div>
        <div className="builder-base">
          <SessionTable sendUp={this.getBack}/>
        </div>

        {this.renderMatch(this.state)}
      </div>
    )
  }
}

export default Builder;

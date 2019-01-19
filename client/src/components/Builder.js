import React from "react";
import SessionTable from './SessionTable';
import QueryString from "./QueryString";
import SingleQuery from "./SingleQuery";
import "../css/Builder.css";

class Builder extends React.Component {
  state = {
    query: [],
    numTable: 1
  }

  getBack = (id, query) => {
    let currentQuery = this.state.query;
    currentQuery[id] = query;
    this.setState({
      query: currentQuery
    })
  }

  renderMatch = (state) => {
    // console.log(state.query)
    let operator = state.query

    if (state.query.length === 1) {
      return <SingleQuery predicateInfo={state.query}/>
    }
  //   0: (3) ["user_email", "contains", "asdasd"]
  // 1: (3) ["user_last_name", "starts with", "butt"]
  }


  render() {
    let tables = [];

    for (let i=0; i < this.state.numTable; i++) {
      tables.push(<SessionTable key={i} sendUp={this.getBack} id={i}/>)
    }

    return (
      <div>
        <div className="builder-base">
          {tables}
        </div>


        <div className="add-line">
            <button
              onClick={() => this.setState({numTable: this.state.numTable + 1})}>
              ADD
            </button>
        </div>

        {this.renderMatch(this.state)}

      </div>
    )
  }
}

export default Builder;

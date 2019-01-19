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


  renderQueries = () => {
    return (<div>
      {
        this.state.query.map((query, index) => {
          return <SingleQuery key={index} index={index} queryValues={query}/>
        })
      }
    </div>)
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

        {this.renderQueries()}

      </div>
    )
  }
}

export default Builder;

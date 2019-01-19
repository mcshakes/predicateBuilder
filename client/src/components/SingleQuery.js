import React from "react";
import "../css/Query.css";


class SingleQuery extends React.Component {

  render() {
    console.log("BOTTOM COMPONENT", this.props.predicateInfo[0])
    const queryValues = this.props.predicateInfo[0]
    return (
      <div>
        <div>
          <span id="select">SELECT</span><span id="select">*</span>
          <span id="from">FROM</span>
          <span id="table">session</span>
          <span id="where">WHERE</span>
          <span id="predicate">{queryValues[0]} = {queryValues[2]}</span>
        </div>
      </div>
    )
  }
}

export default SingleQuery;

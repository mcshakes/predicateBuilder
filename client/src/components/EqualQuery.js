import React from "react";
import "../css/Query.css";


class EqualQuery extends React.Component {

  render() {
    return (
      <div>
        <div>
          <span id="select">SELECT</span><span id="select">*</span>
          <span id="from">FROM</span>
          <span id="table">session</span>
          <span id="where">WHERE</span>
          <span id="predicate">{this.props.predicateInfo[0]}={this.props.predicateInfo[2]}</span>
        </div>
      </div>
    )
  }
}

export default EqualQuery;

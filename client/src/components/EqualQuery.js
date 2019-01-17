import React from "react";

class EqualQuery extends React.Component {

  render() {
    console.log(this.props)

    return (
      <div>
        <div>
          <h2>SELECT *  </h2>
          <h2>FROM</h2>
          <h4>session</h4>
          <h2>WHERE</h2>
          <h4>{this.props.predicateInfo[0]}={this.props.predicateInfo[2]}</h4>
        </div>
      </div>
    )
  }
}

export default EqualQuery;

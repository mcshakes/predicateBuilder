import React from "react";
import "../css/Query.css";


class SingleQuery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryValues: this.props.queryInfo,
      queryList: []
    }
  }

  queryOperators = (param) => {
    switch(param) {
      case "equals":
        return "=";
      case "contains":
        return "Contains"
      case "between":
        return "BETWEEN"
      case "starts with":
        return "LIKE"
      case "greater than":
        return ">=";
      case "less than":
        return "<=";
      case "in list":
        return "IN";
      default:
        return "";
    }
  }

  render() {

    const appendAdditionalLine = (
                                    <div className="additional-query">
                                      <span id="and">AND</span>
                                    </div>
                                  )


    const queryValues = this.props.queryValues

    return (
      <div>
        <div>
          {
            this.props.index === 0 ? (<span><span id="select">SELECT</span><span id="select">*</span>
          <span id="from">FROM</span><span id="table">session</span><span id="where">WHERE</span></span>) : (<span id="table">AND</span>)}



          <span id="predicate">{queryValues[0]} {this.queryOperators(queryValues[1])} {queryValues[2]}</span>
        </div>

      </div>
    )
  }
}

export default SingleQuery;

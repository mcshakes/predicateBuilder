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

  queryOperators = (params) => {
    switch(params) {
      case "equals":
        return "=";
      case "contains":
        return "Contains"
      case "between":
        return "BETWEEN"
      case "starts with":
        return ["LIKE", "%"]
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
    const operator = this.queryOperators(queryValues[1])
    let queryReturned;

    if (Array.isArray(operator)) {
      queryReturned = <span id="predicate">{queryValues[0]}  <span id="like">{operator[0]}</span>  '{queryValues[2]}{operator[1]}'</span>
    }

    if (operator === "IN") {
      queryReturned = <span id="predicate">{queryValues[0]} {operator} ({queryValues[2]})</span>
    } else {
      queryReturned = <span id="predicate">{queryValues[0]} {operator} {queryValues[2]}</span>
    }

    return (

        <div className="return-value">
          {
            this.props.index === 0 ? (<span><span id="select">SELECT</span><span id="select">*</span>
          <span id="from">FROM</span><span id="table">session</span><span id="where">WHERE</span></span>) : (<span id="and">AND</span>)
          }

          {queryReturned}
        </div>

    )
  }
}

export default SingleQuery;

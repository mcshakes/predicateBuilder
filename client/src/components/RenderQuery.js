import React from "react";
import "../css/Query.css";


class RenderQuery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryList: []
    }
  }

  renderSQLQuery = (state) => {
    const queryValues = this.state.queryValues

    const renderLineQuery = (
      <div>
        <span id="select">SELECT</span><span id="select">*</span>
        <span id="from">FROM</span>
        <span id="table">session</span>
        <span id="where">WHERE</span>
        <span id="predicate">{queryValues[0]} = {queryValues[2]}</span>
      </div>
    )

    this.state.queryList.push(renderLineQuery)

    return this.state.queryList
  }

  render() {



    const appendAdditionalLine = (
                                    <div className="additional-query">
                                      <span id="and">AND</span>
                                    </div>
                                  )


    return (
      <div>
        {this.renderSQLQuery(this.state)}

      </div>
    )
  }
}

export default RenderQuery;

import React from "react";
import SessionTable from './SessionTable';
import QueryString from "./QueryString";

class Builder extends React.Component {
  state = {
    query: ""
  }

  getBack = (query) => {
    console.log(query)
    // this.setState({
    //   query:
    // })
  }

  render() {
    return (
      <div>
        <div className="builder-base">
          <SessionTable sendUp={this.getBack}/>
        </div>

        <QueryString />
      </div>
    )
  }
}

export default Builder;

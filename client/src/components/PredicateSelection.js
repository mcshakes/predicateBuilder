import React from "react";
import "../css/PredicateSelection.css";


class PredicateSelection extends React.Component {

  handleChange = (e) => {
    let dataType = e.target.selectedOptions[0].getAttribute("data-type");
  }

  sendData = (event) => {
    let value = event.target.value;
    let dataType = event.target.selectedOptions[0].getAttribute("data-type");
    this.props.buildColumn([value, dataType])
  }

  render() {
    return (
      <div className="column-select">
        <form>
          <select
            onChange={this.handleChange && this.sendData}
            className="select-column"
            >
              <option value="null">Select One</option>
              <option value="id" data-type="integer">ID</option>
              <option value="user_email" data-type="string">User Email</option>
              <option value="screen_width" data-type="integer">Screen Width</option>
              <option value="screen_height" data-type="integer">Screen Height</option>
              <option value="visits" data-type="integer"># of Visits</option>
              <option value="user_first_name" data-type="string">First Name</option>
              <option value="user_last_name" data-type="string">Last Name</option>
              <option value="page_response" data-type="integer">Page Response Time (ms)</option>
              <option value="domain" data-type="string">Domain</option>
              <option value="path" data-type="string">Page Path</option>
            </select>
          </form>
      </div>
    )
  }
}


export default PredicateSelection

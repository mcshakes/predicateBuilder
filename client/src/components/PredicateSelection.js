import React from "react";

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
      <form>
        <select
          onChange={this.handleChange && this.sendData}
          >
          <option value="null">Select One</option>
          <option value="email" data-type="string">User Email</option>
          <option value="screenWidth" data-type="integer">Screen Width</option>
          <option value="screenHeight" data-type="integer">Screen Height</option>
          <option value="numOfVisits" data-type="integer"># of Visits</option>
          <option value="firstName" data-type="string">First Name</option>
          <option value="lastName" data-type="string">Last Name</option>
          <option value="responseTime" data-type="integer">Page Response Time (ms)</option>
          <option value="domain" data-type="string">Domain</option>
          <option value="pagePath" data-type="string">Page Path</option>
        </select>
      </form>
    )
  }
}


export default PredicateSelection

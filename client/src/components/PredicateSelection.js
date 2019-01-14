import React from "react";

class PredicateSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPredicate: "",
      dataType: ""
    }
  }

  handleChange = (e) => {
    // console.log(e.target.selectedOptions[0].getAttribute("data-type"))
    let dataType = e.target.selectedOptions[0].getAttribute("data-type");

    this.setState({
      selectedPredicate: e.target.value,
      dataType 
    })
  }

  render() {
    return (
      <form>
        <select
          value={this.state.selectedPredicate}
          onChange={this.handleChange}
          >
          <option value="email" data-type="string">User Email</option>
          <option value="screenWdata-typeth" data-type="integer">Screen Width</option>
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

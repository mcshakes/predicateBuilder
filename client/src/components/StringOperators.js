import React from "react";

class StringOperators extends React.Component {
  render() {
    return (
      <div>
        <form>
          <select
            >
            <option value="null">Select One</option>
            <option value="equals">equals</option>
            <option value="contains">contains</option>
            <option value="starts with">starts with</option>
            <option value="in list">in list</option>
          </select>
        </form>
      </div>
    )
  }
}

export default StringOperators;

import React, { Component } from "react";
import RemoveEmployee from "../components/removeEmployee/removeEmployee.js"

class TerminationPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <RemoveEmployee />
      </div>
    );
  }
}

export default TerminationPage;

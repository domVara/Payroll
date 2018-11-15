import React, { Component } from "react";
import "./styles/tiles.css"

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className = "columns columnsRow">
          <div className = "boxPadding">
            <div className = "box boxSize has-text-centered">
              Employees
            </div>
          </div>
          <div className = "boxPadding">
            <div className = "box boxSize has-text-centered">
              Add New Employee
            </div>
          </div>
          <div className = "boxPadding">
            <div className = "box boxSize has-text-centered">
              Teams
            </div>
          </div>
        </div>
        <div className = "columns columnsRow">
          <div className = "boxPadding">
            <div className = "box boxSize has-text-centered">
              General Records
            </div>
          </div>
          <div className = "boxPadding">
            <div className = "box boxSize has-text-centered">
              Employee Termination
            </div>
          </div>
          <div className = "boxPadding">
            <div className = "box boxSize has-text-centered">
              Company Code of Conduct
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;

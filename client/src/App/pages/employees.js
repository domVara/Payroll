import React, { Component } from "react";
import EmployeesList from "../components/employeeList/employeeList.js"


class Employees extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EmployeesList/>
      </div>
    );
  }
}

export default Employees;

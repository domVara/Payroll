import React, { Component } from "react";
import AddEmployeeForm from "../components/addEmployeeForm/addEmployeeForm.js"


class AddEmployee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddEmployeeForm />
      </div>
    );
  }
}

export default AddEmployee;

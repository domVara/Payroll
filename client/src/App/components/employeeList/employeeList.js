import React, { Component } from "react";
import axios from 'axios'

import "./styles/employeeList.css"

class EmployeeList extends Component {
  state={employees:[]}

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log('EmployeeList mounting....');
    axios.get('/api/employee')
      .then(res => {
        console.log(res.data)
        this.setState({employees : res.data})
      })
  }

  renderEmployees(){

    return this.state.employees.map(employee =>

        <tr>
          <td>{employee.firstName}</td>
          <td>{employee.team}</td>
          <td>{employee.positionTitle}</td>
          <td>{employee.email}</td>
          <td>{employee.phoneNumber}</td>
          <td>{employee.branchLocation}</td>
          <td>{employee.hours}</td>
          <td>{employee.salary}</td>
        </tr>
    );
  }

  render() {

    return (
      <div>
          <table className="table">
            <thead>
                <tr>
                <th><abbr title="name">Name</abbr></th>
                <th><abbr title="team">Team</abbr></th>
                <th><abbr title="title">Title</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="phone">Phone Number</abbr></th>
                <th><abbr title="location">Office Location</abbr></th>
                <th><abbr title="hours">Hours Logged</abbr></th>
                <th><abbr title="wage-type">Salary</abbr></th>
                </tr>
            </thead>

            <tbody>
                {this.renderEmployees()}
            </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;

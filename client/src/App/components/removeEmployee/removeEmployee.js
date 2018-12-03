import React, { Component } from "react";

import "./styles/removeEmployee.css"
import axios from 'axios'

class removeEmployee extends Component {
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


  handleClick(e,data){
    console.log(e.target.parentElement.parentElement)

  }

  renderEmployees(){

    return this.state.employees.map(employee =>

        <tr>
          <th><a onClick={this.handleClick}> <i className="fa fa-trash icon is-large " aria-hidden="true"></i></a></th>
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
                <th><abbr title="id">Employee ID</abbr></th>
                <th><abbr title="name">Name</abbr></th>
                <th><abbr title="team">Team</abbr></th>
                <th><abbr title="title">Title</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="phone">Phone Number</abbr></th>
                <th><abbr title="location">Office Location</abbr></th>
                <th><abbr title="hours">Hours Logged</abbr></th>
                <th><abbr title="wage-type">Salary/Hourly</abbr></th>
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


export default removeEmployee;

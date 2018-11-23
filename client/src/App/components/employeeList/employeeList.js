import React, { Component } from "react";

import "./styles/employeeList.css"

class EmployeeList extends Component {
  state={employees:[]}

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log('EmployeeList mounting....');
     // sample data
    this.setState({employees: {
        "data":[
            {id: 1001,name: "Don James", team: "finance", title: "supervisor", email: "don.james@company.com", 
            phone: "408-123-4567", location: "San Jose", hours: 33.50, wage: "salary",}, 

            {id: 1001,name: "Don James", team: "finance", title: "supervisor", email: "don.james@company.com", 
            phone: "408-123-4567", location: "San Jose", hours: 33.50, wage: "salary",},
            ]
    
    }}); 
  }

  renderEmployees(){
        
    return this.state.employees.data.map(employee => 

        <tr>
          <th>{employee.id}</th>
          <td>{employee.name}</td>
          <td>{employee.team}</td>
          <td>{employee.title}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.location}</td>
          <td>{employee.hours}</td>
          <td>{employee.wage}</td>
        </tr>
    );
  }

  render() {

    return (
      <div>
          <table class="table">
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

export default EmployeeList;

import React, { Component } from "react";
import { Switch, Route, Link, matchPath } from "react-router-dom";

import "./styles/team.css"
import axios from 'axios'

class Team extends Component {
  state={employees:[]}

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    axios.get("/api/teams/" + this.props.val)

      .then(res => {
        console.log(res.data)
        this.setState({employees : res.data})
      })
  }

  renderEmployees(){

    return this.state.employees.map(employee =>

        <tr>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.positionTitle}</td>
          <td>{employee.email}</td>
          <td>{employee.phoneNumber}</td>
          <td>{employee.branchLocation}</td>
          <td>{employee.hours}</td>
        </tr>
    );
  }



  render() {

    return (
      <div>
        Team
        {this.state.employees}
          <table className="table">
            <thead>
                <tr>
                <th><abbr title="First Name">Name</abbr></th>
                <th><abbr title="Last Name">Name</abbr></th>
                <th><abbr title="title">Title</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="phone">Phone Number</abbr></th>
                <th><abbr title="location">Office Location</abbr></th>
                <th><abbr title="hours">Hours Logged</abbr></th>
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


export default Team;

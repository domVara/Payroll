import React, { Component } from "react";
import EmployeesList from "../components/employeeList/employeeList.js"


class Employees extends Component {

  login() {
    this.props.auth.login();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <EmployeesList/>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                Please {' '}
                <a
                  style={{ cursor: 'pointer', color: 'blue'}}
                  onClick={this.login.bind(this)}
                >
                  (Log In)
                </a>
                {' '}to continue.
              </h4>
            )
        }
        
      </div>
    );
  }
}

export default Employees;

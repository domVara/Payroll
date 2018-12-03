import React, { Component } from "react";
import AddEmployeeForm from "../components/addEmployeeForm/addEmployeeForm.js"


class AddEmployee extends Component {

  login() {
    this.props.auth.login();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() && (
            <AddEmployeeForm />
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                Please{' '}
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

export default AddEmployee;

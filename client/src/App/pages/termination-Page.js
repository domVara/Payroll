import React, { Component } from "react";
import RemoveEmployee from "../components/removeEmployee/removeEmployee.js"

class TerminationPage extends Component {

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
            <RemoveEmployee />
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

export default TerminationPage;

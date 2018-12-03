import React, { Component } from 'react';
import { Navbar, } from 'react-bootstrap';
import Button from 'react-button-component';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid className="App-header">
          <Navbar.Header >
            <Navbar.Brand >
              <a   href="/front-page">Final-Countdown</a>
            </Navbar.Brand>
            <Button
              cbsStyle="primary"
              className="btn-margin button"
              onClick={this.goTo.bind(this, 'front-page')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin button"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin button"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
          
        </Navbar>
      </div>
    );
  }
}

export default App;

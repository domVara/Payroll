import React, { Component } from 'react';
import Tiles from '../components/tiles/tiles';
class FrontPage extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <Tiles />
            )
        }
        {
          !isAuthenticated() && (

            <div>
              <h3>
                You are viewing the public page! Please{' '}
                <a
                  style={{ cursor: 'pointer', color: 'blue'}}
                  onClick={this.login.bind(this)}
                >
                  (Log In)
                </a>
                {' '}to continue into accociates area.
              </h3>
              <Tiles/>
            </div>
            )
        }
      </div>
    );
  }
}

export default FrontPage;

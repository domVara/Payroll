

import React, { Component } from 'react';
import {Button} from 'react-button-component';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Navbar from '../components/navbar/navbar.js';
import Tiles from '../components/tiles/tiles.js';

export default withAuth(class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;

    const button = this.state.authenticated ?
      <button onClick={this.props.auth.logout} style={{margin: '10px 10px 10px 0'}}>Logout</button> :
      <button onClick={this.props.auth.login}>Login</button>;
    
    return (
      <div>
        <Navbar />
        <button onClick={this.props.auth.logout}
        class='button button-blue' 
        style={{margin: '0px 10px 10px 1150px', alignSelf: 'end', backgroundColor: 'cyan'}}>
        Logout
        </button>
        <Tiles />
        
      </div>
    );
  }
});






/*import React, { Component } from "react";
import Navbar from '../components/navbar/navbar.js';
import Tiles from '../components/tiles/tiles.js';

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Tiles />
      </div>
    );
  }
}

export default FrontPage;*/

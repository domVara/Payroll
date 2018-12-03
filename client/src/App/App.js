import React, { Component } from 'react';
import { Navbar, } from 'react-bootstrap';
import Button from 'react-button-component';
import './App.css';

var Twit = require('twit')

var T = new Twit({
  consumer_key:         'HR2RypCQIo9srhXsjaoaTyhlN',
  consumer_secret:      'ND7BGkHeTpbHLzZBgv74HUhrtLR7JjIRZprLh5l9MI5Phw6c0g',
  access_token:         '328626025-sXNfhcXzREIjS6ydtRndsMnL6MNK2P4PxbEF9afU',
  access_token_secret:  'OL1mr012FQU7YSgGrCbqHsan94TZxeVelNXxxCLY3kF7u',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  //strictSSL:            false,     // optional - requires SSL certificates to be valid.
})

const tweet = ''
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 1 }, function(err, data, response) {
  console.log(data)
})

class App extends Component {

  state={latestTweet:''}
  
  constructor(props) {
    super(props);
    this.setState({latestTweet: 'tweet'});
  }
  
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
            {
              <div className="tweet">
                Latest Tweet: {this.state.latestTweet}
              </div>
            }
          </Navbar.Header>
          
        </Navbar>
      </div>
    );
  }
}

export default App;

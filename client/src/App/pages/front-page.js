import React, { Component } from 'react';
import Tiles from '../components/tiles/tiles';
import { Timeline } from 'react-twitter-widgets'

class FrontPage extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}> 

        {
          <div  style={{width: '400px'}}>
          <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'Countdown172'
              }}
              options={{
                username: 'Countdown172',
                height: '600'
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />

          </div>
        }
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

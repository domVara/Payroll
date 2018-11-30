import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';
import FrontPage from './pages/front-page.js';
import AddEmployee from './pages/addEmployee';
import ChartsPage from './pages/chartsPage';
import Employees from './pages/employees';
import Login from './pages/login';
import TerminationPage from './pages/termination-Page'
import TeamPage from './pages/team-page';
import SingleTeam from './pages/singleTeam';


function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Router>
            <Security issuer='https://dev-857287.oktapreview.com/oauth2/default'
                      client_id='0oahphozqyYtp44XS0h7'
                      redirect_uri={window.location.origin + '/implicit/callback'}
                      onAuthRequired={onAuthRequired} >

                <SecureRoute path='/' exact={true} component={FrontPage} />
                <SecureRoute path='/employees' component={Employees} />
                <SecureRoute path='/chartPage' component={ChartsPage} />
                <SecureRoute path='/addEmployee' component={AddEmployee} />
                <SecureRoute path='/terminationPage' component={TerminationPage} />
                <SecureRoute path='/teampage' component={TeamPage} />
                <SecureRoute path='/singleTeam/:team' component={SingleTeam} />


                <Route path='/login' render={() => <Login baseUrl='https://dev-857287.oktapreview.com' />} />
                <Route path='/implicit/callback' component={ImplicitCallback} />
            </Security>
        </Router>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;

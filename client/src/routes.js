// src/routes.js

import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App/App';
import FrontPage from './App/pages/front-page';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Employees from './App/pages/employees';
import AddEmployee from './App/pages/addEmployee';
import ChartsPage from './App/pages/chartsPage';
import TeamPage from './App/pages/team-page';
import TerminationPage from './App/pages/termination-Page';
import SingleTeam from './App/pages/singleTeam';
import AddEmployeeError from './App/pages/add-employee-error';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/front-page" render={(props) => <FrontPage auth={auth} {...props} />} />
          <Route path="/employees" render={(props) => <Employees auth={auth} {...props} />} />
          <Route path="/addEmployee" render={(props) => <AddEmployee auth={auth} {...props} />} />
          <Route path="/chartsPage" render={(props) => <ChartsPage auth={auth} {...props} />} />
          <Route path="/team-page" render={(props) => <TeamPage auth={auth} {...props} />} />
          <Route path="/termination-Page" render={(props) => <TerminationPage auth={auth} {...props} />} />
          <Route path="/singleTeam/:team" render={(props) => <SingleTeam auth={auth} {...props} />} />          <Route path="/add-employee-error" render={(props) => <AddEmployeeError auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>

        </div>
      </Router>
  );
}

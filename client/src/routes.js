// src/routes.js

import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App/App';
import FrontPage from './App/pages/front-page';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Employees from './App/pages/employees';

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
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          
        </div>
      </Router>
  );
}
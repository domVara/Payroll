import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FrontPage from './pages/front-page.js';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={FrontPage}/>

        </Switch>
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

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FrontPage from './pages/front-page.js';
import AddEmployee from './pages/addEmployee';
import ChartsPage from './pages/chartsPage';



class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={FrontPage}/>
          <Route path='/addEmployee' component={AddEmployee}/>
          <Route path='/chart' component={ChartsPage}/>

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

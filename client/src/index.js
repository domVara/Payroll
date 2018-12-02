/*import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);*/


import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './../node_modules/bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css'
import './index.css';
import { makeMainRoutes } from './routes';
import App from './App/App';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
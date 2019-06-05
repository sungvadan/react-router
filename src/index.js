import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Users from './Users';
import Contact from './Contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';



const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/users" component={Users}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={Notfound}></Route>
      </Switch>

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

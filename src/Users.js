import React, {Component} from 'react'
import { Route, Link, NavLink, BrowserRouter as Router } from "react-router-dom";

const User = ({ match }) => <p>{match.params.id}</p>

export default class Users extends Component{
  render() {
    const { params } = this.props.match
    return(
      <div>
        <h1>Users</h1>
        {params.id && <h2>{params.id}</h2>}
        <Router>

        <ul>
          <li>
            <Link to="/users/1">Users 1</Link>
          </li>
          <li>
            <Link to="/users/2">Users 2</Link>
          </li>
          <li>
            <Link to="/users/3">Users 3</Link>
          </li>
        </ul>
        <Route path='/users/:id' component={User}/>
        </Router>

      </div>
    )
  }
}
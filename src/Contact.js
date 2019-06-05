import React, {Component} from 'react'

export default class Contact extends Component{
  onSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/')
  }

  render() {
    return(
      <form>
        <h1>Contact</h1>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}
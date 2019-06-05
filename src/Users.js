import React, {Component} from 'react'

export default class Users extends Component{
  render() {
    const { params } = this.props.match
    console.log(params)
    return(
      <div>
        <h1>Users</h1>
        {params.id && <h2>{params.id}</h2>}
      </div>
    )
  }
}
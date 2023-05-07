import React, { Component } from 'react'

class HeaderComponent extends Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-warning justify-content-center">
            <a className="navbar-brand m-3" href="#">Employee Management System</a>
        </nav>
      </div>
    )
  }
}

export default HeaderComponent

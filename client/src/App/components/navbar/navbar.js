import React, { Component } from "react";
import "./styles/navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { context } = this.props;

    return (
      
      <div id = "navbarContainer">
        <nav className="navbar" id = "navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <h1 className = "is-size-3" id = "navbarProjectName"> Final Countdown </h1>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;

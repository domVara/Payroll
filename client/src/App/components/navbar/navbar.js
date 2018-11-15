import React, { Component } from "react";
import "./styles/navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { context } = this.props;

    return (
      <div>
        <nav className="navbar" id = "navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <i className="fa fa-thumbs-up"></i>
            </div>
            <div className="navbar-item">
              Final Countdown
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default Navbar;

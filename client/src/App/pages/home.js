import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"


class Home extends Component {
  render() {
    return (
    <div className="App test">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;

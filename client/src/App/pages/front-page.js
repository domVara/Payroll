import React, { Component } from "react";
import Navbar from '../components/navbar/navbar.js';
import Tiles from '../components/tiles/tiles.js';

class FrontPage extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <Tiles />
      </div>
    );
  }
}

export default FrontPage;

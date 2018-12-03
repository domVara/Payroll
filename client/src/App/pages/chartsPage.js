import React, { Component } from "react";
import BarGraph from "../components/bar-graph/bar-graph.js"


class ChartsPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BarGraph />
      </div>
    );
  }
}

export default ChartsPage;

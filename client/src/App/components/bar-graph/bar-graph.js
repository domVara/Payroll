import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import axios from 'axios'
import "./styles/bar-graph.css"


class BarGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees:[],
      Data:{}
    }}

  render() {

    return (
      <div>
        <Bar
        />
      </div>
    );
  }
}

export default BarGraph;

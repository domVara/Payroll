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


  async componentWillMount(){
      await axios.get("/api/teams/" + this.props.val)
        .then(res => {
          console.log(res.data);
          this.setState({employees : res.data})
        })
      var info = this.setGraph()
      this.setState.Data = {
        labels: info[0],
              datasets:[
                 {
                    label:'Champions League 2017/2018 Top Scorer',
                    data: info[1] ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                  ]
                 }
              ]
           }
    console.log(this.state.Data)
    }

  setGraph(){
    var _label = [];
    var _datasets = [];
    this.state.employees.forEach(employee => {
      _label.push(employee.firstName)
      _datasets.push(employee.hours)
    })
    return [_label, _datasets]



  }

  render() {

    return (
      <div>
        <Bar
          data = {this.state.Data}
          options = {{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default BarGraph;

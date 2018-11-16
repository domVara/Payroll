import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import "./styles/bar-graph.css"


class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels:['Boston','Worcester','Springfield','Lowell','Cambridge','New Bedford'],
        datasets:[
        {
          label: 'Population',
          data:[
            617594,
            181045,
            153021,
            106231,
            105232,
            95072
          ],
          backgroundColor:[
            'rgba(255, 99, 132,  0.6)',
            'rgba(255, 99, 132,  0.6)',
            'rgba(255, 99, 132,  0.6)',
            'rgba(255, 99, 132,  0.6)',
            'rgba(255, 99, 132,  0.6)',
            'rgba(255, 99, 132,  0.6)',
          ]
        }
      ]
      }
    }
  }

  render() {

    return (
      <div>
      <Bar
        data = {this.state.chartData}
      	options={{
      		  maintainAspectRatio: true
          }}
      />

      </div>
    );
  }
}

export default AddEmployeeForm;

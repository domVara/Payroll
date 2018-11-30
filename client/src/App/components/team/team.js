import React, { Component } from "react";
import { Switch, Route, Link, matchPath } from "react-router-dom";

import "./styles/team.css"
import axios from 'axios'

class Team extends Component {
  state={employees:[]}

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    axios.get("/api/teams/" + this.props.val)

      .then(res => {
        console.log(res.data);
        this.setState({employees : res.data})
      })
  }



  render() {

    return (
      <div>
        asdas

      </div>
    );
  }
}


export default Team;

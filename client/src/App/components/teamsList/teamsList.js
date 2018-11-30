import React, { Component } from 'react';
import "./styles/teamsList.css"
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class TeamsList extends Component {

state={teams:[]}

constructor(props) {
  super(props);
  let employee = "employee"
}

componentWillMount(){
    axios.get('/api/teams/')
      .then(res => {
        console.log(res.data)
        this.setState({teams : res.data})
      })
  }

 renderTeams(){
   return(
     this.state.teams.map(team =>
     <div className = "column">
       <a href = {"singleTeam/" + team} id = "folderContainer">
         <h1  id = "teamFontSize"> {team} </h1>
         <i className="fa fa-folder folderSize" aria-hidden="true"></i>
       </a>
      </div>
      )
   );
 }

  render() {
    return(
      <div className="columns" id = "allFoldersContainer">
        {this.renderTeams()}
      </div>

      );
  }
}

export default TeamsList;

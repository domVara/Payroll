import React, { Component } from "react";
import TeamsList from '../components/teamsList/teamsList.js'


class TeamPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <TeamsList />
      </div>
    );
  }
}

export default TeamPage;

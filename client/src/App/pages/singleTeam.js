import React, { Component } from "react";
import Team from '../components/team/team.js'


class SingleTeam extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
      console.log('IT IS MOUNTING....');
      console.log(this.props.match.params.team)
    }

  render() {

    return (
      <div>
        <Team val = {this.props.match.params.team}/>
      </div>
    );
  }
}

export default SingleTeam;

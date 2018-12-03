import React, { Component } from "react";
import "./styles/tiles.css"

class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className = "columns columnsRow">
          <div className = "boxPadding">
            <a href="/employees" className = "box boxSize has-text-centered">
              <strong className = "is-size-4"> Employees </strong>
              <img src = "https://png.pngtree.com/svg/20160816/doctors_263923.png" />
            </a>
          </div>
          <div className = "boxPadding">
            <a  href="/addEmployee" className = "box boxSize has-text-centered">
              <strong className = "is-size-4"> Add new Employee </strong>
              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwrv_TisQ3hwbzKAD_jrgH4Syj60EBuovPQTDHGT9Kd1sE8QG" />
            </a>
          </div>
          <div className = "boxPadding">
            <a href="/team-page" className = "box boxSize has-text-centered">
              <strong className = "is-size-4"> Teams </strong>
              <img src = "http://www.shasthasystemsandsolutions.com/wp-content/uploads/2018/03/Icon_OneTeam.png" />
            </a>
          </div>
        </div>

        
        <div className = "columns columnsRow">
          <div className = "boxPadding">
            <a href="/general-Records-Page" className = "box boxSize has-text-centered">
              <strong className = "is-size-4"> General Records </strong>
              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj1CX4EDRgujlDPq1cOkbs-T3QM3k0T0DisBpPvcHKiQLFwztlg" />

            </a>
          </div>
          <div className = "boxPadding">
            <a href="/termination-Page" className = "box boxSize has-text-centered">
              <strong className = "is-size-4">  Termination </strong>
              <img src = "https://static.thenounproject.com/png/175956-200.png" />
            </a>
          </div>
          <div className = "boxPadding">
            <a href="/chartsPage" className = "box boxSize has-text-centered">
              <strong className = "is-size-4"> Charts/Logging </strong>
              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqE7fehSG_QbXpcYXvs91xa4tU1_04tKLmdyO-fhHW67DbbBu" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
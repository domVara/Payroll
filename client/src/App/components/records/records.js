import React, { Component } from "react";
import "./styles/records.css"

class Records extends Component {

  render() {

    return (
      <div>
        <div className = "columns columnsRow ">
          <div className = "folderPadding">
            <div className = "box folderSize" >
              General Records
            </div>
          </div>
          <div className = "folderPadding">
            <div className = "recordsFolder">
              <div className = "box folderSize" >
                Employee Files
              </div>
            </div>
          </div>
          <div className = "folderPadding">
            <div className = "recordsFolder">
              <div className = "box folderSize" >
                Employee Performance
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Records;

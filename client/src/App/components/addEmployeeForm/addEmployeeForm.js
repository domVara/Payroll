import React, { Component } from "react";
import "./styles/addEmployeeForm.css"

class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id = "addEmployeeFormContainer">
        <div className="field fieldSize">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field fieldSize">
          <label className="label">Last Name</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field fieldSize">
          <label className="label">First Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field fieldSize">
          <label className="label">Last Name</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default AddEmployeeForm;

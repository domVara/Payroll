import React, { Component } from "react";
import "./styles/addEmployeeForm.css"
import axios from 'axios';

class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: ''};
  }
  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/api/employee");
    this.setState({firstName : res.data.firstName})

    console.log(this.firstName)
    console.log("asdas")
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

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
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

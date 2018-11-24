import React, { Component } from "react";
import "./styles/addEmployeeForm.css"

class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
  }

  submit(){
    console.log('employee added')
  }

  render() {

    return (
      <div>
          <div id="heading" >
            <h1>ADD EMPLOYEE FORM</h1>
          </div>
          <div id = "addEmployeeFormContainer">
          <div class="columns">
          <div class="column">
              <div className="field fieldSize">
                  <label className="label">Employee ID</label>
                  <div className="control ">
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
                <div className="control ">
                  <input className="input" type="text" placeholder="Text input" />
                </div>
              </div>
              <div className="field fieldSize">
                <label className="label">Team</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </div>
              </div>

              <div class="field">
              <label class="label">Wage</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Salary</option>
                    <option>Hourly</option>
                  </select>
                </div>
              </div>
               </div>
            
          </div>

          <div class="column">
            
            <div className="field fieldSize">
              <label className="label">Title</label>
              <div className="control ">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field fieldSize">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field fieldSize">
              <label className="label">Phone</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div className="field fieldSize">
              <label className="label">Location</label>
              <div className="control ">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>

            <div class="control">
                <button onClick={this.submit}
                class='button button-blue' 
                style={{margin: '10px 10px 10px 10px', alignSelf: 'end', backgroundColor: 'cyan'}}>
                Submit
                </button>
            </div>
          </div>  
          </div>  
          </div>
       </div>   
    );
  }
}

export default AddEmployeeForm;

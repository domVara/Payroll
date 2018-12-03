import React, { Component } from "react";
import "./styles/addEmployeeForm.css"
import axios from 'axios'
import history from '../../../history';


class AddEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      team: '',
      salary: '',
      positionTitle: '',
      email: '',
      phoneNumber: '',
      branchLocation: '',
    }
  }


  onSubmit(){
      const employee = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        team: this.state.team,
        salary: this.state.salary,
        positionTitle: this.state.positionTitle,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        branchLocation: this.state.branchLocation,
      }

      axios.post('api/employee', {
        firstName: employee.firstName,
        lastName: employee.lastName,
        team: employee.team,
        salary: employee.salary,
        positionTitle: employee.positionTitle,
        email: employee.email,
        phoneNumber: employee.phoneNumber,
        branchLocation: employee.branchLocation,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.error(error);
      });
      
      history.replace('/front-page');
  }

  render() {

    return (
      <div>
          <div id="heading" >
            <h1 className="title">ADD EMPLOYEE FORM</h1>
          </div>
          <div id = "addEmployeeFormContainer">
          <div className="columns">
            <div className="column">
                <div className="field fieldSize">
                  <label className="label">First Name</label>
                  <div className="control">
                    <input className="input"
                      type="text"
                      onChange={e => this.setState({firstName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="field fieldSize">
                  <label className="label">Last Name</label>
                  <div className="control ">
                    <input className="input"
                      type="text"
                      onChange={e => this.setState({lastName: e.target.value})}
                    />
                  </div>
                </div>
                <div className="field fieldSize">
                  <label className="label">Team</label>
                  <div className="control">
                    <input className="input"
                      type="text"
                      onChange={e => this.setState({team: e.target.value})}
                    />
                  </div>
                </div>

                <div className="field fieldSize">
                  <label className="label">Salary</label>
                  <div className="control">
                    <input className="input"
                      type="text"
                      onChange={e => this.setState({salary: e.target.value})}
                    />
                  </div>
                </div>

            </div>

            <div className="column">

              <div className="field fieldSize">
                <label className="label">Position Title</label>
                <div className="control ">
                  <input className="input"
                    type="text"
                    onChange={e => this.setState({positionTitle: e.target.value})}
                  />
                </div>
              </div>

              <div className="field fieldSize">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input"
                    type="text"
                    onChange={e => this.setState({email: e.target.value})}
                  />
                </div>
              </div>

              <div className="field fieldSize">
                <label className="label">Phone Number</label>
                <div className="control">
                  <input className="input"
                    type="text"
                    onChange={e => this.setState({phoneNumber: e.target.value})}
                  />
                </div>
              </div>

              <div className="field fieldSize">
                <label className="label">Branch Location</label>
                <div className="control ">
                  <input className="input"
                    type="text"
                    onChange={e => this.setState({branchLocation: e.target.value})}
                  />
                </div>
              </div>

              <div className="control">
                  <button onClick={e => this.onSubmit()}
                  className='button button-blue'
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

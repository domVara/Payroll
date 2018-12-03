import React, { Component } from 'react';
import history from '../../history';

class AddEmployeeError extends Component {

    goTo(path){
        history.replace(path)
    }
  
  render() {
    
    return (
      <div className="container">
            <div>
              <h1>
                Add Employee Error! Please Fill Out All Employee Info.{' '}
                <a
                  style={{ cursor: 'pointer', color: 'blue'}}
                  onClick={this.goTo.bind(this, 'addEmployee')}
                >
                  (Go To Add Employee)
                </a>
    
              </h1>

            </div>
    
      </div>
    );
  }
}

export default AddEmployeeError;

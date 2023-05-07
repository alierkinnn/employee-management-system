import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export const withParams = Component => props => {
  let params = useParams();
  return <UpdateEmployeeComponent  {...props} params={params} />;
}


class UpdateEmployeeComponent extends Component {
  
  constructor(props){
    super(props)

    let {id} = props.params;
    this.state = {
        id: id,
        employee : {}
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changLastNameHandler = this.changLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);

    this.updateEmployee = this.updateEmployee.bind(this);

  }
  
  changeNameHandler = (event) => {
    this.setState({name : event.target.value});
  }

  changLastNameHandler = (event) => {
    this.setState({lastName : event.target.value});
  }

  changeEmailHandler = (event) => {
    this.setState({emailId : event.target.value});
  }

  componentDidMount(){
    EmployeeService.getEmployeebyId(this.state.id).then((res) =>{
      let employee = res.data;
      this.setState({name : employee.name,
                    lastName : employee.lastName,
                    emailId : employee.emailId
      });
      console.log(employee.id);
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {name : this.state.name, lastName : this.state.lastName, emailId: this.state.emailId};
    console.log("employee => " + JSON.stringify(employee));

    EmployeeService.updateEmployee(employee, this.state.id);

  }


  render() {
    return (

      <div>
        <div className="container">
            <div className="row ">
                <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
                    <h3 className="text-center">Update Employee</h3>
                    <div className="card-body">
                        <form>
                          <div className="form-group">
                            <label>Name</label>
                            <input placeholder="Name" name="name" className="form-control"
                              value={this.state.name} onChange={this.changeNameHandler}></input>
                          </div>
                          <div className="form-group">
                            <label>Last Name</label>
                            <input placeholder="Last Name" name="lastName" className="form-control"
                              value={this.state.lastName} onChange={this.changLastNameHandler}></input>
                          </div>
                          <div className="form-group">
                            <label>Email</label>
                            <input placeholder="Email" name="emailId" className="form-control"
                              value={this.state.emailId} onChange={this.changeEmailHandler}></input>
                          </div>

                          <button className="btn btn-success m-3" onClick={this.updateEmployee}>Update</button>
                          <Link className="btn btn-danger" to={{pathname : "/"}}>Cancel</Link>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
      </div>

    )
  }
}

export default withParams(UpdateEmployeeComponent);
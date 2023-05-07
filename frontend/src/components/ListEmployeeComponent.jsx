import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

class ListEmployeeComponent extends Component {

  constructor(props){
    super(props)

    this.state = {
        employees: []
    }

    this.deleteEmployee = this.deleteEmployee.bind(this);

  }
  
  componentDidMount(){
    EmployeeService.getEmployees().then((res) => {
        this.setState({employees: res.data});

    });
  }

  deleteEmployee(id){
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({employees : this.state.employees.filter(employee => employee.id !== id)});
    });
  }


  render() {
    return (
      <div className="m-5">
        <h2 className="text-center">Employees List</h2>
        <span className="m-3">
          <Link className="btn btn-secondary" to ={{pathname :"add-employee"}}>Add Employee</Link>
        </span>
        <div className="row m-3">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.employees.map(
                            employee => 
                            <tr key={employee.id}>
                                <td> {employee.name} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.emailId} </td>
                                <td>
                                  <div className="d-flex justify-content-around">
                                    <Link className="btn btn-info" to={`/update-employee/${employee.id}`}>Update</Link>
                                    <button className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                    <Link className="btn btn-primary" to={`/view-employee/${employee.id}`}>View</Link>
                                  </div>
                                 
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div> 
    )
  }

}

export default ListEmployeeComponent
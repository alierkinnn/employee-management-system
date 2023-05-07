import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Params } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export const withParams = Component => props => {
  let params = useParams();
  return <ViewEmployeeComponent  {...props} params={params} />;
}


class ViewEmployeeComponent extends Component {
  
  constructor(props){
    super(props)

    let {id} = props.params;
    this.state = {
        id: id,
        employee : {}
    }
  }
  


  componentDidMount(){
    EmployeeService.getEmployeebyId(this.state.id).then(res => {
        this.setState({employee : res.data});
    });
  }


  render() {
    return (

      <div>
        <div className="card col-md-6 offset-md-3 mt-5">
            <div className="card-header">
                Employee Details
            </div>
            <div className="">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name : {this.state.employee.name}</li>
                    <li className="list-group-item">Lastname : {this.state.employee.lastName}</li>
                    <li className="list-group-item">Email : {this.state.employee.emailId}</li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <Link className="btn btn-danger" to={{pathname : "/"}}>Back</Link>
            </div>
        </div>
      </div>

    )
  }
}

export default withParams(ViewEmployeeComponent);
import axios from "axios";

class EmployeeService{

    getEmployees(){
        return axios.get("http://localhost:8090/api/v1/employees");
    }

    createEmployee(employee){
        return axios.post("http://localhost:8090/api/v1/add", employee);
    }

    getEmployeebyId(employeeId){
        return axios.get("http://localhost:8090/api/v1/employees/" + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put("http://localhost:8090/api/v1/employees/" + employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete("http://localhost:8090/api/v1/employees/" + employeeId);
    }

}

export default new EmployeeService()
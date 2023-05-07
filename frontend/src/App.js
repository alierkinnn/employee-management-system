import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent/>}></Route>
          <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
          <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
          <Route path="/view-employee/:id" element={<ViewEmployeeComponent/>}></Route>
        </Routes>
        </div>
    </div>
    
    
  );
}

export default App;

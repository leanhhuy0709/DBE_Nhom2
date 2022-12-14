import Login from './page/Login/Login'
import Home from './page/Home/Home'
import Project from './page/Project/Project'
import Supplier from './page/Supplier/Supplier'
import Employee from './page/Employee/Employee'
import Activity from './page/Activity/Activity'
import Product from './page/Product/Product'
import NavigationBar from './component/NavigationBar/NavigationBar'

import User from './page/User/User'

import React from 'react';

import {Route, BrowserRouter, Routes} from 'react-router-dom';

import VerticalBar from './component/VerticalBar/VerticalBar';

function App() {
  const user = {"username": "huy123", "id": 10, "ssn": "12312523", "fname": "Huy", "mname": "Anh", "lname": "Le", "position": "Designer", "bdate": "2002-09-07", "address": "KTX"};
  const projects = [{"id": 1, "name": "Tesla Car", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {"id": 10, "fname": "Huy", "startDate": "07-09-2022", "period": "50 days"}, "supplier": [{"SID": 10, "Location": "New York", "PartID": 1, "Quantity": 4, "Price": 1000}, {"SID": 13, "Location": "Brazil", "PartID": 5, "Quantity": 100, "Price": 100000}], "group": [{"GNumber": 1, "Name": "Axit", "Location": "Washington"}]},
  {"id": 2, "name": "Car for young people", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {"id": 7, "fname": "Huynh", "startDate": "07-06-2022", "period": "50 days"}, "supplier": [{}], "group": [{}]},
  {"id": 4, "name": "Mini car", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {"id": 4, "fname": "Duy", "startDate": "07-03-2022", "period": "50 days"}, "supplier": [{}], "group": [{}]},
  {"id": 8, "name": "Cheap car", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {"id": 6, "fname": "Thuy", "startDate": "07-10-2022", "period": "50 days"}, "supplier": [{}], "group": [{}]},];
  const suppliers = [{'id': '1121', 'name': 'Macero', 'location':'London', 'partid': '1934', 'date': '20221201', 'quantity': '1000', 'price': '1000'},
                     {'id': '1122', 'name': 'Joayka', 'location':'London', 'partid': '1634', 'date': '20221211', 'quantity': '1000', 'price': '2000'},];
  const employees = [{'id': '1121', 'fname': 'Hung', 'lname': 'Quoc', 'mname': 'Le', 'ssn': '1234', 'bdate': '20020816', 'address':'London', 'salary': '1234'},
  {'id': '1122', 'fname': 'Nhan', 'lname': 'Quoc', 'mname': 'Le', 'ssn': '1235', 'bdate': '20020916', 'address':'London', 'salary': '1234'},];
  
  const products = [{'id': '1121', 'name': 'Mirror'},
  {'id': '1169', 'name': 'Car'},
  {'id': '19621', 'name': 'ABC'},]
  const activity = [{}];


  if(localStorage.getItem('usr'))
  return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <VerticalBar/>
      <Routes>
        
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/project' element = {<Project projects = {projects} user = {user}/>}/>
        <Route path = '/supplier' element = {<Supplier suppliers = {suppliers}/>}/>
        <Route path = '/employee' element = {<Employee employees = {employees}/>}/>
        <Route path = '/product' element = {<Product products = {products}/>}/>
        <Route path = '/activity' element = {<Activity/>}/>
        <Route path = '/user' element = {<User user={user}/>}/>
        
      </Routes>
    </BrowserRouter>
  );
  else
  return (<BrowserRouter>
    <Routes>

      <Route path = '/*' element = {<Login/>}/>
      
    </Routes>
  </BrowserRouter>);
}

export default App;

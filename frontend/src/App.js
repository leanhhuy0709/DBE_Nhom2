import Login from './page/Login/Login'

import Home from './page/Home/Home'

import Project from './page/Project/Project'

import Activity from './page/Activity/Activity'

import NavigationBar from './component/NavigationBar/NavigationBar'

import User from './page/User/User'

import React from 'react';
import VerticalBar from './component/VerticalBar/VerticalBar'

import {Route, BrowserRouter, Routes} from 'react-router-dom';

import VerticalBar from './component/VerticalBar/VerticalBar';

function App() {
  const user = {"username": "huy123", "fname": "Huy", "mname": "Anh", "lname": "Le", "position": "Designer"};
  const projects = [{"id": 1, "name": "ABC", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {}, "model": [{}], "supplier": [{}], "group": [{}]},
  {"id": 1, "name": "ABC", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {}, "model": [{}], "supplier": [{}], "group": [{}]},
  {"id": 1, "name": "ABC", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {}, "model": [{}], "supplier": [{}], "group": [{}]},
  {"id": 1, "name": "ABC", "description": "lorem ipsum", "cost_efficiency": -30, "cost": 10000, "leader": {}, "model": [{}], "supplier": [{}], "group": [{}]},
];
  const activity = [{}];


  if(localStorage.getItem('usr'))
  return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <VerticalBar/>
      <Routes>
        
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/project' element = {<Project projects = {projects}/>}/>
        <Route path = '/activity' element = {<Activity/>}/>
        <Route path = '/user' element = {<User/>}/>
        
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

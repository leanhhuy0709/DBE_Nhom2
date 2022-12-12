import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './verticalBar.css'
/*
<div className='border-top border-bottom pt-3 pb-3 text-center fw-bold border-dark' style = {{marginTop: "30px"}}>
            <a href="/project" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i className='fas fa-project-diagram'/> Project
            </a>
          </div> */
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: "fixed" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#3C6B9F" style={{width: "20px"}}>
          
          <a className="size-bar-block" href = "/project" style={{textDecoration: "none", marginTop: "30px"}}>
              <div className='border-top border-bottom text-dark p-2 border-dark' style={{fontSize: "25px"}}>
              <i className='fas fa-project-diagram ms-5' style={{fontSize: "25px"}}/> Project
              </div>
          </a>
          <a className="size-bar-block" href = "/supplier" style={{textDecoration: "none"}}>
              <div className='border-bottom text-dark p-2 border-dark' style={{fontSize: "25px"}}>
              <i className='fas fa-caravan ms-5' style={{fontSize: "25px"}}/> Supplier
              </div>
          </a>
          <a className="size-bar-block" href = "/product" style={{textDecoration: "none"}}>
              <div className='border-bottom text-dark p-2 border-dark' style={{fontSize: "25px"}}>
              <i className='fas fa-car ms-5' style={{fontSize: "25px"}}/> Product
              </div>
          </a>
          <a className="size-bar-block" href = "/employee" style={{textDecoration: "none"}}>
              <div className='border-bottom text-dark p-2 border-dark' style={{fontSize: "25px"}}>
              <i className='fas fa-user-alt ms-5' style={{fontSize: "25px"}}/> Employee
              </div>
          </a>

          
          

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

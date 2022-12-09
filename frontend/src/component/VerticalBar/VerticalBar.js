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

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: "fixed" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#3C6B9F" style={{width: "20px"}}>
          <div className='border-bottom pt-3 pb-3 text-center fw-bold border-dark'>
            <a href="/project" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i class='fas fa-project-diagram'/> Project
            </a>
          </div>
          <div className='border-bottom pt-3 pb-3 text-center fw-bold border-dark'>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i className='fas fa-project-diagram'/> Project
            </a>
          </div>
          <div className='border-bottom pt-3 pb-3 text-center fw-bold border-dark'>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i class='fas fa-project-diagram'/> Project
            </a>
          </div>
          <div className='border-bottom pt-3 pb-3 text-center fw-bold border-dark'>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i class='fas fa-project-diagram'/> Project
            </a>
          </div>
          <div className='border-bottom pt-3 pb-3 text-center fw-bold border-dark'>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i class='fas fa-project-diagram'/> Project
            </a>
          </div>
          <div className='border-bottom pt-3 pb-3 text-center fw-bold border-dark'>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <i class='fas fa-project-diagram'/> Project
            </a>
          </div>
          
          

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

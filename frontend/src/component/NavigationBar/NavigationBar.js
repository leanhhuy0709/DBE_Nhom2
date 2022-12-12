import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from 'react';
import './navigationbar.css';


function NavigationBar({user}) {
    return (
    <Navbar expand="lg" className="bg-blue">
        <Container className = "m-2">
            
            <Navbar.Brand style={{color: "white"}} href="/"><i className='fas fa-user-alt ms-5 float-left' style={{fontSize: "25px"}}/> OEM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link style={{color: "white"}}>{user?user.fname + ' ' + user.mname + ' ' + user.lname:''}</Nav.Link>
                <Nav.Link style={{color: "white"}}>{user?user.position:''}</Nav.Link>
                <NavDropdown title={
        <span className="text-white my-auto">More</span>
    } id="basic-nav-dropdown">
                <NavDropdown.Item href="/user">User Info</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick = {()=>(localStorage.removeItem('usr'))}>
                    {localStorage.getItem('usr') == null?'Login' : 'Logout'}
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    );
}

export default NavigationBar;

import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';

function Employee({employees}) {
  return (
  <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className="p-3 m-3" style={{backgroundColor: "red"}}>
    <b style={{fontSize: "26px"}}>Employee </b>
    <div style={{display: "inline-block"}}>
    <Button className="fw-bold">+</Button> 
    <Button><i className="fa fa-search"/></Button>
    </div>
    
    </Container>
    <Table striped style = {{width: "80%"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>FName</th>
          <th>Lname</th>
          <th>MName</th>
          <th>SSN</th>
          <th>Birthday</th>
          <th>Address</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((item, idx) => (
          <tr>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.mname}</td>
          <td>{item.ssn}</td>
          <td>{item.bdate}</td>
          <td>{item.address}</td>
          <td>{item.salary}</td>
          <td><Button><i className="gg-trash"/></Button></td>
        </tr>
        ))}

        
      </tbody>
    </Table>
  </Container>
  );
}



export default Employee;

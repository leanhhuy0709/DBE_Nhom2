import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';



function Project({projects}) {


  return (
  <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className="p-3 m-3" style={{backgroundColor: "red"}}>
    <b style={{fontSize: "26px"}}>Project </b>
    <div style={{display: "inline-block"}}>
    <Button className="fw-bold">+</Button> 
    <Button><i className="fa fa-search"/></Button>
    </div>
    
    </Container>
    <Table striped style = {{width: "80%"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Cost Efficiency</th>
          <th>Cost</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {projects.map((item, idx) => (
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.cost_efficiency}</td>
          <td>{item.cost}</td>
          <td><Button><i className="gg-trash"/></Button></td>
        </tr>
        ))}

        
      </tbody>
    </Table>
  </Container>
  );
}



export default Project;

import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';



function Supplier({suppliers}) {
  return (
  <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className="p-3 m-3" style={{backgroundColor: "red"}}>
    <b style={{fontSize: "26px"}}>Supplier </b>
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
          <th>Location</th>
          <th>Part ID</th>
          <th>Date</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((item, idx) => (
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.location}</td>
          <td>{item.partid}</td>
          <td>{item.date}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td><Button><i className="gg-trash"/></Button></td>
        </tr>
        ))}

        
      </tbody>
    </Table>
  </Container>
  );
}



export default Supplier;


import {Container, Table} from 'react-bootstrap';
import React, {useState} from 'react';

function User({user}) {
  //const user = {"username": "huy123", "id": 10, "ssn": "12312523", "fname": "Huy", "mname": "Anh", "lname": "Le", "position": "Designer", "bdate": "2002-09-07", "address": "KTX"};
  return (
    <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className = 'border border-dark rounded'>
        <Table>
            <thead>
              <tr><td>User Infomation</td><td></td></tr>
            </thead>
            <tbody>
              <tr><td>Name</td><td> {user.fname + ' ' + user.mname + ' ' + user.lname} </td></tr>
              <tr><td>ID</td><td> {user.id}</td></tr>
              <tr><td>SSN</td><td> {user.ssn}</td></tr>
              <tr><td>Position</td><td> {user.position}</td></tr>
              <tr><td>Date of birth</td><td> {user.bdate.substring(0, 10)}</td></tr>
              <tr><td>Address</td><td> {user.address}</td></tr>
              <tr><td>Username</td><td> {user.username}</td></tr>
            </tbody>
        </Table>
    </Container>
    </Container>
  );
}

export default User;
import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';

function Employee({employees}) {
  const [myEmployees, setMyEmployees] = useState(employees);
  const handleSearch = () => {
    let kw = document.getElementById("search_input").value;
    setMyEmployees(employees.filter((item)=>item.fname.toLowerCase().includes(kw.toLowerCase())));
  }
  return (
  <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className="p-3 m-3">
    <div className='project-text-group'><b style={{fontSize: "26px"}}>Employee </b>
    <input id="search_input" placeholder="Search by name" className='input d-inline-block p-2 rounded ms-2'/>
    <Button className='d-inline-block' style = {{marginLeft: "10px"}} onClick = {handleSearch}><i className="fa fa-search"/></Button>
    </div>
    
    </Container>
    <Table striped style = {{width: "100%"}}>
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
        {myEmployees.map((item, idx) => (
          <tr>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.mname}</td>
          <td>{item.ssn}</td>
          <td>{item.bdate}</td>
          <td>{item.address}</td>
          <td>{item.salary}</td>
        </tr>
        ))}

        
      </tbody>
    </Table>
  </Container>
  );
}



export default Employee;

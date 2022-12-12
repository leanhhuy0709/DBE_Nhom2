import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';



function Supplier({suppliers}) {
  const [mySuppliers, setMySuppliers] = useState(suppliers);
  const handleSearch = () => {
    let kw = document.getElementById("search_input").value;
    setMySuppliers(suppliers.filter((item)=>item.name.toLowerCase().includes(kw.toLowerCase())));
  }
  return (
  <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className="p-3 m-3">
    <div className='project-text-group'><b style={{fontSize: "26px"}}>Supplier </b>
    <input id="search_input" placeholder="Search by name" className='input d-inline-block p-2 rounded ms-2'/>
    <Button className='d-inline-block' style = {{marginLeft: "10px"}} onClick = {handleSearch}><i className="fa fa-search"/></Button>
    </div>
    
    </Container>
    <Table striped style = {{width: "100%"}}>
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
        {mySuppliers.map((item, idx) => (
          <tr key ={idx}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.location}</td>
          <td>{item.partid}</td>
          <td>{item.date}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
        </tr>
        ))}

        
      </tbody>
    </Table>
  </Container>
  );
}



export default Supplier;

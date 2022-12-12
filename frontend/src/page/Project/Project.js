import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import './project.css';
import {Post, Get} from '../../axios/Axios';

const LeaderTable = ({leader}) => {
  return (<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>Period</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{leader.fname}</td>
          <td>{leader.startDate}</td>
          <td>{leader.period}</td>
        </tr>
      </tbody>
    </Table>
  </>)
}

const SupplierTable = ({supplier}) => {
  //"supplier": [{"SID": 10, "Location": "New York", "PartID": 1, "Quantity": 4, "Price": 1000}]
  return (<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>SID</th>
          <th>Location</th>
          <th>PartID</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {supplier.map((item, idx) => (
        <tr key = {idx}>
          <td>{item.SID}</td>
          <td>{item.Location}</td>
          <td>{item.PartID}</td>
          <td>{item.Quantity}</td>
          <td>{item.Price}</td>
        </tr>
        ))}
        
      </tbody>
    </Table>
  </>)
}

const GroupTable = ({group}) => {
  //"group": [{"GNumber": 1, "Name": "Axit", "Location": "Washington"}]
  return (<>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>GNumber</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {group.map((item, idx) => (
          <tr key = {idx}>
            <td>{item.GNumber}</td>
            <td>{item.Name}</td>
            <td>{item.Location}</td>
          </tr>
          ))}
          
        </tbody>
      </Table>
    </>)
}

const getTable = (number, value) => {
  //1: Leader, 2: Supplier. 3: Group
  switch (number)
  {
    case 0:
      return (<LeaderTable leader = {value.leader}/>);
    case 1:
      return (<SupplierTable supplier = {value.supplier}/>);
    case 2:
      return (<GroupTable group = {value.group}/>);
  }
  
}



function Project({user, projects}) {
  const [modalShow, setModalShow] = useState(false);
  const [aPShow, setAPShow] = useState(false);
  const [myProjects, setMyProjects] = useState([]);
  useEffect(()=>{
    setMyProjects(projects);
  }, []);
  const handleSearch = () => {
    let kw = document.getElementById("search_input").value;
    setMyProjects(projects.filter((item)=>item.name.toLowerCase().includes(kw.toLowerCase())));
  }
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(projects[0]);

  const handleAddProject = () => {
    Post("?/update", {
      name: document.getElementById("ap_pname").value,
      description: document.getElementById("ap_d").value,
      cost_efficiency: document.getElementById("ap_ce").value,
      cost: document.getElementById("ap_c").value
    })
    .then((res)=> {alert(res.result)})
    .catch((err)=> alert(err));
  }

  const handleDelete = (pid) => {
    Post("?/delete/" + String(pid), {})
    .then((res)=> {alert(res.result)})
    .catch((err)=> alert(err));
  }

  return (
    <>
  <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className="p-3 m-3">
    <div className='project-text-group'><b style={{fontSize: "26px"}}>Project </b>
    <input id="search_input" placeholder="Search by name" className='input d-inline-block p-2 rounded ms-2'/>
    <Button className='d-inline-block' style = {{marginLeft: "10px"}} onClick = {handleSearch}><i className="fa fa-search"/></Button>
    </div>
    
    <div className='project-button-group'>
    <Button className="fw-bold" onClick={() => setAPShow(true)}>+</Button> 
    </div>
    
    </Container>
    <Table striped style = {{width: "100%"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Cost Efficiency</th>
          <th>Cost</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {myProjects.map((item, idx) => (
          <tr key = {idx}>
          <td>{item.id}</td>
          <td className='project_name_button' onClick={() => {setModalShow(true);setValue(item);setNumber(0);}}>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.cost_efficiency}</td>
          <td>{item.cost}</td>
          <td><Button style={{display: user.id == item.leader.id ? "block" : "none"}} onClick={() => {handleDelete(item.id)}}><i className="gg-trash"/></Button></td>
        </tr>
        ))}

        
      </tbody>
    </Table>
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='bg-blue text-white'>
        <Modal.Title id="contained-modal-title-vcenter">
            {() => {switch(number){case 0: return "Leader Table";case 1: return "Supplier Table";case 2: return "Group Table"}}}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button className='me-3 mb-3' onClick ={()=> setNumber(0)}>Leader</Button>
          <Button className='me-3 mb-3' onClick ={()=> setNumber(1)}>Supplier</Button>
          <Button className='me-3 mb-3' onClick ={()=> setNumber(2)}>Group</Button>
          {getTable(number, value)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
  </Container>

  
  <Modal
      show={aPShow}
      onHide={() => setAPShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='bg-blue text-white'>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <textarea id="ap_pname" rows="1" cols="1" className='p-2 rounded w-100 my-2' placeholder='Enter Project Name'/>
        <textarea id="ap_ce" rows="1" cols="1" className='p-2 rounded w-100 my-2' placeholder='Enter Cost Efficiency'/>
        <textarea id="ap_c" rows="1" cols="1" className='p-2 rounded w-100 my-2' placeholder='Enter Cost'/>
        <textarea id="ap_d" rows="4" cols="30" className='p-2 rounded w-100 my-2' placeholder='Enter Description'/>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddProject}>Add</Button>
          <Button onClick={() => setAPShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
</>
  );
}



export default Project;

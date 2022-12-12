import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState } from 'react';
import {Table} from 'react-bootstrap';

function Product({products}) {
  const [myProducts, setMyProducts] = useState(products);
  const handleSearch = () => {
    let kw = document.getElementById("search_input").value;
    setMyProducts(products.filter((item)=>item.name.toLowerCase().includes(kw.toLowerCase())));
  }
  return (
  <Container style = {{marginLeft: "300px", width: "calc(100% - 400px)", marginTop: "30px"}}>
    <Container className="p-3 m-3">
    <div className='project-text-group'><b style={{fontSize: "26px"}}>Product</b>
    <input id="search_input" placeholder="Search by name" className='input d-inline-block p-2 rounded ms-2'/>
    <Button className='d-inline-block' style = {{marginLeft: "10px"}} onClick = {handleSearch}><i className="fa fa-search"/></Button>
    </div>
    
    </Container>
    <Table striped style = {{width: "100%"}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {myProducts.map((item, idx) => (
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
        ))}

        
      </tbody>
    </Table>
  </Container>
  );
}



export default Product;

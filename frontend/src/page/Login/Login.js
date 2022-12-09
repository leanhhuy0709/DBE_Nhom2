import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {Button} from 'react-bootstrap';
import './login.css';
import { Navigate } from "react-router-dom";

function Login() {
  function handleLogin()
  {
    localStorage.clear();
    localStorage.setItem('usr', document.getElementById('usr').value);
  }
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <h1>Login</h1><br/>
          <form> {/*method = 'post' onSubmit={handleLogin}*/} 
            <MDBInput name="username" wrapperClass='mb-4' placeholder='Username' id='usr' type='text' size="lg"/>
            <MDBInput name="password" wrapperClass='mb-4' placeholder='Password' id='psw' type='password' size="lg"/>


            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="#">Forgot password?</a>
            </div>
            <Button className="mb-4 w-100" type="submit" href="/" onClick={handleLogin}>Sign in</Button>
          </form>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;



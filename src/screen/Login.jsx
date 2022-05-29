import React, { useState } from 'react';
import {
  Form, Container, Row, Col, Button,
} from 'react-bootstrap';
import axios from 'axios';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const loginSubmit = () => {
    const config = {
      method: 'post',
      url: 'http://localhost:5001/api/login',
      data: {
        Email: email,
        Password: password,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-4">
        <Col md={5}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={loginSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

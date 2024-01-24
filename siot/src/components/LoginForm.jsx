import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const LoginForm = ({ onFormSubmit, toggleAuthMode }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <h1 className="mt-4 mb-4 text-center">로그인</h1>
        <Form onSubmit={(e) => onFormSubmit(e, id, password, true)}>
          <Form.Group controlId="formId" className="mt-3">
            <Form.Label>ID:</Form.Label>
            <Form.Control type="text" value={id} onChange={handleIdChange} />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            로그인
          </Button>
        
        </Form>
      </Col>
    </Row>
  </Container>
);
};

export default LoginForm;

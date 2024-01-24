
import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Form, Button, Row, Col} from "react-bootstrap";


const SignupForm = ({ onFormSubmit, toggleAuthMode }) => {
  const [userId, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(process.env.REACT_APP_SIGNUP_API_GATEWAY_URL, {
        userId,
        name,
        email,
        password,
      });

      console.log('Signup success:', response.data);
      // 회원가입 성공 시 팝업 띄우기
      toast.success('회원가입 성공!', { autoClose: 700 });

      // 성공적으로 회원가입되면, 부모 컴포넌트에서 전달한 onFormSubmit 함수 호출
      onFormSubmit(userId, password, true);
    } catch (error) {
      console.error('Signup failed:', error);
      // 실패 시에도 사용자에게 메시지를 표시하는 등의 로직을 추가할 수 있습니다.
    }
  };

  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <h1 className="mt-4 mb-4 text-center">회원가입</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mt-3">
            <Form.Label>이름:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>이메일:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formUserId" className="mt-3">
            <Form.Label>ID:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your ID"
              value={userId}
              onChange={handleIdChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            회원가입
          </Button>
        </Form>
      </Col>
    </Row>
    <ToastContainer />
  </Container>
);
};

export default SignupForm;

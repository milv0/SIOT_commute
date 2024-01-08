
import React, { useState } from 'react';
import axios from 'axios';

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
      const response = await axios.put('https://sqkdwk2ce6.execute-api.us-west-1.amazonaws.com/users', {
        userId,
        name,
        email,
        password,
      });

      console.log('Signup success:', response.data);

      // 성공적으로 회원가입되면, 부모 컴포넌트에서 전달한 onFormSubmit 함수 호출
      onFormSubmit(userId, password, true);
    } catch (error) {
      console.error('Signup failed:', error);
      // 실패 시에도 사용자에게 메시지를 표시하는 등의 로직을 추가할 수 있습니다.
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />

        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />

        <label>
          ID:
          <input type="text" value={userId} onChange={handleIdChange} />
        </label>
        <br />

        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br /> <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignupForm;

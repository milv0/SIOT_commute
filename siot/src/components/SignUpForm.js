import React, { useState } from 'react';

const SignupForm = ({ onFormSubmit, toggleAuthMode }) => {
  const [id, setId] = useState('');
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

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={(e) => onFormSubmit(e, id, name, email, password, false)}>
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
          <input type="text" value={id} onChange={handleIdChange} />
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

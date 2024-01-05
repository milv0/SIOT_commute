import React, { useState } from 'react';

const LoginForm = ({ onFormSubmit, toggleAuthMode }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h3>로그인</h3>
      <form onSubmit={(e) => onFormSubmit(e, id, password, true)}>
        <label>
          ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br /> <br /> <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;

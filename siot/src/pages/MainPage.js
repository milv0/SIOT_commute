// src/pages/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const MainPage = () => {
  return (
    <div>
      <h1>SIOT Lab 출퇴근</h1>
    
      <div>
        <LoginForm />
      </div>
    {/* 페이지 이동 링크 */}<br/>
      <div>
        <Link to="/signup">회원가입</Link>
      </div>
      <br/><br/>
      <div>
        <Link to="/attendance">Attendance Page</Link>
      </div>
    </div>

  );
};

export default MainPage;

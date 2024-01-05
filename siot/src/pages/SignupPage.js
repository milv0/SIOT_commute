import React from 'react';
import { Link } from 'react-router-dom';
// import MainPage from './MainPage';
import SignupForm from '../components/SignUpForm';

const SignupPage = () => {
  return (
    <div>
        <div>
        <Link to="/">MainPage</Link>
      </div>    
      <div>
        <SignupForm />
      </div>
    {/* 페이지 이동 링크 */}

    </div>

  );
};

export default SignupPage;

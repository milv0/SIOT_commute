import React from 'react';
import { Link } from 'react-router-dom';
// import MainPage from './MainPage';
import SignupForm from '../components/SignUpForm';

const SignupPage = () => {
//   return (
//     <div>
//         <div>
//         <Link to="/">MainPage</Link>
//       </div>    
//       <div>
//         <SignupForm />
//       </div>
//     {/* 페이지 이동 링크 */}

//     </div>

//   );
// };
const handleFormSubmit = (id, password, success) => {
  if (success) {
    console.log(`User ${id} signed up successfully!`);
    // 여기에 회원 가입 성공 시에 수행할 로직 추가
  } else {
    console.log(`User ${id} signup failed.`);
    // 여기에 회원 가입 실패 시에 수행할 로직 추가
  }
};

return (
  <div>
    <div>
     <Link to="/">MainPage</Link>
    </div>  
    {/* SignupForm 컴포넌트에 handleFormSubmit 함수를 onFormSubmit prop으로 전달 */}
    <SignupForm onFormSubmit={handleFormSubmit} />
  </div>
);
};

export default SignupPage;

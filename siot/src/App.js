// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import MainPage from './pages/MainPage';
import AttendancePage from './pages/AttendancePage';
import SignupPage from './pages/SignupPage';

import SlackMessageButton from './components/SlackMessageButton';

// import Slack from './components/slack';
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Routes>
    </Router>
    <SlackMessageButton />

    {/* <Slack/> */}
    </div>
    
    
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

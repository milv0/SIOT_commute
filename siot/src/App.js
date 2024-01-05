// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AttendancePage from './pages/AttendancePage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Routes>
    </Router>
  );
};

export default App;

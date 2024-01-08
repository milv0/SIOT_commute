// src/pages/AttendancePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import AttendanceForm from '../components/AttendanceForm';
const AttendancePage = () => {
  return (
    <div>
      <div>
        <Link to="/">Main Page</Link>
      </div>
      <AttendanceForm />

    </div>
  );
};

export default AttendancePage;

import React, { useState } from 'react';

const AttendanceForm = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [attendanceLog, setAttendanceLog] = useState([]);
  
  const handleClockIn = () => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    setAttendanceLog([...attendanceLog, `출근 - ${currentTime}`]);
    setIsClockedIn(true);
  };
  
  const handleClockOut = () => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    setAttendanceLog([...attendanceLog, `퇴근 - ${currentTime}`]);
    setIsClockedIn(false);
  };
  

  return (
    <div>
      <h1>SIOT 출퇴근 시스템</h1>
      <button onClick={handleClockIn} disabled={isClockedIn}>
        출근
      </button>
      <button onClick={handleClockOut} disabled={!isClockedIn}>
        퇴근
      </button>
      <div>
        <h2>Attendance Log</h2>
        <ul>
          {attendanceLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceForm;

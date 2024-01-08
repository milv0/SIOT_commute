// // AttendanceForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const AttendanceForm = () => {
//   const [isClockedIn, setIsClockedIn] = useState(false);
//   const [attendanceLog, setAttendanceLog] = useState([]);
//   const [message, setMessage] = useState('');

//   const getCurrentDateTime = () => {
//     const now = new Date();
//     const currentDate = now.toLocaleDateString();
//     const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
//     return `${currentDate} ${currentTime}`;
//   };

//   const handleClockIn = async () => {
//     const currentDateTime = getCurrentDateTime();
//     setAttendanceLog([...attendanceLog, `출근 - ${currentDateTime}`]);
//     setIsClockedIn(true);

//     // Send message to Slack
//     await handleSendMessage(`출근 - ${currentDateTime}`);
//   };

//   const handleClockOut = async () => {
//     const currentDateTime = getCurrentDateTime();
//     setAttendanceLog([...attendanceLog, `퇴근 - ${currentDateTime}`]);
//     setIsClockedIn(false);

//     // Send message to Slack
//     await handleSendMessage(`퇴근 - ${currentDateTime}`);
//   };

//   const handleSendMessage = async (msg) => {
//     try {
//       setMessage(msg); // Set message state
//       await axios.post('http://localhost:3001/send-to-slack', { text: msg });
//       console.log('Message sent to Slack');
//     } catch (error) {
//       console.error('Failed to send message to Slack:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>SIOT 출퇴근 시스템</h1>
//       <button onClick={handleClockIn} disabled={isClockedIn}>
//         출근
//       </button>
//       <button onClick={handleClockOut} disabled={!isClockedIn}>
//         퇴근
//       </button>
//       <div>
//         <h2>Attendance Log</h2>
//         <ul>
//           {attendanceLog.map((log, index) => (
//             <li key={index}>{log}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AttendanceForm;
import React, { useState } from 'react';
import axios from 'axios';

const AttendanceForm = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [attendanceLog, setAttendanceLog] = useState([]);
  const [message, setMessage] = useState('');

  const getCurrentDateTime = () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${currentDate} ${currentTime}`;
  };

  const handleClockIn = async () => {
    const currentDateTime = getCurrentDateTime();
    setAttendanceLog([...attendanceLog, `출근 - ${currentDateTime}`]);
    setIsClockedIn(true);

    // Send message to Slack
    await handleSendMessage(`출근 - ${currentDateTime}`);
  };

  const handleClockOut = async () => {
    const currentDateTime = getCurrentDateTime();
    setAttendanceLog([...attendanceLog, `퇴근 - ${currentDateTime}`]);
    setIsClockedIn(false);

    // Send message to Slack
    await handleSendMessage(`퇴근 - ${currentDateTime}`);
  };

  const handleSendMessage = async (msg) => {
    try {
      setMessage(msg); // Set message state
      await axios.post('http://localhost:3001/send-to-slack', { text: msg });
      console.log('Message sent to Slack');
    } catch (error) {
      console.error('Failed to send message to Slack:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">SIOT 출퇴근 시스템</h1>
      <button className="btn btn-primary me-2" onClick={handleClockIn} disabled={isClockedIn}>
        출근
      </button>
      <button className="btn btn-secondary" onClick={handleClockOut} disabled={!isClockedIn}>
        퇴근
      </button>
      <div className="mt-4">
        <h2>Attendance Log</h2>
        <ul className="list-group">
          {attendanceLog.map((log, index) => (
            <li key={index} className="list-group-item">
              {log}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceForm;

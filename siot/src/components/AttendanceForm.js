import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AttendanceForm = () => {
  const [attendanceLog, setAttendanceLog] = useState([]);
  const [employeeStates, setEmployeeStates] = useState({});

  // 새로 고침 창 한번 막기
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "이 페이지를 떠나면 출근/퇴근 기록이 초기화됩니다.";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const getCurrentDateTime = () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${currentDate} ${currentTime}`;
  };

  const handleClockInOut = async (employee) => {
    const currentDateTime = getCurrentDateTime();

    // 기존 상태를 확인하고 출근 또는 퇴근 상태로 변경
    const isClockedIn = employeeStates[employee.id] === 'in';
    const logMessage = isClockedIn
      ? `퇴근 - ${employee.name} (${currentDateTime})`
      : `출근 - ${employee.name} (${currentDateTime})`;

    setAttendanceLog([...attendanceLog, logMessage]);

    // Send message to Slack
    await sendMessageToSlack(logMessage);

    // 출근 또는 퇴근 상태 업데이트
    setEmployeeStates((prevStates) => ({
      ...prevStates,
      [employee.id]: isClockedIn ? 'out' : 'in',
    }));

    // Toast 메시지 띄우기
    toast.success(`${employee.name}님, ${isClockedIn ? '퇴근' : '출근'}되었습니다.`, {
      position: 'top-right',
      autoClose: 700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const sendMessageToSlack = async (message) => {
    try {
      const response = await fetch('https://glo449sd2j.execute-api.us-west-1.amazonaws.com/default/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      });

      const result = await response.json();
      console.log('Lambda에서의 결과:', result);
    } catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);
    }
  };

  // 8명의 인원 정보 (예시)
  const employees = [
    { id: 1, name: '김희찬' },
    { id: 2, name: '전장군' },
    { id: 3, name: '김시헌' },
    { id: 4, name: '박민규' },
    { id: 5, name: '김진' },
    { id: 6, name: '강성은' },
    { id: 7, name: '고명환' },
    { id: 8, name: '곽윤석' },
  ];

  return (

<div className="container mt-5">
  <h1 className="mb-4">SIOT 출퇴근 시스템</h1>

  <div className="row">
    <div className="col-md-6">
      {employees.slice(0, Math.ceil(employees.length / 2)).map((employee, index) => (
        <div key={employee.id} className="mb-3">
          <button
            type="button"
            className={`btn btn-secondary  ${
              employeeStates[employee.id] === 'in' ? 'active' : ''
            }`}
            onClick={() => handleClockInOut(employee)}
            disabled={employeeStates[employee.id] === 'in'}
          >
            {employee.name}
          </button> 
          {employeeStates[employee.id] === 'in' && (
            <button
              type="button"
              className="btn btn-danger ml-2"
              onClick={() => handleClockInOut(employee)}
            >
              퇴근
            </button>
          )}
        </div>
      ))}
    </div>
    <div className="col-md-6">
      {employees.slice(Math.ceil(employees.length / 2)).map((employee, index) => (
        <div key={employee.id} className="mb-3">
          <button
            type="button"
            className={`btn btn-secondary ${
              employeeStates[employee.id] === 'in' ? 'active' : ''
            }`}
            onClick={() => handleClockInOut(employee)}
            disabled={employeeStates[employee.id] === 'in'}
          >
            {employee.name}
          </button>
          {employeeStates[employee.id] === 'in' && (
            <button
              type="button"
              className="btn btn-danger ml-2"
              onClick={() => handleClockInOut(employee)}
            >
              퇴근
            </button>
          )}
        </div>
      ))}
    </div>
  </div>

  <div className="row mt-4">
    <div className="col-md-6">
      <h2>출근 기록</h2>
      <ul className="list-group">
        {attendanceLog
          .filter((log) => log.includes('출근'))
          .map((log, index) => (
            <li key={index} className="list-group-item">
              {log}
            </li>
          ))}
      </ul>
    </div>
    <div className="col-md-6">
      <h2>퇴근 기록</h2>
      <ul className="list-group">
        {attendanceLog
          .filter((log) => log.includes('퇴근'))
          .map((log, index) => (
            <li key={index} className="list-group-item">
              {log}
            </li>
          ))}
      </ul>
    </div>
  </div>

  {/* Toast 컨테이너 */}
  <ToastContainer />
</div>




  
    // <div className="container mt-5">
    //   <h1 className="mb-4">SIOT 출퇴근 시스템</h1>

    //   {/* 인원 선택 버튼 */}
    //   <div className="btn-group">
    //     {employees.map((employee) => (
    //       <div key={employee.id} className="btn-group me-2">
    //         <button
    //           type="button"
    //           className={`btn btn-outline-primary ${employeeStates[employee.id] === 'in' ? 'active' : ''}`}
    //           onClick={() => handleClockInOut(employee)}
    //           disabled={employeeStates[employee.id] === 'in'}
    //         >
    //           {employee.name}
    //         </button>
    //         {employeeStates[employee.id] === 'in' && (
    //           <button
    //             type="button"
    //             className="btn btn-secondary"
    //             onClick={() => handleClockInOut(employee)}
    //           >
    //             퇴근
    //           </button>
    //         )}
    //       </div>
    //     ))}
    //   </div>

    //   {/* 출퇴근 기록 */}
    //   <div className="row mt-4">
    //     <div className="col-md-6">
    //       <h2>출근 기록</h2>
    //       <ul className="list-group">
    //         {attendanceLog
    //           .filter((log) => log.includes('출근'))
    //           .map((log, index) => (
    //             <li key={index} className="list-group-item">
    //               {log}
    //             </li>
    //           ))}
    //       </ul>
    //     </div>
    //     <div className="col-md-6">
    //       <h2>퇴근 기록</h2>
    //       <ul className="list-group">
    //         {attendanceLog
    //           .filter((log) => log.includes('퇴근'))
    //           .map((log, index) => (
    //             <li key={index} className="list-group-item">
    //               {log}
    //             </li>
    //           ))}
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Toast 컨테이너 */}
    //   <ToastContainer />
    // </div>
  );
};

export default AttendanceForm;

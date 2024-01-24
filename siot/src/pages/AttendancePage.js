// src/pages/AttendancePage.js
import React from "react";
import AttendanceForm from "../components/AttendanceForm";
import SlackIntegration from "../components/SlackIntegration";
const AttendancePage = () => {
  return (
    <div>
      <div style={{ marginLeft: "125px" }}>
        <br></br>
        <h3>문의 사항</h3>
        <SlackIntegration />
      </div>
      <AttendanceForm />
    </div>
  );
};

export default AttendancePage;

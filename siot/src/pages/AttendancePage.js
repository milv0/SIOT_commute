// src/pages/AttendancePage.js
import React from "react";
import AttendanceForm from "../components/AttendanceForm";
import SlackIntegration from "../components/SlackIntegration";
const AttendancePage = () => {
  return (
    <div>
      <SlackIntegration />

      <AttendanceForm />
    </div>
  );
};

export default AttendancePage;

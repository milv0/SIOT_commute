// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import ReactDOM from "react-dom";

import MainPage from "./pages/MainPage";
import AttendancePage from "./pages/AttendancePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SlackPage from "./pages/SlackPage";
import CardPage from "./pages/CardPage"
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img
              src={process.env.PUBLIC_URL + "img/siot-logo.jpeg"}
              alt="SIOT Lab Logo"
              height="30" // Adjust the height as needed
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login" onClick={toggleMenu}>
                로그인
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" onClick={toggleMenu}>
                회원가입
              </Nav.Link>
              <Nav.Link as={Link} to="/attendance" onClick={toggleMenu}>
                출퇴근
              </Nav.Link>
              <Nav.Link as={Link} to="/slack" onClick={toggleMenu}>
                Slack Page
              </Nav.Link>
              <Nav.Link as={Link} to="/card" onClick={toggleMenu}>
               상세 페이지
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/slack" element={<SlackPage />} />
          <Route path="/card" element={<CardPage />} />

        </Routes>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

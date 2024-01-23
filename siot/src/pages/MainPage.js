// src/pages/MainPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Navbar 컴포넌트 추가
import { Navbar, Nav } from "react-bootstrap";

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <h2 className="text-primary mt-4 mb-2">Welcome to the Smart I.O.T Lab</h2>
      <h3 className=" mb-4">
        Kyonggi Univrsity Smart Internet of Things Laboratory
      </h3>
    </div>
  );
};

export default MainPage;

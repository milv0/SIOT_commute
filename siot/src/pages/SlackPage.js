// src/pages/SlackPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import SlackIntegration from '../components/SlackIntegration';
const SlackPage = () => {
  return (
    <div>
      <div>
        <Link to="/main">Main Page</Link>
      </div> <br/>
      <SlackIntegration />

    </div>
  );
};

export default SlackPage;

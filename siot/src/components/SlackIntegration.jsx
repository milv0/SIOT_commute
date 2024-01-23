import React, { useState } from 'react';
import { Container, Form, Button, Row, Col ,  Navbar, Nav} from "react-bootstrap";

// Lambda로 Slack Message 전송
const SlackIntegration = () => {
  const [message, setMessage] = useState('');

  const sendMessageToSlack = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_SEND_SLACK_API_GATEWAY_URL, {
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

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button onClick={sendMessageToSlack}>Slack으로 전송</button>
    </div>
  );
};

export default SlackIntegration;

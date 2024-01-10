// import React, { useState } from 'react';
// import axios from 'axios';

// const SlackMessageButton = () => {
//   const [message, setMessage] = useState('');

//   const handleSendMessage = async () => {
//     try {
//       await axios.post('http://localhost:3001/send-to-slack', { text: message });
//       console.log('Message sent to Slack');
//     } catch (error) {
//       console.error('Failed to send message to Slack:', error);
//     }
//   };

//   return (
//     <div>
//       {/* <h1>React Slack 메시지 전송 앱</h1>
//       <textarea
//         placeholder="메시지를 입력하세요"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={handleSendMessage}>메시지 전송</button> */}
//     </div>
//   );
// };

// export default SlackMessageButton;

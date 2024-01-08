// import React from 'react';
// import axios from 'axios';

// const Slack = () => {
//     const sendSlackMessage = async () => {
//         const apiUrl = 'https://sqkdwk2ce6.execute-api.us-west-1.amazonaws.com/siot-slack-lambda';

//         try {
//             const response = await axios.post(apiUrl, {
//                 text: 'Hello from React!',
//             });

//             console.log('Message sent to Slack:', response.data);
//         } catch (error) {
//             console.error('Failed to send message to Slack:', error);
//         }
//     };

//     return (
//         <div>
//             <button onClick={sendSlackMessage}>Send Message to Slack</button>
//         </div>
//     );
// };

// export default Slack;

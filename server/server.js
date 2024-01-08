const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(cors());  // 모든 경로에 대해 CORS 허용

app.use(bodyParser.json());

app.post('/send-to-slack', async (req, res) => {
  const SLACK_WEBHOOK_URL = 'aaa';

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    await axios.post(SLACK_WEBHOOK_URL, { text: req.body.text }, { headers });
    res.status(200).send('Message sent to Slack successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to send message to Slack');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/send-to-slack', async (req, res) => {
  const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

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

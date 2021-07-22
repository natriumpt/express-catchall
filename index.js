const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const app = express();

const port = process.argv[2] || 3000;

app.use(cors());
app.use(json());

app.all(/.*/, (req, res) => {
  const { url, method, headers, body } = req;
  console.log({ url, method, headers, body });
  res.status(200).json({ url, method, headers, body });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

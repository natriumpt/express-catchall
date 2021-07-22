const express = require('express');

const app = express();
const port = process.argv[2] || 3000;

app.all(/.*/, (req, res) => {
  const { url, method, headers } = req;
  console.log({ url, method, headers });
  res.status(200).json({ url, method, headers });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

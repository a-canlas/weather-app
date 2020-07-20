require('dotenv/config');
const express = require('express');
const app = express();

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 4000');
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DadsLocker backend is running.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


// Testing auto-deploy via webhook// deploy test

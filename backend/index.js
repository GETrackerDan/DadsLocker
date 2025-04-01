const express = require('express');
const app = express();
const checkJwt = require('./authMiddleware');

app.get('/', (req, res) => {
  res.send('DadsLocker backend is running.');
});

// Protected route
app.get('/api/protected', checkJwt, (req, res) => {
  res.json({
    message: "Protected content for logged-in users",
    user: req.auth,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

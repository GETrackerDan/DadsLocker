const express = require('express');
const cors = require('cors');
const app = express();
const checkJwt = require('./authMiddleware');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('DadsLocker backend is running.');
});

app.get('/api/protected', checkJwt, (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.auth,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});

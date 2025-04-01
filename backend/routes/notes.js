const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ message: 'Note 1' }, { message: 'Note 2' }]);
});

module.exports = router;

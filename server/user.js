const express = require('express');
const router = express.Router();

router.post('/save', (req, res) => {
  console.log('hello');
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
/*
* User route to handle gets and posts of user data
*/
const express = require('express');
const router = express.Router();
const mockData = require('./data/mockData');

// Save a new user
router.post('/', (req, res) => {
  res.send(req.body);
});

// Get all users
router.get('/', (req, res) => {
  // simulate users with mockdata
  res.send(mockData);
});

module.exports = router;
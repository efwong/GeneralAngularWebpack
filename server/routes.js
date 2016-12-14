var express = require('express');
var router = express.Router();

//router.post('/save');

router.post('/save', function(req, res){
  console.log('hello');
  res.send('processing the login form!');
});

module.exports = router;
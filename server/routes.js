const user = require('./user');

module.exports = (app) =>{
  app.use('/user', user);
  // add more routes here if needed
};
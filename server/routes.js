const user = require('./user');

module.exports = (app) =>{
  app.use('/users', user);
  // add more routes here if needed
};
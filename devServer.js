const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const bodyParser = require('body-parser')
const routes = require('./server/routes');
const app = express();
const compiler = webpack(config);

const PORT = process.env.PORT || 3020;

// load webpack middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// setup routes
app.use(bodyParser.json());
app.use('/', routes);

// setup public directory
app.use('/public', express.static('public'));

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`✅  Listening at http://localhost:${PORT}`);
});

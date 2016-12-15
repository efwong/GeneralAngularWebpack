const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const bodyParser = require('body-parser')
const loadRoutes = require('./server/routes');
const app = express();
const compiler = webpack(config);

const PORT = process.env.PORT || 3020;

// load webpack middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));



// setup routes
app.use(bodyParser.json());
loadRoutes(app);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// setup public directory
app.use('/public', express.static('public'));

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`✅  Listening at http://localhost:${PORT}`);
});

let path = require('path');
let express = require('express');
let webpack = require('webpack');
let config = require('./webpack.config.dev');
let bodyParser = require('body-parser')

let router = express.Router();

var routes = require('./server/routes');

let app = express();
let compiler = webpack(config);

let PORT = process.env.PORT || 3020;
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


//app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/user', routes);
// router.post('/save', function(req, res){
//   console.log('hello');
//   res.send('processing the login form!');
// });


app.use('/public', express.static('public'));

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`✅  Listening at http://localhost:${PORT}`);
});

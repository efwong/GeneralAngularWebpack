var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'], // see .babelrc for config
        include: path.join(__dirname, 'src')
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.s?css$/, loader: 'style!css?importLoaders=2&sourceMap!postcss-loader?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(png|svg|jpg|jpeg)$/, loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'images/[name].[ext]'
        }     
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'server'],
    extensions: ['', '.json', '.js', '.jsx', '.css', '.scss', '.png', '.svg', '.jpg', '.jpeg']
  },
};

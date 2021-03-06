var webpack = require('webpack');
var config = {};

function generateConfig(name) {
  var uglify = name.indexOf('min') > -1;
  var config = {
    entry: './index.js',
    output: {
      path: 'dist/',
      filename: name + '.js',
      sourceMapFilename: name + '.map',
      library: 'axios-for-uniapp',
      libraryTarget: 'umd'
    },
    node: {
      process: false
    },
    devtool: 'source-map'
  };

  config.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ];

  if (uglify) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    );
  }

  return config;
}

['axios-for-uniapp', 'axios-for-uniapp.min'].forEach(function (key) {
  config[key] = generateConfig(key);
});

module.exports = config;

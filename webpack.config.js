var path = require('path');
var webpack = require('webpack');
var cleanBuild = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: __dirname + '/src',
  entry: './index.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js',
    libraryTarget: "umd",
    library: "dgxReactGa",
  },
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['add-module-exports'],
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  plugins: [
    // Cleans the Dist folder after every build.
    new cleanBuild(['dist']),
    // Minification (Utilized in Production)
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      },
      compress: {
        warnings: false,
      },
    }),
  ],
}

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpeg|jpg|png|gif|woff|woff2|eot|ttf|svg|ico)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      // filename: "./index.html"
    })
  ]
};
const path = require("path");

module.exports = {
  entry: './assets/js/App.js',
  mode: 'development',
  output: {
    filename: './main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
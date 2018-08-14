const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|js.flow)$/,
        // exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-3', 'flow', 'react']
        }
      },
      {
        test: /\.mjs$/,
        // include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "app.bundle.js"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 2456,
    publicPath: "http://localhost:2456/dist/",
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  optimization: {
    minimize: false
  }
};
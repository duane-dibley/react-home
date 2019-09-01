const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/app.tsx"],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins() {
                return [autoprefixer("last 2 version")];
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
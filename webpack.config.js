const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main : path.join(__dirname, "./src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // CSS / SASS
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader",
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns:[
        {
          from : "./src/assets/images",
          to : "./assets/images",
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename : "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "Soleil.html",
      template: path.resolve(__dirname, "src/Soleil.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "mercure.html",
      template: path.resolve(__dirname, "src/mercure.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "vénus.html",
      template: path.resolve(__dirname, "src/vénus.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "terre.html",
      template: path.resolve(__dirname, "src/terre.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "mars.html",
      template: path.resolve(__dirname, "src/mars.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "jupiter.html",
      template: path.resolve(__dirname, "src/jupiter.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "saturne.html",
      template: path.resolve(__dirname, "src/saturne.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "uranus.html",
      template: path.resolve(__dirname, "src/uranus.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "neptune.html",
      template: path.resolve(__dirname, "src/neptune.html"),
    }),
    new HtmlWebpackPlugin({
      filename : "contact",
      template: path.resolve(__dirname, "src/contact.html"),
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 4000,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
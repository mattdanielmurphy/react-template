const path = require("path")

module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.join(__dirname, "src"),
                path.join(__dirname, "public")
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
  devtool: "cheap-module-eval-source-map",
  mode: "production"
}

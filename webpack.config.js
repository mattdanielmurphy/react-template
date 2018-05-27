const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.join(__dirname, 'src'),
                path.join(__dirname, 'public')
              ]
            }
          }
        ]
      }
    ]
  }
}

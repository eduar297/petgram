const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (pathData) => {
      return pathData.chunk.name === 'index'
        ? 'app.bundle.js'
        : 'js/[name].bundle.js'
    }
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
          // Los options se pueden poner en .babelrc como un obj: {...presets:[]...}
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"],
          // },
        }
      }
    ]
  }
}

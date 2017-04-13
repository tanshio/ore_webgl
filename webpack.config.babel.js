const webpack = require('webpack')

const DEBUG = process.argv.includes('--debug')
const ENV = `${process.env.NODE_ENV || (DEBUG ? 'development' : 'production')}`
console.log(`
webpack-start
${ENV}
`)

let pluginsList = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': `"${ENV}"`
    }
  })
]

if (ENV === 'development') {
  pluginsList.splice(0, 1)
}

export default {
  entry: {
    main: './app/js/main.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: pluginsList
}

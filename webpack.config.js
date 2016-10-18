module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/public/', 
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
}

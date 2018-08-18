

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    app: './app',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFileName: '[id].js',
  },
  resolve: {
moduleDiroctories: ['node_modules','lib','app','vendor']

},


  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(scss|sass)$/,
        loaders :[
          'style',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass'


        ],

      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ['es2015', 'es2017', 'stage-0', 'react'],
          plugins: ['transform-async-to-generator','transform-async-to-generator', 'transform-regenerator',
            'transform-runtime','transform-decorators-legacy'],
        },
      },
    ],
  },
  sassLoader: {
    includePaths: ['./vendor'],
  },
  plugins: [

  ],
};

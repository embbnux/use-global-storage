const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'useGlobalStorage',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  externals: {
    'rt-storage': {
      commonjs: 'rt-storage',
      commonjs2: 'rt-storage',
      amd: 'rt-storage',
      root: 'RTStorage'
    },
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: false
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
};

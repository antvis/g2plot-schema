/* eslint-disable */
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: './example/index.tsx',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    moment: 'moment',
    '@antv/g2plot': 'G2Plot',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    mainFields: ['module', 'browser', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'less-loader', options: { sourceMap: true, javascriptEnabled: true } },
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(
      {
         analyzerMode: 'server',
         analyzerHost: '127.0.0.1',
         analyzerPort: 8889,
         reportFilename: 'report.html',
         defaultSizes: 'parsed',
         openAnalyzer: true,
         generateStatsFile: false,
         statsFilename: 'stats.json',
         statsOptions: null,
         logLevel: 'info'
      }
  ),
  ],
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true,
  },
};

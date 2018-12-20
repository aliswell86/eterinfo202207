const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');


const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
  entry: paths.serverRenderJs,
  // Node.js 내장 모듈과 충돌이 일어나지 않으며 require 로 불러올 수 있는 형태로 번들링합니다
  target: 'node',
  output: {
    // 정해준 서버 경로에 render.js 라는 파일명으로 저장합니다
    path: paths.ssrBuild,
    filename: 'render.js',
    libraryTarget: 'commonjs2' // node 에서 불러올 수 있도록, commonjs2 스타일로 번들링 합니다
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        // oneOf는 내부의 모든 로더를 시도해보고, 해당되는 것이 없다면
        // 최하단의 file-loader를 실행시킵니다
        oneOf: [
          // 자바스크립트는 Babel 을 통하여 트랜스파일링합니다
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
          /* css와 scss 파일을 불러올 때는
          css-loaders/locals를 실행하는 것이 중요합니다. 
          파일을 따로 만들어내지 않기 때문이죠 */
          {
            test: /\.css$/,
            loader: require.resolve('css-loader/locals'),
          },
          /* scss의 경우에는 CSS Module이 제대로 작동하도록
          production과 동일하게 설정하되 
          여기서도 css-loader/locals를 적용합니다 */
          {
            test: /\.scss$/,
            use: [
              {
                loader: require.resolve('css-loader/locals'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  // localIdentName: '[name]__[local]___[hash:base64:5]'
                  localIdentName: '[local]'
                },
              },
              {
                loader: require.resolve('sass-loader'),
                options: {
                  includePaths: [paths.styles]
                }
              }
            ]
          },
          // 만약에 자바스크립트도, 스타일도 아니라면 파일로 취급합니다.
          // 여기서 emitFile: false 설정이 중요합니다.
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
              // 경로만 만들고, 실제로 파일을 따로 저장하지는 않습니다.
              emitFile: false
            },
          }
        ]
      } 
    ],
  },
  plugins: [
    // 필수 플러그인만 넣어줍니다
    new webpack.DefinePlugin(env.stringified),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ]
};
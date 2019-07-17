'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
       '/reg': {
        target: 'localhost:3000',
        changeOrigin:true,
        pathRewrite: {
          '^/reg': ''
        }
      }
    },

    // Various Dev Server settings  各种开发服务器设置
    host: 'localhost', // can be overwritten by process.env.HOST  可以被process.env.HOST覆盖吗
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined  可以被process.env覆盖。端口，如果端口正在使用，将确定一个空闲端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,//如果在调试devtools中的vue文件时遇到问题，
    // set this to false - it *may* help //将这个设置为false——它*可能*有帮助
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as  Gzip在默认情况下关闭许多流行的静态主机，比如
    // Surge or Netlify already gzip all static assets for you.   urge或Netlify已经为您压缩了所有静态资产
    // Before setting to `true`, make sure to:  在设置为“true”之前，请确保:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

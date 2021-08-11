'use strict'
const merge = require('webpack-merge')
// const prodEnv = require('./prod.env')

// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"',
//   devtool: 'source-map'
// })

module.exports = {
  NODE_ENV: '"development"',
  configureWebpack: {
    devtool: 'source-map'
  }
}
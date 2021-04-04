// import autoprefixer from 'autoprefixer'
// import pxToViewport from 'postcss-px-to-viewport'
const autoprefixer = require('autoprefixer')
// const pxToViewport = require('postcss-px-to-viewport')
const pxToRem = require('postcss-plugin-px2rem')

module.exports = {
  plugins: [
    autoprefixer(),
    pxToRem({
      rootValue: 75,
      unitPrecision: 3,
      exclude: /node_module/,
      selectorBlackList: ['html', 'mint-', 'mt-', 'mpvue-', 'calendar', 'iconfont'],
      propList: ['*', '!border*', '!media*']
    })
  ]
}

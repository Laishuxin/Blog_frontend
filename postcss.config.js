// import autoprefixer from 'autoprefixer'
// import pxToViewport from 'postcss-px-to-viewport'
const autoprefixer = require('autoprefixer')
const pxToViewport = require('postcss-px-to-viewport')

module.exports = {
  plugins: [
    autoprefixer(),
    pxToViewport({
      unitToConvert: 'px',
      viewportWidth: 750,
      unitPrecision: 6,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['wrap'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: [/node_modules/],
      landscape: false,
    }),
  ],
}

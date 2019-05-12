module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      less: {
        strictMath: 'on'
      }
    }
  },
  chainWebpack: config => {
    config.performance.hints(false)
    config.externals({
      vue: 'Vue'
    })
  }
}

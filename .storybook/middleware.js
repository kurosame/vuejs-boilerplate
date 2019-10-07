const proxy = require('http-proxy-middleware')

module.exports = router => {
  router.use(
    '/api',
    proxy({ target: 'http://localhost:3000', changeOrigin: true })
  )
}

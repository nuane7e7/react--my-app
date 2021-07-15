
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy("/api",{
      target:"http://localhost:4000",
      changeOrigin:true,
      pathRewrite:{'^/api':''}
    }),
    proxy("/api1",{
      target:"http://localhost:4001",
      changeOrigin:true,
      pathRewrite:{'^/api1':''}
    }),
  )
}
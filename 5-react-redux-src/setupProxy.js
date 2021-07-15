const proxy = require('http-proxy-middleware')


module.exports = (app)=> {
  app.use(
    proxy('/api1',{
      target:"http://localhost:4000",
      changeOrigin:true,
      pathRewrite:{'^/api1':''}
    }),
    proxy('/api2',{
      target:"http://localhost:4001",
      changeOrigin:true,
      pathRewrite:{'^/api2':''}
    }),
  )
}
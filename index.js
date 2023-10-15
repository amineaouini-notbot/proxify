const { createProxyMiddleware } = require('http-proxy-middleware');
var app = require('express')();


app.use('/', createProxyMiddleware({
  target: 'https://translate.google.com/', 
  changeOrigin: true,
  onError: (err) =>{ console.log("12",err) },
  onProxyRes: (proxyRes)=>{
    console.log('test res')
    return proxyRes
  }
}))


app.listen(8080, ()=>{ console.log('Proxy is on!')})
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = require('express')();

app.use('', createProxyMiddleware({
  target: 'https://youtube.com/', 
  changeOrigin: true,
  onError: (err) =>{ console.log(err) },
  onProxyRes: (proxyRes)=>{
    // console.log(proxyRes.headers)
    return proxyRes
  },
  onProxyReq: (proxyReq)=>{
    console.log(proxyReq.host, proxyReq.path)
    return proxyReq
  }
}))


app.listen(8080, ()=>{ console.log('Proxy is on!')})
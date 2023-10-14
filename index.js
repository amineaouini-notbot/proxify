var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/', proxy('/', {
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
      data = JSON.parse(proxyResData.toString('utf8'));
      data.newProperty = 'exciting data';
      return JSON.stringify(data);
    }
  }));

app.listen(8080, ()=>{ console.log('Proxy is on!')})
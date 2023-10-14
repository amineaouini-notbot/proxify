var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/', proxy('/'));

app.listen(8080, ()=>{ console.log('Proxy is on!')})
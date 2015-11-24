var express = require('express');
var app = express();

// GET /style.css etc
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname, 'node_modules'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port, ipaddress);
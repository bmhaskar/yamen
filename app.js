var app = require('./app_base');
var http = require('http');

module.exports = http.createServer(app);
module.exports.express = app;
module.exports.use = function() {
  app.use.apply(app, arguments);
};
var http = require('http');
var dt = require('./modules/currentDate.js');
var uc = require("upper-case");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("The date and time are currently: ") + dt.myDateTime());
  res.end();
}).listen(8080);
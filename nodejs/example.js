let http = require('http');
let dt = require('./firstModule');
let url = require('url');
//create a server ojbect 
http.createServer(function (req, res) {
  // write response 
  res.writeHead(200, {"content-type":"text/html"});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
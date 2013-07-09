var express = require('express');

var fs  =  require('fs');
var BUFSIZE = ( 4 * 1024 );
var buffer = new Buffer(BUFSIZE);
var filename = '/home/ubuntu/bitstarter/index.html';

var fdr = fs.openSync( filename, 'r');
var myHtml = fs.readFileSync(filename);
fs.closeSync(fdr);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send( myHtml );

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

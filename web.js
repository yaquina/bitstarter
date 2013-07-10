var express = require('express');

var fs  =  require('fs');
var BUFSIZE = ( 4 * 1024 );
var buffer = new Buffer(BUFSIZE);
var filename = 'index.html';


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 response.send(fs.readFileSync( filename, 'utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


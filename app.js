var http = require('http');
var fs = require('fs');
var path = require('path');
var static_contents = require('./modules/static');

server = http.createServer(function (request, response) {
	static_contents(request, response, fs, path);
});
server.listen(8000);
console.log("Running in localhost at port 8000");

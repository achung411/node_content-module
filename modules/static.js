module.exports = function(request, response, fs, path) {
	console.log("Request", request.url);
	
	if (request.url === '/') {
		request.url = "views/index.html";
	}

	switch (path.dirname(request.url)) {
	case '/css':
		response.writeHead(200, {'content-type': 'text/css'});
		fs.readFile('css/'+path.basename(request.url), 'utf8', function (errors, contents) {
			if (errors) {
				response.end("File not found!");
			}
			else {
				response.write(contents);
				response.end();
			}
		});
		break;
	case '/images':
		response.writeHead(200, {'content-type': 'text/html'})
		fs.readFile('images/'+path.basename(request.url), function (errors, contents) {
			if (errors) {
				response.end("File not found!");
			}
			else {
				response.write(contents);
				response.end();
			}
		});
		break;
	default:
		response.writeHead(200, {'content-type': 'text/html'});
		fs.readFile('views/'+path.basename(request.url), function (errors, contents) {
			if (errors) {
				response.end("File not found!");
			}
			else {
				response.write(contents);
				response.end();
			}
		});
	}
}
	// try to serve the file.  it will either succeed or fail
	// if there is an error, respond with an error message.

	// parse the path.  use the path to determine what folder to look
	// for the file (not the extension)
	// utilize the filetype to customize the header (content-type)
var http = require('http');
var url = require('url');

function iniciar(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log(`Request a ${pathname} recibido.`);

		response.writeHead(200, {'Content-Type': 'text/html'});
		var content = route(pathname, handle);
		response.write(content);

		response.end();
	}
	
	http.createServer(onRequest).listen(8080);
	
	console.log('Sevidor iniciado');
}

exports.iniciar = iniciar;



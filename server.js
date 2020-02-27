var http = require('http');
var url = require('url');

function iniciar(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log(`Request a ${pathname} recibido.`);

		route(pathname);

		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('holis');
		response.end();
	}
	
	http.createServer(onRequest).listen(8080);
	
	console.log('Sevidor iniciado');
}

exports.iniciar = iniciar;



var querystring = require('querystring');

function iniciar(response) {
	console.log('Invocado el handler de Iniciar.');

	var body = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Prueba</title>
	</head>
	<body>
		<form action="/subir" method="post">
			<textarea name="text" id="" cols="60" rows="20"></textarea>
			<input type="submit" value="Enviar texto">
		</form>
	</body>
	</html>`;
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(body);
	response.end();
	//return `<h1>Iniciar</h1>`;
}

function subir(response, datos) {
	console.log('Invocado el handler de Subir.');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(`Datos recibidos:
		${querystring.parse(datos)['text']}`);
	response.end();
	//return '<h1>Subir</h1>';
}

exports.iniciar = iniciar;
exports.subir = subir;
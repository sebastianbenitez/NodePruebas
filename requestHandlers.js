function iniciar() {
	console.log('Invocado el handler de Iniciar.');
	return 'Iniciar';
}

function subir() {
	console.log('Invocado el handler de Subir.');
	return 'Subir';
}

exports.iniciar = iniciar;
exports.subir = subir;
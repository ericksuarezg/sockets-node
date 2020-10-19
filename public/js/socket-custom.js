var socket = io(); // funcion de la libreria que esta en el scrip anterior: es el socket
//escuchar sucesos o evetos
socket.on('connect', function() {
    console.log('usuario conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});
//enviar o emitir informacion
socket.emit('enviarMensaje', {
        usuario: 'Ercison',
        mensaje: 'hola marti'
    }, function(resp) { //funcion que sera el callback a la hora de responder en el servidor
        console.log('se disparo el callback ', resp);
    })
    //escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('informacion del servidor ', mensaje);
});
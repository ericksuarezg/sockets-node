const { io } = require('../server');

io.on('connection', (client) => { //funcion principal para la conexion de clientes'escucha'
    console.log('usuario conectado al sevidor');
    //enviando infromacion
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'bienvenido a esta apicacion'
    });

    client.on('disconnect', () => {
        console.log('el susuario se desconecto del servidor');
    })

    //escuchando mensajes del cliente

    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje)

        /*  if (mensaje.usuario) {
             callback({
                 resp: 'todo salio bien'
             });
         } else {
             callback({
                 resp: 'todo salio mal'
             });
         } */

    })
});
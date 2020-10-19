const express = require('express');
const socketIO = require('socket.io'); // me debuelbe una clase socket
const http = require('http');
const path = require('path');

const app = express();

let server = http.createServer(app); //creamdo eñ servidor(como parameptro 'express')

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//la clase Socket debuelve un socket y utiliza como parametro el servidor sobre el que se va a trabajar
//IO es input Output y es la conexion con el bakend
module.exports.io = socketIO(server);
require('./sockets/sockets')



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
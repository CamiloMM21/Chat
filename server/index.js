import express from 'express';
import http from 'http'
import{ Server as SocketServer} from "socket.io";
import morgan from 'morgan';
import cors from "cors"

import {PORT} from './config.js'

const app = express();
//se crea un servidor http
const server = http.createServer(app);
// luego se crea una nueva instancia del soketsServer
const io = new SocketServer(server, {
    //se creo un objeto dentro la ruta http de coneccion, esto nos permite que el fronted se comunicar con el bakend
    cors:{
        origin:'http://localhost:3000',
    },
})

// es para que cualquier servidor externo se pueda conectarse
app.use(cors())
app.use(morgan("dev"));

//se creo un metodo "on"  cuando nosotros nos conectemos el recibe informacion del sokets que se acaba de conectar
// esto es una coneccion inicial
io.on('connection', (socket)=>{
    //el sokets id es como el cliente conectado ya que cada cliente tiene su diferente id
    // console.log(socket.id);

    // se creo un metod "on" esto es para cuando se escuche el evento 
    //cuando pase un evento mensage quiero que lo reciba atraves de un parametro message
    socket.on('message', (message)=>{
        // para reenviar al resto de los clientes "broadcast" es para enviar al resto de clientes y el "emit" esto sirve para emitir o mostrar un valor lo cual tiene 2 parametros como nombre el menssage y el valor
        socket.broadcast.emit('message', {
            body: message,
            from: socket.id
        });
    });
    
});
    


server.listen(PORT, () => {
  console.log('listening on *:3000', PORT);
});
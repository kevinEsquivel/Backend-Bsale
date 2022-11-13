const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/config");

class server {
  constructor() {
    this.app = express();
    this.port = 8080//
    this.paths = {
      producto:   '/api/producto',
    };
    
    
    //!ESTO ES PARA LOS SOCKETS
    this.server = require("http").createServer(this.app); //!para el socket
    this.io = require("socket.io")(this.server);

    this.sockets();
    //!conectandome a la BD
    //this.contectarDB();
    
    //middlewares funcion que siempre se ejecutara cuando se activa el server
    this.middlewares();

    //rutas de la aplicación
    this.routes();
  }

  async contectarDB(){
    await dbConection();
  }
   //!SOCKETS
   sockets() {
    this.io.on("connection",  socket=> {
      console.log("Socket conectado");

      socket.on("disconnect", () => {
        console.log("Socket desconectado");
      });
      /*  socket.on('enviar-mensaje',(payload,callback) => {//!el callback es para imprimir el console.log
        const id = 123;
        callback( id );
        this.io.emit('enviar-mensaje',payload);//*esto es para enviar datos desde el server
      }); */
    });
  }
  middlewares() {
    //directorio publico que se accedera con la ruta /
    this.app.use(express.static('public'))
    this.app.use(cors())
    //Lecura y parseo del body en postman
    this.app.use(express.json());// intentara serealizar la informacion a un json
  }
   
  routes() {
    this.app.use(this.paths.producto, require('../routes/productRoutes')); 
  }

  start() {
    this.app.listen(this.port, () => {
      console.log("servidor en puerto ", this.port);
    }); //port 8080
  }
}
module.exports = server;
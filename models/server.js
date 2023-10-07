const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = 8080;
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor en linea', this.port)
        })
    }
}


module.exports= Server;
/* const http = require("http") */

import { createServer } from "node:http";

const servidor = createServer(
    function (peticion, respuesta) {
        respuesta.writeHead(200, { 'Content-Type': 'text/html' });
        respuesta.end(`<h1>
            Hola a todos
            </h1>
            <img src='https://img.freepik.com/foto-gratis/ejemplo-3d-pluma-que-pone-garrapatas-azules-papel_107791-15675.jpg?semt=ais_hybrid&w=740&q=80'>`)
    }
)

servidor.listen(3001, function () {
    console.log("Ejecutando el servidor en el puerto 3001, URL http://localhost:3001");
})
import onRequest from "./app";

var http = require('http');


const server = http.createServer(onRequest);

server.listen(3001)

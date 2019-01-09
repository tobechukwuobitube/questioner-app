const http = require('http');
const index = require('./index');

const port = process.env.PORT || 4000;

const server = http.createServer(index);

server.listen(port);
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static('public'));

server.listen(3000);

const newConnection = socket => {
    const mouseMessage = data => {
        socket.broadcast.emit('mouse', data);
        // io.sockets.emit('mouse', data);
    };
    console.log(`We have a new connection ${JSON.stringify(socket.id)}`);
    socket.on('mouse', mouseMessage);
};

io.on('connection', newConnection);

console.log('Listening....');

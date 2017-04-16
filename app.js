var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

server.listen(process.env.PORT || 3000);

io.on('connection', function(client){
  console.log('A user connected!');
  client.on('message', function(data){
    console.log('message received', data);
    client.broadcast.emit('message', data);
  })
});
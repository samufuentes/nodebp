//setup Dependencies
var express = require('express');
var io = require('socket.io');
var port = (process.env.PORT || 8881);
var ip = (process.env.IP || '0.0.0.0');
var env = (process.env.NODE_ENV || 'dev');

//-- Setup App --
var app = express();
require('./config.express.js')(express, app);
require('./config.router.js')(app);

var server = app;
/*
//-- Setup Socket.IO --
var io = io.listen(server);
io.sockets.on('connection', function(socket){
  console.log('Client Connected');
  socket.on('message', function(data){
    socket.broadcast.emit('server_message',data);
    socket.emit('server_message',data);
  });
  socket.on('disconnect', function(){
    console.log('Client Disconnected.');
  });
});
*/

//-- Running the server --
app.listen(port, ip);
console.log('Listening on http://'+ip+':' + port );

//-- Expose App --
module.exports = app;


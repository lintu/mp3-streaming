var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var cors = require('cors');

var server = require('http').createServer(app);
var socket = require('socket.io')(server);


app.use(cors());
app.use(express.static(path.join(__dirname, '')));

server.listen(91);

socket.on('connection', (client)=> {
    client.on('event', (data)=> {
        console.log(data);
    });
    client.on('disconnect', ()=> {
        console.log('disconnect request');
    });
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getSong', function() {

});
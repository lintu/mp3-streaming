var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '')));

try {
    var server = app.listen(91, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Streaming server on : ', host, port);
    });
} catch (error) {
    console.log(error);
}

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

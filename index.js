var express = require('express');
var app = express();

app.get('/helloworld', function (req, res) {
    res.send({message: 'ezigen'});
});

app.get('/secondroute', function (req, res) {
    res.send({message: 'success'});
});

app.listen(3000, function () {
    console.log('The app listening on port 3000!');
});
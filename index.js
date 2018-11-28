var express = require('express');
var app = express();

app.get('/helloworld', function (req, res) {
    res.send({message: 'ezigen'});
});

app.listen(3000, function () {
    console.log('The app listening on port 3000!');
});
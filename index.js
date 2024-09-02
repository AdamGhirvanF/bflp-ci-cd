var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello Adam Ghirvan Fadhil" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(3000);
module.exports = app;

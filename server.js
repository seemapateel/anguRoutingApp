var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));



app.listen(3030);
console.log("Seema, server listening at 3030");

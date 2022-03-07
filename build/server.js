"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var textRoutes = require('./routes/texts');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(textRoutes);
app.listen("5000", function () {
    console.log("server running in 5000");
});

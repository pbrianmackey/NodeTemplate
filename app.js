"use strict"

let http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

app.set("view engine", "jade");

//set the public static resources folder
app.use(express.static(__dirname + "/public"));

//Map the routes
controllers.init(app);

//bower is a facility for dling client side code

app.get("/api/users", function(request, response){
  response.set("Content-type", "application/json");
  response.send({name: "Brian", isValid: true});
});

var server = http.createServer(app);

server.listen(3333);

"use strict"

let http = require("http");
var express = require("express");
var app = express();

app.get("/", function(request, response){
  response.send("<html><body><h1>hello</h1></body></html>")
})

app.get("/api/users", function(request, response){
  response.set("Content-type", "application/json");
  response.send({name: "Brian", isValid: true});
});

var server = http.createServer(app);

server.listen(3333);

"use strict"

var http = require("http");
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

app.get("/api/sql", function(request, response){
  var msnodesql = require("node-sqlserver-unofficial");
  //var connString = "Data Source=localhost;Initial Catalog=SpendOnLife;Integrated Security=SSPI;";
  var connString = "Driver={SQL Server Native Client 11.0};Server=tcp:localhost.database.windows.net,1433;Database=SpendOnLife;Integreated Security=SSPI"

  var query = "SELECT * FROM [CreditFulfillment].[sales].[ValidationTokens]";
  msnodesql.query(connString, query, function(err, results){
      if(err){
        console.log(err);
      }
      else{
        console.log(results);
        response.send(results);
      }
  });
});

var server = http.createServer(app);

server.listen(3333);

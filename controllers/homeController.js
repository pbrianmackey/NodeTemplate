(function(homeController){
  "use strict"
  let data = require("../data");

  homeController.init = function (app){

    app.get("/", function(request, response){

      data.getNoteCategories(function (error, results){
        response.render("jade/index", {title : "Jade", error: "errorHere", results: results});
      });

    });
  };
})(module.exports);

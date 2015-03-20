(function(homeController){
  homeController.init = function (app){

    app.get("/", function(request, response){
      response.render("jade/index", {title : "Express + Jade"});
    });
  };
})(module.exports);

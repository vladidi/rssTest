var app = angular.module("rssApp", ["ngRoute"]);
app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "tmpl/rss.html",
      controller : "rssCtrl"
    })
    .when("/:id", {
      templateUrl : "tmpl/rss.html",
      controller : "rssCtrl"
    })
    .otherwise({
      redirectTo : "/"
    });
}]);

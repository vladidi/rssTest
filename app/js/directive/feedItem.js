app.directive("feedItem", [function () {
  return{
    scope: {
      item: "="
    },
    templateUrl: "tmpl/feedItem.html"
  }
}]);

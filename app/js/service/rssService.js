app.factory("rssService", ["$http", "$q", function ($http, $q) {
  return {
    getFeeds: function() {
      var defer = $q.defer();
      $http.get("http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=http://www.rss-specifications.com/blog-feed.xml").then(function (res) {
        defer.resolve(res);
      },function(res){
        defer.resolve('');
      });
      return defer.promise;
    }
  }
}]);

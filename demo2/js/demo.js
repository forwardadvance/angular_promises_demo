// Services are for storing persistent data and keeping functions together
// Services are singletons
// Hello Service
// Hello Factory
// Github Service
// Test by injecting $service
// Factories are for generating objects directly

angular.module('app', ['github'])
  .controller('demoController', function($scope, github) {
    var showSpinner = function() {
      $scope.spinner = true;
    }
    var hideSpinner = function() {
      $scope.spinner = false;
    }
    var showError = function() {
      $scope.error = true;
    }
    showSpinner();
    github.getEvents()
      .then(function(github) {
        $scope.github = github;
      })
      .catch(showError)
      .then(hideSpinner);
  });


angular.module('github', [])
  .constant('githubBase', 'https://api.github.com')
  .service('github', function( $http, githubBase, $q ) {
    this.getEvents = function() {
      var url = githubBase + '/events?callback=JSON_CALLBACK';
      return $http.jsonp(url)
        .then(function(response) {
          return response.data.data;
        });
    }
  })





// Initial state
// angular.module('app', [])
//   .controller('demoController', function() {
//   })

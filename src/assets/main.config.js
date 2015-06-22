angular
  .module('opinfo')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html'
      })
      .when('', {
        templateUrl: '',
        controller: ''
      })
      .when('', {
        templateUrl: '',
        controller: ''
      })
      .otherwise({
        templateUrl: 'views/404.html'
      })
  });
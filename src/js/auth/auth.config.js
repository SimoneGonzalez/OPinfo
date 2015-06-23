angular
  .module('opinfo')
  .config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
    .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutCtrl'
      });
  });
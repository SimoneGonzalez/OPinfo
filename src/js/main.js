angular
  .module('opinfo', [ngRoute])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '',
        controller: ''
      })
      .when('', {
        templateUrl: '',
        controller: ''
      })
      .when('', {
        templateUrl: '',
        controller: ''
      })
      .otherwise()
  })
  .service('authService', function () {
  })
  .controller('PersonController', function($scope) {
  })
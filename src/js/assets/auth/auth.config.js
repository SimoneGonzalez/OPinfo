angular
  .module('opinfo')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth'
        // resolve: {
        //   checkLogin: function ($rootScope, $location) {
        //     if($rootScope.auth) {
        //       $location.path('/people')
        //     }
        //   }
        // }
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'peopleCtrl',
        controllerAs: 'ppl'
      })
      .when('/register', {
        templateUrl: '/views/register.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'peopleCtrl',
        controllerAs: 'ppl'
      })
      // .when('/forgotPassword', {
      //   templateUrl: 'forgotpassword.html',
      //   controller: 'forgotCtrl'
      // })
      .when('/logout', {
        template: '<h1>Logging out...</h1>',
        controller: 'LogoutCtrl'
      })
      .otherwise({
       redirectTo: '/login'
    });
  });
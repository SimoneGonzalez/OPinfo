auth/login.angular
  .module('opinfo', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: '/views/login.html',
        //controller: 'LoginCtrl',
        //controllerAs: 'auth',
      //   resolve: {
      //     checkLogin: function ($rootScope, $location) {
      //       if($rootScope.auth) {
      //         $location.path('/people')
      //       }
      //     }
        // }
      })
      .when('/register', {
        templateUrl: '/views/register.html',
        controller: 'registerCtrl'
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
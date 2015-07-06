angular
  .module('opinfo')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
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
        controller: 'profileCtrl',
        controllerAs: 'profile'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'peopleCtrl',
        controllerAs: 'ppl'
      })
      .when('/donate', {
        templateUrl: 'views/donate.html',
        controller: 'peopleCtrl',
        controllerAs: 'ppl'
      })
      // .when('/forgotPassword', {
      //   templateUrl: 'forgotpassword.html',
      //   controller: 'forgotCtrl'
      // })
      .when('/logout', {
        template: '<h1>Logging out...</h1>',
        controller: 'LogoutCtrl',
        controllerAs: 'logout',
        redirectTo: '/login'
      })
      .otherwise({
       redirectTo: '/',
       templateUrl: 'views/home.html',
       controller: 'navCtrl'
    });
  });
angular
  .module('opinfo')
  .factory('authFactory', function($rootScope, $location, $http, FIRE_URL) {
    var fb = new Firebase(FIRE_URL);
    var factory = {};
    $rootScope.user = fb.getAuth();


      factory.requireLogin = function() {
        $rootScope.auth = fb.getAuth();
        if (!$rootScope.auth) {
          $location.path('/login');
        }
      };

      factory.login = function(email, password, cb) {
        fb.authWithPassword({
          email: email,
          password: password
        }, function(err, authData) {
          if (err) {
            console.log(err);
          } else {
            $rootScope.auth = authData;
            cb();
          }
        });
      };

      factory.register = function(email, password, cb) {
        fb.createUser({
          email: email,
          password: password
        }, function(err, authData){
          if (err) {
            console.log(err)
          } else {
            $rootScope.auth = authData;
            cb();
          }
        });
      };
      factory.userInfo = function(id, data,cb){
        console.log('hit the userInfo factory');
        $http
          .post(`${FIRE_URL}members/${id}.json`, data)
          .success(cb, function(data) {
            members = data;
          });
      };
      factory.logout = function(cb) {
        fb.unauth(function() {
          $rootScope.auth = null;
          cb();
        });
      };
      return factory;
    });

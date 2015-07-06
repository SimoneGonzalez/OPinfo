angular
  .module('opinfo')
  .controller('LoginCtrl', function($scope, $rootScope,$location, authFactory) {
    var vm = this;
    vm.doLogin = function() {
      authFactory.login(vm.email, vm.password, function() {
        console.log('login works')
        $location.path('/people');
        $scope.$apply();
      });
    }
    vm.doReset = function() {
      authFactory.reset(vm.email, vm.password, function() {
        console.log("reset clicked");

      })
    }
    vm.doRegister = function() {
      console.log('register button hit');
      authFactory.register(vm.personr.email, vm.personr.password, function(err) {
        if(err) {console.log('register error',err)}
          else {
            var id = $rootScope.auth.uid.replace(':', "%3A");
            authFactory.userInfo(id, vm.person, function(){
              if(err){console.log('user info error', err)}
                else{
                  console.log('info successfully saved')
                }
            })
            alert("You have successfully registered. Please login.")
          }
        $location.path('/login');
        $scope.$apply();
      });
    }
  })
  .controller('LogoutCtrl', function($rootScope, $scope, $location, FIRE_URL, authFactory) {
    var fb = new Firebase(FIRE_URL);

    fb.unauth(function() {
      $rootScope.auth = null;
      $location.path('/login');
      $scope.$apply();
    });
  });
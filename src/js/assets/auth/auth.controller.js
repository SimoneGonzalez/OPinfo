angular
  .module('opinfo')
  .controller('LoginCtrl', function($scope, $rootScope,$location, authFactory) {
    var vm = this;
    vm.doLogin = function() {
      authFactory.login(vm.email, vm.password, function() {
        console.log('this worksss')
        $location.path('/people');
        $scope.$apply();
      });
    }
    vm.doReset = function() {
      authFactory.reset(vm.email, function() {
        console.log("reset clicked");

      })
    }
    vm.doRegister = function() {
      authFactory.register(vm.email, vm.password, function(err) {
        if(err) {}
          else {
            var id = $rootScope.auth.uid.replace(':', "%3A");
            var data = {'name': 'zoe', 'phonenumber':'9999999999'}
            authFactory.userInfo(id, data, function(){
              if(err){}
                else{
                  console.log('info successfully saved')
                }
            })
            console.log("You have successfully registered. Please login.")
          }
        //reroute to create profile
        $location.path('/login');
        $scope.$apply();
      });
    }
  })
  .controller('LogoutCtrl', function($rootScope, $scope, $location, FIRE_URL) {
    var fb = new Firebase(FIRE_URL);

    fb.unauth(function() {
      $rootScope.auth = null;
      $location.path('/login');
      $scope.$apply();
    });
  });
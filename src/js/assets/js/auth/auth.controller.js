angular
  .module('opinfo')
  .controller('LoginCtrl', function($scope, $location, authFactory) {
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
            console.log("You have successfully registered. Please login.")
          }
        $location.path('/login');
        $scope.$apply();
      });
    }
  });
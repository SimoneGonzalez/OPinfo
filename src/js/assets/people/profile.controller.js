angular
  .module('opinfo')
  .controller('profileCtrl', function(Profile, $scope, $rootScope, $location) {
    var vm = this;

    vm.profile = function() {
      console.log('inside profile');
      Profile.getProfile($rootScope.auth.uid, function(profile) {
        console.log('get Profile', profile);
      });
    }
    vm.onModalLoad = function() {
      $('#modal').modal('show');

      $('#modal').on('hidden.bs.modal', function(e) {
        $location.path('/profile');
        $scope.$apply();
        });
    };
    vm.saveProfile = function() {
      Profile.update(vm.person, function() {
        $('#modal').modal('hide');
        console.log("saved profile");
      });
    };
    vm.profile()
  })
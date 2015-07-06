angular
  .module('opinfo')
  .controller('profileCtrl', function(Profile, $scope, $rootScope, $location, authFactory) {
    var vm = this;

    vm.profile = function() {
      console.log('inside profile');
      Profile.getProfile($rootScope.auth.uid, function(myProfile) {
        var objectUid = Object.keys(myProfile);
        vm.profile = myProfile[objectUid];
        console.log('get Profile', myProfile);
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
      Profile.getProfile($rootScope.auth.uid, function(myProfile) {
        var objectUid = Object.keys(myProfile);
        var id = $rootScope.auth.uid.replace(':', "%3A");
        Profile.update(vm.profile.profile, id, function() {
          $('#modal').modal('hide');
          console.log("saved profile", vm.profile.profile, myProfile);
        });
      });
    };
    vm.profile()
  })
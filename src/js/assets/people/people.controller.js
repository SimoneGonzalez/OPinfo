angular
  .module('opinfo')
  .controller('peopleCtrl', function() {
    var vm = this;

    vm.onModalLoad = function() {
      $('#modal').modal('show');

      $('#modal').on('hidden.bs.modal', function(e) {
        $location.path('/profile');
        $scope.$apply();
        });
    };

    vm.saveProfile = function() {
      Person.create(vm.person, function() {
        $('#modal').modal('hide');
        console.log("saved profile");
      });
    };

    Person.getAll(function(people) {
      vm.people = people;
    })
  });
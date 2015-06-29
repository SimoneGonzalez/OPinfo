angular
  .module('opinfo')
  .controller('peopleCtrl', function(Person, $location) {
    var vm = this;

    Person.getAll(function(people) {
      vm.people = people;
      console.log(people)
    })
    vm.onModalLoad = function() {
      $('#modal').modal('show');

      $('#modal').on('hidden.bs.modal', function(e) {
        $location.path('/profile');
        $scope.$apply();
        });
    };

    vm.saveProfile = function() {
      Person.update(vm.person, function() {
        $('#modal').modal('hide');
        console.log("saved profile");
      });
    };
  })
  .controller('profileCtrl', function() {

  })
  .controller('editCtrl', function() {

  });
angular
  .module('opinfo')
  .controller('peopleCtrl', function(Person, $location) {
    var vm = this;

    Person.getAll(function(people) {
      var people2 = Object.keys(people).map(function(k) {return people[k]});
      vm.finalPeople = [];
      for(var i=0; i<people2.length; i++){
        var objectUid = Object.keys(people2[i]);
        console.log('objectUid', objectUid)
        var stuff = people2[i][objectUid];
        vm.finalPeople.push(stuff);
      }
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
  //need to bind data so it shows up in modal to be edited
  .controller('editCtrl', function() {

  });
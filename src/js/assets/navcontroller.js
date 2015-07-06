angular
  .module('opinfo')
  .controller('navCtrl', function($scope, $location, authFactory) {
    var noimage = {'background-image': 'none', 'font-weight': 'normal'};
    var withimage = {'font-weight': 'bold', 'background-image': 'url("/images/marble1.jpg")', 'background-size': 'cover', 'background-repeat': 'no-repeat'};
    $scope.contactPage = function(){
      $location.path('/contact');
      $('.contact').css(withimage);
      $('.donate').css(noimage);
      $('.directory').css(noimage);
      $('.profile').css(noimage);
      $('.donate').css(noimage);
      $('.logout').css(noimage);
    };
    $scope.donatePage = function() {
      $location.path('/donate');
      $('.donate').css(withimage);
      $('.contact').css(noimage);
      $('.directory').css(noimage);
      $('.profile').css(noimage);
      $('.donate').css(noimage);
      $('.logout').css(noimage);
    };
    $scope.directoryPage = function() {
      $location.path('/people');
      $('.directory').css(withimage);
      $('.donate').css(noimage);
      $('.contact').css(noimage);
      $('.profile').css(noimage);
      $('.donate').css(noimage);
      $('.logout').css(noimage);
    };
    $scope.profilePage = function() {
      $location.path('/profile');
      $('.profile').css(withimage);
      $('.donate').css(noimage);
      $('.contact').css(noimage);
      $('.directory').css(noimage);
      $('.donate').css(noimage);
      $('.logout').css(noimage);
    };
    $scope.logoutPage = function() {
      $location.path('/logout');
    };
  //end of controller
  });

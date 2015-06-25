angular
  .module('opinfo')
  .controller('UploadCtrl', function($scope, upload) {
    var vm = this;

    vm.fileSelected = function() {
      var file = vm.files[0];
      if (file) {
        imageToBase64(file, function() {
          vm.thumbnailSrc = event.target.result;
          $scope.apply();
        });
      }
    };

    vm.submit = function() {
      Upload.upload({
        url: '',
        method: 'POST',
        fields: {
          key: + '.jpg',
          AWSAccessKeyId: '',
          acl: '',
          policy: '',
          signature: '',
          'Content-Type': vm.files[0].type
          },
          file: vm.files[0]
      })
      .success(function() {})
      .error(function() {
        alert('failure')
      });
    };

    function imageToBase64(img, cb) {
      var fr = new FileReader();
      fr.readAsDataURL(img);
      fr.onLoad = cb;
    }
  });
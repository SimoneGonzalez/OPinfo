angular
  .module('opinfo')
  .factory('Person', function($http, FIRE_URL) {
    return {
    create(data, cb) {
      $http
        .post(`${FIRE_URL}/members.JSON`, data)
        .success(cb);
    }
  };
  });
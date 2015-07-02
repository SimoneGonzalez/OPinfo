angular
  .module('opinfo')
  .factory('Profile', function($http, FIRE_URL) {
    return {
     update(data, id, cb) {
      $http
        .put(`${FIRE_URL}members/${id}.json`, data)
        .success(cb);
     },
   getProfile(id, cb) {
    $http
      .get(`${FIRE_URL}members/${id}.json`)
      .success(cb);
   }
  }
  });
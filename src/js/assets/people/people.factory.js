angular
  .module('opinfo')
  .factory('Person', function($http, FIRE_URL) {
    return {
    create(data, cb) {
      $http
        .post(`${FIRE_URL}members.json`, data)
        .success(cb);
    },
    getAll(cb) {
      $http
        .get(`${FIRE_URL}members.json`)
        .success(cb);
    },
   update(data, cb, id) {
    $http
      .put(`${FIRE_URL}members/${id}.json`, data)
      .success(cb);
   }
   };

  });
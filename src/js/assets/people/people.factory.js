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
        .success(cb, function(data) {
          members = data;
        });
    },
   update(data, id, cb) {
    $http
      .put(`${FIRE_URL}members/${id}.json`, data)
      .success(cb);
   },
   // getProfile(id, cb) {
   //  $http
   //    .get(`${FIRE_URL}members/${id}.json`)
   //    .success(cb);
   // }
  }
  });
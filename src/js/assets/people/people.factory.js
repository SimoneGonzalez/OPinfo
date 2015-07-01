angular
  .module('opinfo')
  .factory('Members', function($resource) {
    return $resource('https://opinfo.firebaseio.com/members/:id.json');

  })
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
   update(data, cb, id) {
    $http
      .put(`${FIRE_URL}members/${id}.json`, data)
      .success(cb);
   }
   };

  });
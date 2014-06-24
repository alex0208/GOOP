angular.module('goopApp').factory('ClassResource', function($resource) {
  var local = 'http://localhost:3000';
  return $resource(local + '/api/v1/classes/:id')
})
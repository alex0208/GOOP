angular.module('goopApp').controller('ClassDetailCtrl', function($scope,
  $routeParams, ClassResource) {
 ClassResource.get({id: $routeParams.id}, function(data){
 	$scope.classDetail = data;
 })
});
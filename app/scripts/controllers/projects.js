'use strict';

/**
 * @ngdoc function
 * @name goopApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the goopApp
 */
angular.module('goopApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
  	$http.get('api/projects.json').success(function(data) {
  		$scope.projects = data;
  		console.log(data);
  	});
  });

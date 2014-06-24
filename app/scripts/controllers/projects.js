'use strict';

/**
 * @ngdoc function
 * @name goopApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the goopApp
 */
angular.module('goopApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

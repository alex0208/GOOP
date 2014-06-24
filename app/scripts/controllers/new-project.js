'use strict';

/**
 * @ngdoc function
 * @name goopApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller of the goopApp
 */
angular.module('goopApp')
  .controller('NewProjectCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

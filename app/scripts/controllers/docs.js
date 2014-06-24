'use strict';

/**
 * @ngdoc function
 * @name goopApp.controller:DocsCtrl
 * @description
 * # DocsCtrl
 * Controller of the goopApp
 */
angular.module('goopApp')
  .controller('DocsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

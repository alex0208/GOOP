'use strict';

angular.module('goopApp')
  .controller('MainCtrl', function ($scope, $location, Authentication, RouteFilter) {

    $scope.canAccess = function(route) {
        return RouteFilter.canAccess(route);
    };

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });

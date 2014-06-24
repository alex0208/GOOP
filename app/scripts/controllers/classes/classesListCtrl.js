angular.module('goopApp').controller('ClassesListCtrl', function($scope, cachedClasses) {
    $scope.classes = cachedClasses.query();
});
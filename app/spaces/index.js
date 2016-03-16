'use strict';

angular.module('makersBnb.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', ['$scope', function($scope) {
  // real getSpaces() function
  // this.getSpaces = function() {
  //   // make an HTTP request to the API for all spaces
  // };
  
  this.getSpaces = function() {
    return [{id: 1, name: "My lovely space"}, {id: 2, name: "My horrible space"}];
  };

  $scope.spaces = this.getSpaces();
}]);
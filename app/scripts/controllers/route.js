'use strict';

angular.module('faiteslemurApp')
  .controller('RouteCtrl', ['$scope', 'route', '$location', function ($scope, route, $location) {
    $scope.route = route;

    $scope.save = function() {
      $scope.route.save().then(function() {
        console.log('route saved');
        $location.path('/route/' + route.objectId);

      }, function(error) {
        console.log(error);
        // TODO, if error, display error message
      });

    };
    
    $scope.addColor = function() {
      $scope.route.color.push({value:'#ffffff'});
      return false;
    }

    $scope.removeColor = function() {
      $scope.route.color.pop();
      return false;
    }

  }]);

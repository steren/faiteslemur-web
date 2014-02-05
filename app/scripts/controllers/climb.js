'use strict';

angular.module('faiteslemurApp')
  .controller('ClimbCtrl', ['$scope', '$location', 'climb', 'isNew', function ($scope, $location, climb, isNew) {

    $scope.climb = climb;
    $scope.isNew = isNew;

    $scope.save = function() {
      $scope.climb.save().then(function() {
        console.log('climb saved');
        // TODO, display confirmation message.
      }, function(error) {
        console.log(error);
        // TODO, if error, display error message and return to climb detail page
      });

      $location.path('/place/' + climb.route.place.objectId);
    };

  }]);

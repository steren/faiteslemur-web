'use strict';

angular.module('faiteslemurApp')
  .controller('ClimbCtrl', function ($scope, $routeParams, climb, isNew) {

    $scope.climb = climb;
    $scope.isNew = isNew;

    $scope.save = function() {
      $scope.climb.save().then(function() {
        console.log('climb saved');
      });
    };

  });

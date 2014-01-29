'use strict';

angular.module('faiteslemurApp')
  .controller('ClimbCtrl', function ($scope, $routeParams, climb) {

    $scope.climb = climb;

    $scope.save = function() {
      $scope.climb.save().then(function() {
        console.log('climb saved');
      });
    };

  });

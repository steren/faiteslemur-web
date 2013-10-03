'use strict';

angular.module('faiteslemurApp')
  .controller('MainCtrl', function ($scope, Place) {

    $scope.places = Place.query();

  });

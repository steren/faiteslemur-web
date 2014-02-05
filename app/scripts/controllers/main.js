'use strict';

angular.module('faiteslemurApp')
  .controller('MainCtrl', ['$scope', 'Place', function ($scope, Place) {

    $scope.places = Place.query();

  }]);

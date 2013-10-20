'use strict';

angular.module('faiteslemurApp')
  .controller('PlaceCtrl', function ($scope, $routeParams, $place, Route) {
    $scope.place = $place;

    $scope.routes = Route.query({
      where: {
        place: {
          __type: 'Pointer',
          className: 'Place',
          objectId: $place.objectId
        }
      }
    });

  });

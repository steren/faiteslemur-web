'use strict';

angular.module('faiteslemurApp')
  .controller('PlaceCtrl', function ($scope, $place, Route, Climb) {
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

    $scope.quickClimb = function(routeId) {
      var newClimb = new Climb();
      newClimb.status = 'done';
      Route.find(routeId).then(function(route) {
        newClimb.route = route;
        newClimb.save().then(function() {
          console.log('climb saved');
        });
      });
    };

  });

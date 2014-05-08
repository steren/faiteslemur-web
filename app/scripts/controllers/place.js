'use strict';

angular.module('faiteslemurApp')
  .controller('PlaceCtrl', ['$scope', 'place', 'Route', 'Climb', '$location', function ($scope, place, Route, Climb, $location) {
    $scope.place = place;

    $scope.routes = Route.query({
      where: {
        place: {
          __type: 'Pointer',
          className: 'Place',
          objectId: place.objectId
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

    $scope.save = function() {
      $scope.place.save().then(function() {
        console.log('place saved');
        $location.path('/place/' + place.objectId);

      }, function(error) {
        console.log(error);
        // TODO, if error, display error message
      });

    };

  }]);

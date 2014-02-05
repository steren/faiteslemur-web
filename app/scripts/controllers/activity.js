'use strict';

angular.module('faiteslemurApp')
  .controller('ActivityCtrl', function ($scope, $routeParams, Climb) {

    $scope.climbs = Climb.query({
      where: {
        user: {
          __type: 'Pointer',
          className: '_User',
          objectId: $routeParams.userId
        }
      },
      include: 'route',
      order: '-createdAt',
      limit: 50
    });

  });

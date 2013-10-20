'use strict';

angular.module('faiteslemurApp')
  .factory('Place', function (Parse) {

    var Place = angular.copy(Parse.Model);
    Place.configure('Place', 'name', 'objectId');

    return Place;

  });

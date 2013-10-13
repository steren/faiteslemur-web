'use strict';

angular.module('faiteslemurApp')
  .controller('AuthCtrl', function ($scope, Parse) {
    $scope.auth = Parse.auth;
    return $scope.signout = function() {
      return Parse.auth.logout();
    };
  });

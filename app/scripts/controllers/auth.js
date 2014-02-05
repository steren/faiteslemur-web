'use strict';

angular.module('faiteslemurApp')
  .controller('AuthCtrl', ['$scope', 'Parse', function ($scope, Parse) {
    $scope.auth = Parse.auth;
    $scope.signout = function() {
      return Parse.auth.logout();
    };
  }]);

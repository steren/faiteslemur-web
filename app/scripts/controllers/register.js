'use strict';

angular.module('faiteslemurApp')
  .controller('RegisterCtrl', function ($location, $window, $scope, Parse) {
    $scope.auth = Parse.auth;
    $scope.user = {};
    $scope.errorMessage = null;
    return $scope.register = function(user) {
      if (user.password !== user.passwordConfirm) {
        return $scope.errorMessage = 'Passwords must match';
      }
      if (!(user.username && user.password)) {
        return $scope.errorMessage = 'Please supply an email and password';
      }
      return Parse.auth.register(user.username, user.password).then(function() {
        return $location.path('/');
      }, function(err) {
        return $scope.errorMessage = err.data.error;
      });
    };
  });

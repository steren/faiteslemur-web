'use strict';

angular.module('faiteslemurApp')
  .controller('RegisterCtrl', ['$location', '$window', '$scope', 'Parse', function ($location, $window, $scope, Parse) {
    $scope.auth = Parse.auth;
    $scope.user = {};
    $scope.errorMessage = null;
    $scope.register = function(user) {
      if (user.password !== user.passwordConfirm) {
        $scope.errorMessage = 'Passwords must match';
        return $scope.errorMessage;
      }
      if (!(user.username && user.password)) {
        $scope.errorMessage = 'Please supply an email and password';
        return $scope.errorMessage;
      }
      return Parse.auth.register(user.username, user.password).then(function() {
        return $location.path('/');
      }, function(err) {
        $scope.errorMessage = err.data.error;
        return $scope.errorMessage;
      });
    };
  }]);

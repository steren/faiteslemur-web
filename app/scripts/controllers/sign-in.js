'use strict';

angular.module('faiteslemurApp')
  .controller('SignInCtrl', function ($location, $window, $scope, Parse) {
    $scope.auth = Parse.auth;
    $scope.user = {};
    $scope.errorMessage = null;
    return $scope.signin = function(user) {
      if (!(user.username && user.password)) {
        return $scope.errorMessage = 'Please supply a username and password';
      }
      return Parse.auth.login(user.username, user.password).then(function() {
        console.log('in', arguments);
        return $location.path('/');
      }, function(err) {
        console.log('out', arguments);
        return $scope.errorMessage = err.data.error;
      });
    };
  });

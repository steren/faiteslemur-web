'use strict';

angular.module('faiteslemurApp')
  .controller('SignInCtrl', ['$location', '$window', '$scope', 'Parse', function ($location, $window, $scope, Parse) {
    $scope.auth = Parse.auth;
    $scope.user = {};
    $scope.errorMessage = null;
    $scope.signin = function(user) {
      if (!(user.username && user.password)) {
        $scope.errorMessage = 'Please supply an email and password';
        return $scope.errorMessage;
      }

      Parse.auth.login(user.username, user.password).then(function() {
        console.log('in', arguments);
        return $location.path('/');
      }, function(err) {
        console.log('out', arguments);
        $scope.errorMessage = err.data.error;
        return $scope.errorMessage;
      });
    };
  }]);

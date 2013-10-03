'use strict';

angular.module('faiteslemurApp', ["Parse"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (ParseProvider) {
    ParseProvider.initialize('J5J1c57Om78o24I3BIhN9CWz3N9fFQElXojVtWvE', 'fgopppzdQ7X84Lxg0YmigckYNcm5akAysh0C6Q4I');
  });

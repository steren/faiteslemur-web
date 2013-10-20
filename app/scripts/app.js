'use strict';

angular.module('faiteslemurApp', ['Parse'])
  .config(function ($routeProvider) {
    var findPlaceById = function(Place, $route) {
      var id = $route.current.params.id;
      if (id) {
        return Place.find(id);
      }
    };

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sign-in', {
        templateUrl: 'views/sign-in.html',
        controller: 'SignInCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/place/:id', {
        templateUrl: 'views/place.html',
        controller: 'PlaceCtrl',
        resolve: {
          $place: findPlaceById
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (ParseProvider) {
    ParseProvider.initialize('J5J1c57Om78o24I3BIhN9CWz3N9fFQElXojVtWvE', 'fgopppzdQ7X84Lxg0YmigckYNcm5akAysh0C6Q4I');
  }).run(function(Parse) {
    return Parse.auth.resumeSession();
  });

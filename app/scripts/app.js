'use strict';

angular.module('faiteslemurApp', ['Parse', 'analytics'])
  .config(function ($routeProvider) {
    var findPlaceById = function(Place, $route) {
      var id = $route.current.params.id;
      if (id) {
        return Place.find(id);
      }
    };

    var findRouteById = function(Route, $route) {
      var id = $route.current.params.id;
      if (id) {
        return Route.find(id);
      }
    };

    var createRoute = function(Route, Place, $route) {
      var placeId = $route.current.params.place;
      var newRoute = new Route();

      if(placeId) {
        Place.find(placeId).then(function(place) {
          newRoute.place = place;
        });
      }

      return newRoute;
    };

    var findClimbById = function(Climb, $route) {
      var id = $route.current.params.id;
      if (id) {
        return Climb.find(id, {include: 'route'});
      }
    };

    var createClimb = function(Climb, Route, $route) {
      var routeId = $route.current.params.route;
      var newClimb = new Climb();

      if(routeId) {
        Route.find(routeId).then(function(route) {
          newClimb.route = route;
        });
      }

      return newClimb;
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
        // TODO: is it really good to load data using resolve? since the view won't be displayed before promise is resolved.
        resolve: {
          place: findPlaceById
        }
      })
      .when('/route/new', {
        templateUrl: 'views/routeEdit.html',
        controller: 'RouteCtrl',
        resolve: {
          route: createRoute
        }
      })
      .when('/route/:id/edit', {
        templateUrl: 'views/routeEdit.html',
        controller: 'RouteCtrl',
        resolve: {
          route: findRouteById
        }
      })
      .when('/route/:id', {
        templateUrl: 'views/route.html',
        controller: 'RouteCtrl',
        resolve: {
          route: findRouteById
        }
      })
      .when('/climb/new', {
        templateUrl: 'views/climb.html',
        controller: 'ClimbCtrl',
        resolve: {
          climb: createClimb,
          isNew: function() {return true;}
        }
      })
      .when('/climb/:id', {
        templateUrl: 'views/climb.html',
        controller: 'ClimbCtrl',
        resolve: {
          climb: findClimbById,
          isNew: function() {return false;}
        }
      })
      .when('/user/:userId', {
        templateUrl: 'views/activity.html',
        controller: 'ActivityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (ParseProvider) {
    ParseProvider.initialize('J5J1c57Om78o24I3BIhN9CWz3N9fFQElXojVtWvE', 'fgopppzdQ7X84Lxg0YmigckYNcm5akAysh0C6Q4I');
  })

  // TODO: use 'jshint ignore:line' to ignore the unused analytics
  /* jshint unused: false */
  .run(function(Parse, analytics) {
    return Parse.auth.resumeSession();
  });

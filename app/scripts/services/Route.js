'use strict';

angular.module('faiteslemurApp')
  .factory('Route', ['Parse', function (Parse) {

/* jshint camelcase: false, newcap: false, validthis: true */
    var __extends = function(child, parent) { for (var key in parent) { if ({}.hasOwnProperty.call(parent, key)){ child[key] = parent[key]; }} function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    var Route = function() {
      return Route.__super__.constructor.apply(this, arguments);
    };

    __extends(Route, Parse.Model);
    Route.configure( 'Route', 'name', 'place', 'color', 'grade', 'type', 'opener', 'number', 'instructions', 'openedAt', 'picture', 'objectId');

    return Route;

  }]);

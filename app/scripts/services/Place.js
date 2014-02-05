'use strict';

angular.module('faiteslemurApp')
  .factory('Place', function (Parse) {

    // Using Angular's copy is not working, the classes still share the same prototype?
    // var Place = angular.copy(Parse.Model);

    /* jshint camelcase: false, newcap: false, validthis: true */
    var __extends = function(child, parent) { for (var key in parent) { if ({}.hasOwnProperty.call(parent, key)){ child[key] = parent[key]; }} function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    var Place = function() {
      return Place.__super__.constructor.apply(this, arguments);
    };
    __extends(Place, Parse.Model);
    Place.configure( 'Place', 'name', 'city', 'address', 'picture', 'objectId');

    return Place;

  });

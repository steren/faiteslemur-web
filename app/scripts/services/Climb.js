'use strict';

angular.module('faiteslemurApp')
  .factory('Climb', function (Parse) {

    /* jshint camelcase: false, newcap: false, validthis: true */
    var __extends = function(child, parent) { for (var key in parent) { if ({}.hasOwnProperty.call(parent, key)){ child[key] = parent[key]; }} function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    var Climb = function() {
      return Climb.__super__.constructor.apply(this, arguments);
    };
    __extends(Climb, Parse.Model);
    Climb.configure( 'Climb', 'status', 'objectId', 'createdAt', 'lead', 'note', 'route', 'user');

    return Climb;

  });

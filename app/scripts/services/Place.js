'use strict';

angular.module('faiteslemurApp')
  .factory('Place', function (Parse) {

    //
    var __hasProp = {}.hasOwnProperty;
    var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    var Place = angular.copy(Parse.Model);
    Place.configure('Place', 'name');

    return Place;

  });

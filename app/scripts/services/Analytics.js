// taken from http://stackoverflow.com/questions/10713708/tracking-google-analytics-page-views-with-angular-js

(function(angular) {

  angular.module('analytics', ['ng']).service('analytics', ['$rootScope', '$window', '$location', function($rootScope, $window, $location) {

      var track = function() {
        $window.ga('send', 'pageview', {'page': $location.path()});
      };

      $rootScope.$on('$viewContentLoaded', track);
    }
  ]);

}(window.angular));

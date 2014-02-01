/* global Parse */
Parse.Cloud.beforeSave('Climb', function(request, response) {
  'use strict';
  var climb = request.object;
  var user = request.user;

  if (!user) {
    return response.error('You must be signed in to create a climb.');
  }
  if (!climb.get('route')) {
    return response.error('This climb has no route.');
  }
  climb.set('user', user);
  return response.success();
});

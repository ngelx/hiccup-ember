import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('trip', function() {
    this.route('show', { path: '/:trip_id' }, function() {
      this.route('edit',{ path: '/edit' }, function() {});
    });

  });
  this.route('share', { path: '/share/:private_trip_uuid' });
});

export default Router;

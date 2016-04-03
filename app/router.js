import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('trip', function() {
    this.route('show',{ path: '/:trip_id' });
  });
});

export default Router;

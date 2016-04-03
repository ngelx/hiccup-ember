import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var that = this;
    return Ember.RSVP.hash({
      new_trip: that.store.createRecord('trip'),
      trips: that.store.findAll('trip')
    });
  }
});

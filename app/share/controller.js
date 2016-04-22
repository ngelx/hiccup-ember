import Ember from 'ember';

export default Ember.Controller.extend({
  password: null,
  trip: null,
  loginFailed: false,

  actions: {
    tryPassword(){
      var that = this;

      that.store.queryRecord('share', {
        'private_url': that.model.private_trip_uuid,
        'password': that.get("password")
      }).then(function (trip) {
      //findRecord('trip', that.model.private_trip_uuid, {'anoteropt': 'buu'})
        console.log("yeay ..", trip);
        that.set('model', trip);
        that.set('trip', that.model);
      }, function (reason){
        console.log("noop", reason);
        that.toggleProperty('loginFailed');
      });

    }
  }

});

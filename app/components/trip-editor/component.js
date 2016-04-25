import Ember from 'ember';

export default Ember.Component.extend({

  currentStep: 1,

  actions: {
    nextStep(){
      var that = this;
      var prevStep = that.currentStep;

      that.currentStep++;
      if (that.currentStep > that.trip.get('tripEditorLastStep')) {
        that.trip.set('tripEditorLastStep', that.currentStep);
      }

      switch(prevStep) {
        case 1:
        case 2:
        case 4:
          that.tripSave();
          break;
        case 3:
          that.trip.get('intineraries').forEach(
            function(intinerary, index, enumerable){
              intinerary.save();
            }
          );
          that.send('showStep', that.currentStep);
          break;
      }
    },
    tryStep(tab){
      var that = this;
      var s = parseInt(tab);
      if (s <= that.trip.get('tripEditorLastStep')) {
        that.currentStep = s;
        that.send('showStep', that.currentStep);
      }
      else {
        // TODO Do something more interesting.
        console.log("nop, you cannot navigate to this step yet");
      }
    },
    showStep(tab){
      var that = this;
      that.$('#tripTab' + tab ).toggleClass("active").siblings().removeClass("active");
      that.$('#tripTabContent' + tab).toggleClass("active").siblings().removeClass("active");
    }
  },

  tripSave(){
    var that = this;
    that.trip.save().then( function() {
      that.send('showStep', that.currentStep);
    });
  },

  didRender() {
    this.$("#input-image-1").fileinput({
      maxFileCount: 1,
      autoReplace: true,
      initialPreview: [
        '<img src="assets/images/features/mac-pc.png" alt="Mac" />'
      ]
    });
  }
});

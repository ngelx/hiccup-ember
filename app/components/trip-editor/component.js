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
          that.send('showStep', that.currentStep);
          break;
        case 2:
          that.send('showStep', that.currentStep);
          break;
        case 3:
          that.send('showStep', that.currentStep);
          break;
        case 4:
          that.trip.save().then( function() {
            that.send('showStep', that.currentStep);
          });
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

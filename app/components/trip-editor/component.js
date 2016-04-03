import Ember from 'ember';

export default Ember.Component.extend({

  currentStep: 1,

  actions: {
    nextStep(){
      var that = this;
      var step = that.currentStep;
      that.currentStep++;
      switch(step) {
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
        that.currentStep = tab;
        that.send('showStep', tab);
      }
      else {
        // TODO Do something more interesting.
        console.log("nop, you cannot navigate to this step yet");
      }
    },
    showStep(tab){
      var that = this;
      var step = parseInt(tab);
      that.$('#tripTab' + tab ).toggleClass("active").siblings().removeClass("active");
      that.$('#tripTabContent' + tab).toggleClass("active").siblings().removeClass("active");
      // TODO
      if (step > that.trip.get('tripEditorLastStep')) {
        that.trip.set('tripEditorLastStep', step);
      }
    }
  },

  didRender() {
    this.$("#input-image-1").fileinput({
      maxFileCount: 1,
      autoReplace: true,
      initialPreview: [
        '<img src="images/features/mac-pc.png" alt="Mac" />'
      ]
    });
  }
});

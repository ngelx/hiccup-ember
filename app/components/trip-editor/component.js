import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    next_to_emergency_info() {
      var that = this;
      that.$('#tripTab2').toggleClass("active").siblings().removeClass("active");
      that.$('#tripTabContent2').toggleClass("active").siblings().removeClass("active");
      // TODO
      //model.set('tripEditorLastStep', 2);
    },
    nextStep(nextTab){
      var that = this;
      that.$('#tripTab' + nextTab ).toggleClass("active").siblings().removeClass("active");
      that.$('#tripTabContent' + nextTab).toggleClass("active").siblings().removeClass("active");
      // TODO
      //model.set('tripEditorLastStep', 2);
    }
  }
});

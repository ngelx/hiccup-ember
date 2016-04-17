import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    showTab(tab){
      var that = this;
      that.$('#tripDetailTab' + tab ).toggleClass("active").siblings().removeClass("active");
      that.$('#tripDetailTabContent' + tab).toggleClass("active").siblings().removeClass("active");
    }
  }
});

import DS from 'ember-data';
import Ember from 'ember';

//import momentComputed from 'ember-moment/computeds/moment';
//import format from 'ember-moment/computeds/format';
//import locale from 'ember-moment/computeds/locale';

export default DS.Model.extend({
  trip: DS.belongsTo('trip'),
  day: DS.attr('string'),
  startLocation: DS.attr('string'),
  startTime: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  endLocation: DS.attr('string'),
  endTime: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  water: DS.attr("number"),
  hammok: DS.attr("number"),
  fishing: DS.attr("boolean")

});

import DS from 'ember-data';

export default DS.Model.extend({
  trip: DS.belongsTo('trip'),
  day: DS.attr('string'),
  startLocation: DS.attr('string'),
  startTime: DS.attr('string'),
  endLocation: DS.attr('string'),
  endTime: DS.attr('string'),
  water: DS.attr("number"),
  hammok: DS.attr("number"),
  fishing: DS.attr("boolean")
});

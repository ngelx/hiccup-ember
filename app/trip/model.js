import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  organizer: DS.attr('srtring'),
  goals: DS.attr('string'),
  startLocation: DS.attr('string'),
  endLocation: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  planedRoute: DS.attr('string'),
  transportation: DS.attr('string'),
  tripEditorLastStep: DS.attr('number', { defaultValue: 1 })
});

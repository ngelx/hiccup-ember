import DS from 'ember-data';

export default DS.Model.extend({
  // Basic Attributes
  name: DS.attr('string'),
  image: DS.attr('string'),
  organizer: DS.attr('string'),
  goals: DS.attr('string'),
  startLocation: DS.attr('string'),
  endLocation: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  planedRoute: DS.attr('string'),
  transportation: DS.attr('string'),
  comunication: DS.attr('string'),
  freakOut: DS.attr('string'),
  inReachMap: DS.attr('string'),
  localContactName: DS.attr('string'),
  localContactEmail: DS.attr('string'),
  localContactPhone: DS.attr('string'),
  agency: DS.attr('string'),
  stoveFuel: DS.attr('string'),
  timeToTrailhead: DS.attr('string'),
  directionOut: DS.attr('string'),
  conditionCaution: DS.attr('string'),
  animalCaution: DS.attr('string'),
  plantCaution: DS.attr('string'),
  flyIssue: DS.attr('string'),
  supermarket: DS.attr('string'),
  outdoorsStore: DS.attr('string'),
  resources: DS.attr('string'),
  guides: DS.attr('string'),
  // Extra attributes
  publicShareUrl: DS.attr('string'),
  privateShareUrl: DS.attr('string'),
  // frontend extra attributes
  tripEditorLastStep: DS.attr('number', { defaultValue: 1 }),

  intineraryDays: DS.hasMany('intineraryDay')
});

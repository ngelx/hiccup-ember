import DS from 'ember-data';
import Ember from 'ember';

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
  publicShareUrl: Ember.computed('id', function() {
    return `http://hiccup.dev/trip/${this.get('id')}`;
  }),
  privateShareUrl: Ember.computed('id', function() {
    return `http://hiccup.dev/share/${this.get('id')}`;
  }),

  days: Ember.computed('startDate','endDate', function(){
    return Math.round( ( this.get('endDate') - this.get('startDate') ) / 1000 / 60 / 60 / 24 );
  }),

  // frontend extra attributes
  tripEditorLastStep: DS.attr('number', { defaultValue: 1 }),

  intinerary: DS.hasMany('intinerary')
});

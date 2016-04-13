import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://api.hiccup.dev'
});

/*import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://api.hiccup.dev'
});
*/
// app/adapters/application.js
/*import LSAdapter from 'ember-localstorage-adapter';

export default LSAdapter.extend({
  namespace: 'hiccup'
});
*/

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trip-detail-tabs', 'Integration | Component | trip detail tabs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{trip-detail-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#trip-detail-tabs}}
      template block text
    {{/trip-detail-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

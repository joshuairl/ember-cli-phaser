import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  needs: ['service:world']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});

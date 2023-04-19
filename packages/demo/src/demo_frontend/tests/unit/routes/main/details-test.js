import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:main/details');
    assert.ok(route);
  });
});

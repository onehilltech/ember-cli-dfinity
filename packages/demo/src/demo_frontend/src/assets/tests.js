'use strict';

define("demo-frontend/tests/integration/components/demo/hello-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | demo/hello', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Demo::Hello />
      */
      {
        "id": "G9wdwZn8",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"demo/hello\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Demo::Hello>
              template block text
            </Demo::Hello>
          
      */
      {
        "id": "XZGg9+eM",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"demo/hello\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("demo-frontend/tests/integration/helpers/ember-cli-dfinity-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | ember-cli-dfinity', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{ember-cli-dfinity this.inputValue}}
      */
      {
        "id": "NrvVJs81",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"ember-cli-dfinity\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("demo-frontend/tests/test-helper", ["demo-frontend/app", "demo-frontend/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("demo-frontend/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("demo-frontend/tests/unit/controllers/main/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | main/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:main/index');
      assert.ok(controller);
    });
  });
});
define("demo-frontend/tests/unit/routes/main-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | main', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:main');
      assert.ok(route);
    });
  });
});
define("demo-frontend/tests/unit/routes/main/details-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | main/details', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:main/details');
      assert.ok(route);
    });
  });
});
define("demo-frontend/tests/unit/routes/main/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | main/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:main/index');
      assert.ok(route);
    });
  });
});
define('demo-frontend/config/environment', [], function() {
  var prefix = 'demo-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('demo-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

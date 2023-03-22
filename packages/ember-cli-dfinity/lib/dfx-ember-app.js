const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const merge = require('lodash.merge');

class DfxEmberApp extends EmberApp {
  constructor(defaults, options = {}) {
    super(
      defaults,
      merge(options, {
        autoImport: {
          webpack: {
            node: {
              global: true,
            },
          },
        },
      })
    );
  }
}

module.exports = DfxEmberApp;

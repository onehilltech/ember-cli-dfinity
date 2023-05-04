const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const merge = require('lodash.merge');

class DfxEmberApp extends EmberApp {
  constructor(defaults, options = {}) {
    super(
      defaults,
      merge(options, {
        fingerprint: {
          exclude: ['index.js']
        },
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

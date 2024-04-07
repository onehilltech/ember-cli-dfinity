'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
<<<<<<< HEAD
  let app = new EmberAddon(defaults, {
    autoImport: {
      webpack: {
        node: {
          global: true,
        },
      },
    },
=======
  const app = new EmberAddon(defaults, {
    // Add options here
>>>>>>> 8fa453e (v3.28.6...v4.12.2)
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};

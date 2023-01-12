/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  description: 'An EmberJS add-on for the Internet Computer',

  async afterInstall () {
    // Update the ember-cli-build.js file to include the correct configuration for Webpack.
    // This will ensure that the dependencies for @dfinity/* compile correctly.

    await this.insertIntoFile ('ember-cli-build.js', EMBER_CLI_BUILD_CONTENT, {
      after: 'let app = new EmberApp(defaults, {\n'
    });
  }
});

const EMBER_CLI_BUILD_CONTENT = `    autoImport: {
      webpack: {
        node: {
          global: true
        }
      }
    },`;
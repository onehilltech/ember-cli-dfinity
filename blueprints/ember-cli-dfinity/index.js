/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');
const fs = require ('fs-extra');
const path = require ('path');

module.exports = Blueprint.extend ({
  description: 'An EmberJS add-on for the Internet Computer',

  async afterInstall () {
    // Update the ember-cli-build.js file to include the correct configuration for Webpack.
    // This will ensure that the dependencies for @dfinity/* compile correctly.

    await this.insertIntoFile ('ember-cli-build.js', EMBER_CLI_BUILD_CONTENT, {
      after: 'let app = new EmberApp(defaults, {\n'
    });

    // Add a new canister to dfx.json with this project. If the canister exists,
    // the make sure it is configured correctly to build this web app.

    await this._insertCanister ();
  },

  async _insertCanister () {
    const dfxJsonPath = path.resolve (this.project.root, '..', '..', 'dfx.json');
    const dfx = await fs.readJson (dfxJsonPath);

    const { canisters } = dfx;
    const canisterName = this.project.root.split (path.sep).pop ();

    // Make sure the canister exists in the configuration.
    if (!canisters[canisterName])
      canisters[canisterName] = {};

    const canister = canisters[canisterName];

    // Set the default configuration for the canister if it already does not
    // exists in the configuration file.

    if (canister.type !== 'assets')
      canister.type = 'assets';

    canister.frontend = {
      entrypoint: `src/${canisterName}/dist/index.html`
    };

    canister.source = [
      `src/${canisterName}/dist/assets`,
      `dist/${canisterName}/`
    ];

    // Write the configuration back to dfx.json.
    await fs.writeJson (dfxJsonPath, dfx, { spaces: 2, EOL: '\n' });
  }
});

/**
 * This string defines the configuration that must be added too the EmberApp so it
 * builds the dapp without any compilation errors.
 *
 * Do not change the format of this string. Otherwise, it will not render correctly
 * in the build script.
 */
const EMBER_CLI_BUILD_CONTENT = `    autoImport: {
      webpack: {
        node: {
          global: true
        }
      }
    },`;
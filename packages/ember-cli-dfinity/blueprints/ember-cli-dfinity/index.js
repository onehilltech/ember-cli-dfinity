/* eslint-env node */

const { Blueprint } = require('ember-cli-blueprint-helpers');
const fs = require('fs-extra');
const path = require('path');

module.exports = Blueprint.extend({
  description: 'An EmberJS add-on for the Internet Computer',

  async afterInstall() {
    // Add a new canister to dfx.json with this project. If the canister exists,
    // the make sure it is configured correctly to build this web app.

    await this._insertCanister();
  },

  /**
   * Add the canister for this project to dfx.json.
   *
   * @return {Promise<void>}
   * @private
   */
  async _insertCanister() {
    const dfxJsonPath = path.resolve(this.project.root, '..', '..', 'dfx.json');
    const dfxJsonPathExists = await fs.pathExists(dfxJsonPath);

    if (dfxJsonPathExists) {
      const dfx = await fs.readJson(dfxJsonPath);

      const { canisters } = dfx;
      const canisterName = this.project.root.split(path.sep).pop();

      // Make sure the canister exists in the configuration.
      if (!canisters[canisterName]) canisters[canisterName] = {};

      const canister = canisters[canisterName];

      // Set the default configuration for the canister if it already does not
      // exists in the configuration file.

      if (canister.type !== 'assets') {
        canister.type = 'assets';
      }

      canister.frontend = {
        entrypoint: `src/${canisterName}/src/index.html`,
      };

      canister.source = [
        `src/${canisterName}/src/assets`,
        `dist/${canisterName}/`,
      ];

      // Write the configuration back to dfx.json.
      await fs.writeJson(dfxJsonPath, dfx, { spaces: 2, EOL: '\n' });
    }
  },
});

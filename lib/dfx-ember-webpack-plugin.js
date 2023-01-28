const { forEach } = require ('lodash');
const fs = require ('fs-extra');
const path = require ('path');

/**
 * @class DfxEmberWebpackPlugin
 */
class DfxEmberWebpackPlugin {
  apply (compiler) {
    // Load the canister environment variables. This is what is done inside the default
    // webpack, but the variables not passed to this compiler.

    compiler.hooks.compile.tap ('DfxEmberWebpackPlugin', (context, entry) => {
      const { normalModuleFactory: { context : dirname } } = context;
      const canisterEnvVariables  = this._loadCanisterEnvVariables (dirname);

      const dfx = require (path.resolve (dirname, 'dfx.json'));
      const {canisters} = dfx;

      forEach (canisters, (canister, name) => {
        const {frontend} = canister;

        if (!!frontend) {
          const emberCliConfig = path.resolve (dirname, 'src', name, 'ember-cli-build.js');

          if (fs.pathExistsSync (emberCliConfig)) {
            console.error (`${name} is an EmberJS frontend`);

            const args = ['b', `--environment=${process.env.NODE_ENV || 'development'}`];

            const options = {
              cwd: path.dirname (emberCliConfig),
              env: {...process.env, ...canisterEnvVariables},
              stdio: 'inherit'
            };

            require ('child_process').spawnSync ('ember', args, options);
          }
        }
      });
    });
  }

  _loadCanisterEnvVariables (dirname) {
    let localCanisters, prodCanisters;
    
    try {
      localCanisters = require (path.resolve (dirname, '.dfx', 'local', 'canister_ids.json'));
    }
    catch (error) {
      console.log ('No local canister_ids.json found.');
    }

    try {
      prodCanisters = require (path.resolve (dirname, 'canister_ids.json'));
    }
    catch (error) {
      console.log ('No production canister_ids.json found.');
    }

    const network = process.env.DFX_NETWORK || (process.env.NODE_ENV === 'production' ? 'ic' : 'local');
    const canisterConfig = network === 'local' ? localCanisters : prodCanisters;

    return Object.entries (canisterConfig).reduce ((prev, current) => {
      const [name, config] = current;
      prev[name.toUpperCase() + '_CANISTER_ID'] = config[network];

      return prev;
    }, {});
  }
}

module.exports = DfxEmberWebpackPlugin;

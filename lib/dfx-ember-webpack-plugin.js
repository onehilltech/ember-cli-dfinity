const { forEach } = require ('lodash');
const fs = require ('fs-extra');
const path = require ('path');

/**
 * @class DfxEmberWebpackPlugin
 */
class DfxEmberWebpackPlugin {
  constructor (context) {
    this.context = context;
    this._canisterEnvVariables = this._loadCanisterEnvVariables ();
  }

  _canisterEnvVariables;

  apply (compiler) {
    // Load the canister environment variables. This is what is done inside the default
    // webpack, but the variables not passed to this compiler.

    compiler.hooks.compile.tap ('DfxEmberWebpackPlugin', () => {
      const dfx = require (path.resolve (this.context, 'dfx.json'));
      const {canisters} = dfx;

      forEach (canisters, (canister, name) => {
        const { frontend } = canister;

        if (!!frontend) {
          const emberCliConfig = this.emberCliConfig;

          if (fs.pathExistsSync (emberCliConfig)) {
            console.error (`${name} is an EmberJS frontend`);

            const args = ['b', `--environment=${process.env.NODE_ENV || 'development'}`];

            const options = {
              cwd: path.dirname (emberCliConfig),
              env: {...process.env, this._canisterEnvVariables },
              stdio: 'inherit'
            };

            require ('child_process').spawnSync ('ember', args, options);
          }
        }
      });
    });
  }

  get emberCliConfig () {
    return path.resolve (this.context, 'src', name, 'ember-cli-build.js');
  }

  /**
   * Load the canister environment variables from canister_ids.json.
   *
   * @return {{}}
   * @private
   */
  _loadCanisterEnvVariables () {
    let localCanisters, prodCanisters;
    
    try {
      localCanisters = require (path.resolve (this.context, '.dfx', 'local', 'canister_ids.json'));
    }
    catch (error) {
      console.log ('No local canister_ids.json found.');
    }

    try {
      prodCanisters = require (path.resolve (this.context, 'canister_ids.json'));
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

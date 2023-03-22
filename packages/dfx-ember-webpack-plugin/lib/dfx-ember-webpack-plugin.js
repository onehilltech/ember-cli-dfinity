const { forEach } = require ('lodash');
const fs = require ('fs-extra');
const path = require ('path');

/**
 * @class DfxEmberWebpackPlugin
 */
class DfxEmberWebpackPlugin {
  constructor (options = {}) {
    this.context = options.context || process.cwd ();
  }

  apply (compiler) {
    // Load the canister environment variables. This is what is done inside the default
    // webpack, but the variables not passed to this compiler.

    compiler.hooks.compile.tap ('DfxEmberWebpackPlugin', () => {
      const dfx = require (path.resolve (this.context, 'dfx.json'));
      const {canisters} = dfx;

      forEach (canisters, (canister, canisterName) => {
        const { frontend } = canister;

        if (!!frontend) {
          const emberCliConfig = path.resolve (this.context, 'src', canisterName, 'ember-cli-build.js');

          if (fs.pathExistsSync (emberCliConfig)) {
            // Build the EmberJS application.
            console.debug (`${canisterName} is an EmberJS frontend`);

            const emberRoot = path.resolve (path.dirname (emberCliConfig));
            const args = ['b', `--environment=${process.env.NODE_ENV || 'development'}`, `--output-path=src/`];

            const options = {
              cwd: emberRoot,
              env: {...process.env, DFX_ROOT: this.context },
              stdio: 'inherit'
            };

            require ('child_process').spawnSync ('ember', args, options);

            // Copy the generated assets to the corresponding canister under $DFX_ROOT/dist.
            const srcPath = path.resolve (emberRoot, 'src/assets');
            const outputPath = path.resolve (this.context, 'dist', canisterName, 'assets');

            if (fs.pathExistsSync (outputPath)) {
              fs.removeSync (outputPath);
            }

            fs.copySync (srcPath, outputPath);
          }
        }
      });
    });
  }
}

module.exports = DfxEmberWebpackPlugin;

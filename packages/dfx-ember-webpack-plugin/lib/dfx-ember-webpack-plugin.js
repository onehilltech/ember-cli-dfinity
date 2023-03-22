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
      const { canisters } = require (path.resolve (this.context, 'dfx.json'));

      forEach (canisters, (canister, canisterName) => {
        const { frontend } = canister;

        if (!!frontend) {
          const { entrypoint } = frontend;
          const emberCliConfig = path.resolve (this.context, 'src', canisterName, 'ember-cli-build.js');

          if (fs.pathExistsSync (emberCliConfig)) {
            console.debug (`${canisterName} is an EmberJS frontend`);

            const outputDir = path.dirname (entrypoint).replace (`src/${canisterName}/`, '');
            const emberRoot = path.resolve (path.dirname (emberCliConfig));
            const args = ['b', `--environment=${process.env.NODE_ENV || 'development'}`, `--output-path=${outputDir}/`];

            const options = {
              cwd: emberRoot,
              env: {...process.env, DFX_ROOT: this.context },
              stdio: 'inherit'
            };

            require ('child_process').spawnSync ('ember', args, options);

            // Last, copy the generate assets the canister under $DFX_ROOT/dist.
            const srcPath = path.resolve (emberRoot, outputDir, 'assets');
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

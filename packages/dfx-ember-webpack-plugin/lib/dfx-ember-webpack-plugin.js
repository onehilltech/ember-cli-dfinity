const { forEach, merge } = require ('lodash');
const fs = require ('fs-extra');
const path = require ('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const WEBPACK_PLUGIN_NAME = 'DfxEmberWebpackPlugin';

/**
 * @class DfxEmberWebpackPlugin
 */
class DfxEmberWebpackPlugin {
  constructor (options = {}) {
    this.context = options.context || process.cwd ();

    this._initializePlugin ();
  }

  /**
   * Initialize the plugin
   */
  _initializePlugin () {
    // Load the canister environment variables. This is what is done inside the default
    // webpack, but the variables not passed to this compiler.

    const { canisters } = require (path.resolve (this.context, 'dfx.json'));

    forEach (canisters, (canister, canisterName) => {
      const { frontend } = canister;

      if (!!frontend) {
        this._frontend = frontend;
        this._frontendCanisterName = canisterName;
      }
    });

    if (!!this._frontend) {
      // We found the frontend project. Instantiate a new HtmlWebpackPlugin since we need
      // to apply it after our plugin.
      this._htmlPlugin = new HtmlWebpackPlugin ({
        template: path.join(this.context, this._frontend.entrypoint),
        cache: false,
      });
    }
  }

  /**
   * Apply the plugin to the compiler.
   *
   * @param compiler
   */
  apply (compiler) {
    // Manually set the entry for index via the frontend entrypoint. If we do not set it
    // here, then we have to rely on the developer setting the correct value. We override
    // the value here because it needs to occur before the initialize() hook.

    merge (compiler.options, {
      entry: {
        index: {
          import: [
            path.join(this.context, this._frontend.entrypoint).replace(/\.html$/, '.js')
          ]
        }
      }
    });

    compiler.hooks.compile.tap (WEBPACK_PLUGIN_NAME, () => {
      const { entrypoint } = this._frontend;
      const emberCliConfig = path.resolve (this.context, 'src', this._frontendCanisterName, 'ember-cli-build.js');

      if (fs.pathExistsSync (emberCliConfig)) {
        console.debug (`${this._frontendCanisterName} is an EmberJS frontend`);

        const outputDir = path.dirname (path.resolve (this.context, entrypoint));
        const emberRoot = path.resolve (path.dirname (emberCliConfig));
        const args = ['b', `--environment=${process.env.NODE_ENV || 'development'}`, `--output-path=${outputDir}`];

        const options = {
          cwd: emberRoot,
          env: {...process.env, DFX_ROOT: this.context },
          stdio: 'inherit'
        };

        require ('child_process').spawnSync ('ember', args, options);

        // Last, copy the generate assets the canister under $DFX_ROOT/dist.
        const srcPath = path.resolve (outputDir, 'assets');
        const outputPath = path.resolve (this.context, 'dist', this._frontendCanisterName, 'assets');

        if (fs.pathExistsSync (outputPath)) {
          fs.removeSync (outputPath);
        }

        fs.copySync (srcPath, outputPath);
      }
    });

    // Apply the html plugin after we have applied our hooks.
    this._htmlPlugin.apply (compiler);
  }

  /// The managed html plugin.
  _htmlPlugin;

  /// The frontend canister.
  _frontend;

  _frontendCanisterName;
}

module.exports = DfxEmberWebpackPlugin;

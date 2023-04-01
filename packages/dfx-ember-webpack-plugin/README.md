dfx-ember-webpack-plugin
===========================================================================

Webpack plugin for compiling an EmberJS frontend for the Internet Computer

Installation
---------------------------------------------------------------------------

    npm install dfx-ember-webpack-plugin --save-dev

Usage
---------------------------------------------------------------------------

Just add this plugin to your configuration.

```javascript
// webpack.config.js

// ...

const DfxEmberWebpackPlugin = require ('dfx-ember-webpack-plugin');

// ...

module.exports = {
  // ... 
  
  plugins: [
    // This plugin replaces the HtmlWebpackPlugin plugin.
    new DfxEmberWebpackPlugin ({ context: __dirname }),

    // other plugins
  ]
};

```

Happy Coding!

ember-cli-dfinity
==============================================================================

[Short description of the addon.]


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-dfinity
```

### On-chain Dapp

If you are building the app to run on the Internet Computer, then you must install
the [dfx-ember-webpack-plugin](https://github.com/onehilltech/dfx-ember-webpack-plugin)
Webpack plugin into the dfx project so it builds the EmberJS asset canister correctly.


Steps for Building Your Dapp
------------------------------------------------------------------------------

The following steps are necessary for building an Internet Computer dapp with 
an EmberJS front-end. These steps are listened here from historical reasons. They
will be completely automated in future releases of the add-on.

1. Copy all JavaScript candid `(*.did.js)` declarations in `./src/declarations`, which 
   is generated by `dfx`, to `./app/dfx` in the EmberJS application.

2. Define one or more agents in `config/environment.js` (see Configuring your application.)


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

ember-cli-dfinity
==============================================================================

An add-on for using the Internet Computer in your EmberJS app.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-dfinity
```

### On-chain Dapp

If you are building the app to run on the Internet Computer, then you must install
the [dfx-ember-webpack-plugin](https://github.com/onehilltech/dfx-ember-webpack-plugin)
Webpack plugin into the dfx project so it builds the EmberJS asset canister correctly.


Defining actors
------------------------------------------------------------------------------

Actors are the primary artifacts (or components) exposed by a canister running
on the Internet Computer. The actor has an interface, which represent the publicly
accessible methods of the canister. When developing your own DApp, you will have
a candid interface for the actor like the following:

```motoko
// hello.did

service : {
  greet: (text) -> (text);
}
```

We import this interface definition into the EmberJS application to leverage 
it using the following command: 

    ember g actor hello --declaration hello

> You must run this command from an EmberJS frontend application that is located
> in `$DFX_ROOT/src`. For example, `$DFX_ROOT/src/hello_frontend`. `$DFX_ROOT` is
> the root project directory of the DApp, and has the `dfx.json` file. 


This command will create a symbolic link to the JavaScript declaration in 
`$ROOT/app/declarations`, and then define the actor `hello` in `$ROOT/app/actors`
where `$ROOT` is the root directory of the EmberJS frontend application.



Configuring your application
------------------------------------------------------------------------------

The `config/environment.js` file is where you configure how the Dapp connects to the
Internet Computer. The most important section in the configuration is `dfx.agents`.
This is where you define different agents that canisters use to communicate. The
`$default` agent must always be defined. Below is an example configuration that 
will use the `local` network. You can customize the configuration for different 
environments, such as `production` vs `test`.

```javascript
// config/environment.js

module.exports = function (environment) {
  let ENV = {
     // ...

     dfx: {
        canisters: {
          // Optional. You can define caninsters not defined in canister_ids.json, or
          // override the existing canister ids here.
        },
        
        agents: {
           $default: {
              host: 'http://127.0.0.1:8000',
           },
        },
     }
  }; 
   
  // ...
}

```

Next Steps
------------------------------------------------------------------------------

Check out the dummy application in `tests/dummy` for an example on how to 
integrate canisters from the Internet Computer into your application. We will
provide more guidance on this over the course of the project.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [Apache-2.0](LICENSE.md).

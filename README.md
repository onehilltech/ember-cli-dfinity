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
on the Internet Computer. The actor has an interface, which represents the publicly
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

    ember g actor hello --declaration

> You must run this command from an EmberJS frontend application that is located
> in `$DFX_ROOT/src`. For example, `$DFX_ROOT/src/hello_frontend`. `$DFX_ROOT` is
> the root project directory of the DApp, and has the `dfx.json` file.

This command will create a symbolic link to the JavaScript declaration in 
`$ROOT/app/declarations`, and then define the actor `hello` in `$ROOT/app/actors`
where `$ROOT` is the root directory of the EmberJS frontend application.

### Manually defining actors

There will be times you need to manually define an actor's interface. For example,
your frontend needs to reference a canister that is not local to your project. You
can use the `@query` and `@update` decorators to manually define an actor.

```JavaScript
import { Actor, query, update } from 'ember-cli-dfinity';

export default class HelloActor extends Actor {
  @query (['text'], ['text'])  // can also write @query('text, 'text')
  greet;
};
```

Using actors
------------------------------------------------------------------------------

You use defined actors by injecting them into EmberJS an entity (e.g., controller,
router, service, component, etc.) using the `@actor` decorator. For example, the 
code below shows how you can inject the `hello` actor into an EmberJS controller
and call the `greet` method.

```JavaScript
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { actor } from 'ember-cli-dfinity';

export default class IndexController extends Controller {
  @tracked
  name;

  @tracked
  greeting;

  // Bind the hello actor to the hello variable.
  @actor({ canister: 'hello' })
  hello;

  @action
  async submit(ev) {
    // Prevent the default behavior for the submit button.
    ev.preventDefault();

    // Call the greet() method on the hello actor.
    this.greeting = await this.hello.greet(this.name);
  }
}
```

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
      // Set the default canister name used for all actors. The name is either one of the
      // names that appears in canister_ids.json, or in the canisters definition below.
      
      defaultCanister: '',
      
      // Set the default canister id used for all actors. This property takes precedence
      // over defaultCanister when both are defined.
      
      defaultCanisterId: '',
      
      canisters: {
        // Optional. You can define caninsters not defined in canister_ids.json, or
        // override the existing canister ids here.
      },
        
      agents: {
        // An optional list of agents that can be used by the @actor decorator. The
        // add-on will automatically generate this agent list from the networks defined
        // in dfx.json. You can override any auto-generate agent here.
        
        local: { 
          host: 'http://127.0.0.1:8000', 
        }, 
      }, 
    }
  }; 
   
  // ...
}

```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [Apache-2.0](LICENSE.md).

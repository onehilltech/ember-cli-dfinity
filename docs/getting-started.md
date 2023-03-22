Getting Started
======================================

This getting started guide walks you through the steps for using `ember-cli-dfinity`
in your DApp. We use the `hello` project as our running exmaple.

Project setup
--------------------------------------

Let's start a new Internet Computer project by using the `dfx` command.

    dfx new hello

Change to the `hello/src` directory and delete the `hello_frontend` directory because
we are going to replace the native html with an EmberJS application.

    cd hello/src
    rm -r hello_frontend

We can now generate the `hello_frontend` EmberJS application without any problems.

    ember new hello_frontend

Next, we need to install the `ember-cli-dfinity` addon.

    cd hello_frontend
    ember install ember-cli-dfinity

As part of the installation, you will be prompted to overwrite `ember-cli-build.js`. Make
sure you type `y` for yes. 

    ? Overwrite ember-cli-build.js? (yndH) y

If you do not overwrite `ember-cli-build.js`, then you need to manually instantiate 
a `DfxEmberApp` class in `ember-cli-build.js`.

The last step in project setup is to install `dfx-ember-webpack-plugin` in `$DFX_ROOT` and
update the `webpack.config.js`.

> Do not install `dfx-ember-webpack-plugin` in the EmberJS application project.

    cd ../..
    npm install dfx-ember-webpack-plugin --save-dev

Import the `DfxEmberWebpackPlugin` from `dfx-ember-webpack-plugin` at the top of `$DFX_ROOT/webpack.config.js`,

```javascript
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const DfxEmberWebpackPlugin = require ('dfx-ember-webpack-plugin');
```

Then, add the plugin as the first plugin in the `plugins` setting definition.

```javascript
  plugins: [
    // The EmberJS webpack plugin must come before HtmlWebpackPlugin.
    new DfxEmberWebpackPlugin ({ context: __dirname }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, frontend_entry),
      cache: false,
    }),
    // ...
  ]
```

Last, update the `frontend_entry` definition to the following. More specifically, you are
changing the second `src` to `dist`.

    const frontend_entry = path.join("src", frontendDirectory, "dist", "index.html");

We can now start the dfx network and build the canisters. You can even deploy the canisters,
but the frontend is not really connected to the backend yet.
 
    dfx start --background
    dfx canister create --all
    dfx build
    dfx deploy


Connecting the frontend to the backend
-------------------------------------------

Let's now create a webpage that allows us to enter a name and display a greeting. In doing so, 
this example will call the `greet` function on the `hello` actor. 

First, we need to create a route for this page.

> All `ember` commands must be executed from a directory with an EmberJS application. In this
> example, we must run the `ember` command from `src/hello_frontend`. 

    ember g route index

This command will generate the index route for the application. Open `app/templates/index`, and
add the following code.

```html
<form {{on "submit" this.submit}}>
  <label for="name">Enter your name: &nbsp;</label>

  {{!-- bind to the input value --}}
  <Input id="name" alt="Name" type="text" @value={{this.name}} />

  <button type="submit">Click Me!</button>
</form>

{{!-- show the response here --}}
<section>{{this.greeting}}</section>
```

We then need to generate a controller for this route. The controller will contain the dynamic logic
for this corresponding route.

    ember g controller index

Replace the generated controller's codes to the following.

```javascript
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { actor } from 'ember-cli-dfinity';

export default class IndexController extends Controller {
  @tracked
  name;

  @tracked
  greeting;

  // Bind to the hello actor using the default canister and agent.
  @actor
  hello;

  @action
  async submit(ev) {
    // Prevent the default behavior for the submit button.
    ev.preventDefault();

    this.greeting = await this.hello.greet(this.name);
  }
}
```
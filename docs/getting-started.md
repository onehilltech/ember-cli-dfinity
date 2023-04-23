Getting Started
======================================

This getting started guide walks you through the steps for using `ember-cli-dfinity`
in your DApp. We use the `hello` project as our running exmaple.

> You must install [ember-cli](https://cli.emberjs.com/release/) to use EmberJS and this add-on.

Project setup
--------------------------------------

Let's start a new Internet Computer project by using the `dfx` command.

    dfx new hello

Change to the `hello/src` directory and delete the `hello_frontend` directory because
we are going to replace the native html with an EmberJS application.

    cd hello/src
    rm -r hello_frontend

We can now generate the `hello_frontend` EmberJS application without any problems.

    ember new hello_frontend --skip-git --no-welcome

Next, we need to install the `ember-cli-dfinity` addon.

    cd hello_frontend
    ember install ember-cli-dfinity

As part of the installation, you will be prompted to overwrite `ember-cli-build.js`. Make
sure you type `y` for yes. 

    ? Overwrite ember-cli-build.js? (yndH) y

If you do not overwrite `ember-cli-build.js`, then you need to manually instantiate a `DfxEmberApp` 
class in `ember-cli-build.js`. The last step in project setup is to install 
`dfx-ember-webpack-plugin` in `$DFX_ROOT` and update the `webpack.config.js`.

> Do not install `dfx-ember-webpack-plugin` in the EmberJS project.

    cd ../..
    npm install dfx-ember-webpack-plugin --save-dev

Import the `DfxEmberWebpackPlugin` from `dfx-ember-webpack-plugin` at the top of `$DFX_ROOT/webpack.config.js`,

```javascript
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const DfxEmberWebpackPlugin = require ('dfx-ember-webpack-plugin');
```

Then, replace the `HtmlWebpackPlugin` with the `DfxEmberWebpackPlugin` plugin to the `plugins`
as shown below. The `DfxEmberWebpackPlugin` manages its own instance of `HtmlWebpackPlugin` to 
remove any accidental complexities with building the frontend.

```javascript
  plugins: [
    // DfxEmberWebpackPlugin replaces HtmlWebpackPlugin.
    new DfxEmberWebpackPlugin ({ context: __dirname }),
   
    // ...
  ]
```

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

> All `ember` commands must be executed from the root directory of an EmberJS application. In 
> this example, we must run the `ember` command from `src/hello_frontend`. 

    ember g route index

This command will generate the index route for the application. Open `app/templates/index`, and
add the following code.

```handlebars
<form {{on "submit" this.submit}}>
  <label for="name">Enter your name: &nbsp;</label>

  {{!-- bind to the input value --}}
  <Input id="name" alt="Name" type="text" @value={{this.name}} />

  <button type="submit">Click Me!</button>
</form>

{{!-- show the response here --}}
<section>{{this.greeting}}</section>
```

We then need to generate a controller for the index route. The controller will contain the dynamic 
logic for this corresponding route.

    ember g controller index

Replace the generated controller code with the following.

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

  // Bind to the hello actor deployed to the hello_backend canister using the default agent.
  @actor ({ canister: 'hello_backend' })
  hello;

  @action
  async submit(ev) {
    // Prevent the default behavior for the submit button.
    ev.preventDefault();

    this.greeting = await this.hello.greet(this.name);
  }
}
```

Last, we need to generate the actor object that is injected by the `@actor` decorator. You would
typically do this before implementing code that uses the actor. But, we are doing at this step of
the tutorial for flow reasons.

    ember g dfx:actor hello --declaration hello_backend

This will create the files `app/actors/hello.js` and `app/declarations/hello_backend.js`. We can
now build and deploy the project again.

    dfx build
    dfx deploy

Open the frontend url in your browser. You should now see the input asking for a name. Input 
a name, click submit, and see the greeting.

Happy Coding!

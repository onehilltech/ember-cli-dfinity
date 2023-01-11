import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service';

import { idlFactory } from '../dfx/hello.did';

export default class IndexController extends Controller {
  @tracked
  name;

  @tracked
  greeting;

  @service
  dfinity;

  @action
  async submit (ev) {
    // Prevent the default behavior for the submit button.
    ev.preventDefault ();

    const hello = await this.dfinity.createActorFromIdl (idlFactory, { canister: 'hello' });
    this.greeting = await hello.greet (this.name);
  }
}

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

import { actor } from 'ember-cli-dfinity';

export default class IndexController extends Controller {
  @tracked
  name;

  @tracked
  greeting;

  @actor({ canister: 'hello' })
  hello;

  @actor ({ canister: 'hello' })
  helloManual;

  @action
  async submit(ev) {
    // Prevent the default behavior for the submit button.
    ev.preventDefault();
    this.greeting = await this.helloManual.greet(this.name);
  }
}

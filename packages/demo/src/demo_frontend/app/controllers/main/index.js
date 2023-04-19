import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { actor } from 'ember-cli-dfinity';

export default class MainIndexController extends Controller {
  @tracked
  name;

  @tracked
  valid;

  @tracked
  submitting;

  @tracked
  greeting;

  // Bind to the hello actor deployed to the hello_backend canister using the default agent.
  @actor ({ canister: 'demo_backend' })
  hello;

  @action
  validity (valid) {
    this.valid = valid;
  }

  @action
  async submit () {
    try {
      this.submitting = true;
      this.greeting = await this.hello.greet(this.name);
    }
    catch (err) {
      this.snackbar.showError (err);
    }
    finally {
      this.submitting = false;
    }
  }

  reset () {
    this.submitting = false;
    this.name = null;
  }

  get isSubmitButtonDisabled () {
    return !this.valid || this.submitting;
  }
}

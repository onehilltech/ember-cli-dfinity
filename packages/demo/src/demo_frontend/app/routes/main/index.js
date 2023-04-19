import Route from '@ember/routing/route';

export default class MainIndexRoute extends Route {
  resetController (controller, isExiting) {
    super.resetController (...arguments);

    if (isExiting) {
      controller.reset ();
    }
  }
}

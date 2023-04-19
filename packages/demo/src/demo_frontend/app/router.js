import EmberRouter from '@ember/routing/router';
import config from 'demo-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('main', { path: '/'}, function () {
    this.route('details');
  });
});

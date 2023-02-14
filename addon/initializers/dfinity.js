export function initialize (application) {
  // Setup the default options for the declarations and actors. The declaration
  // will be a singleton, and the actors will be instances.

  application.registerOptionsForType ('declaration', { singleton: true });
  application.registerOptionsForType ('actor', { singleton: false });
}

export default {
  initialize
};

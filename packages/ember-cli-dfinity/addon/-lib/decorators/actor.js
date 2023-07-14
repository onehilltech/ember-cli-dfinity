import decorator from '@onehilltech/decorator';

import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';
import { isNone, isPresent, isEmpty } from '@ember/utils';
import { dasherize } from '@ember/string';
import { get } from '@ember/object';

import { isString } from 'lodash';

export default decorator(function actorDecorator(
  target,
  name,
  descriptor,
  params
) {
  delete descriptor.initializer;
  delete descriptor.writable;
  delete descriptor.configurable;

  let [lookupName, options] = params;

  if (isNone(options)) {
    options = {};
  }

  if (isPresent(lookupName)) {
    if (!isString(lookupName)) {
      options = lookupName;
      lookupName = name;
    }
  } else {
    lookupName = name;
  }

  let { canister, canisterPropertyName, canisterId, agentName = '$default' } = options;
  const typename = `actor:${dasherize (lookupName)}`;
  let instanceKey;

  descriptor.get = function () {
    // Compute the fully qualified typename for the actor, and the singleton key. We
    // store each instance in the application so we do not create a new instance
    // each time this properties is accessed.

    const owner = getOwner(this);

    if (isPresent (canisterPropertyName)) {
      canisterId = get (this, canisterPropertyName);
    }

    if (isEmpty(canisterId)) {
      const ENV = owner.resolveRegistration('config:environment');
      const { defaultCanister, defaultCanisterId } = ENV.dfx || {};

      // Set the canister id to the default canister id from the configuration file. If we still
      // do not have a canister id for the actor, lets check for the named canister. We can either
      // use the one provided in the decorator options, or the default name.

      canisterId = defaultCanisterId;

      if (isEmpty(canisterId)) {
        canisterId = owner
          .lookup('service:dfinity')
          .canisterFor(canister || defaultCanister || lookupName);
      }

      assert(
        'Actor has no canister. You must define the canister or canisterId property in @actor, or set defaultCanister or defaultCanisterId in config/environment.js',
        !!canisterId
      );
    }

    if (isEmpty(instanceKey)) {
      instanceKey = `${typename}@${agentName}/${canisterId}`;
    }

    let instance = owner.lookup(instanceKey, { instantiate: false });

    if (isPresent(instance)) {
      return instance;
    }

    // We have not created an instance for this container. Let's find the actor
    // instance factory, create a new instance, and register it with the application
    // so its available next time we access this property.

    const actor = owner.lookup(typename);
    assert(`The actor with name "${typename}" does not exist.`, !!actor);

    const createOptions = Object.assign({}, options, { canisterId });
    instance = actor.createInstance(createOptions);
    owner.register(instanceKey, instance, { instantiate: false });

    return instance;
  };

  return descriptor;
});

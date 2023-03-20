import decorator from '@onehilltech/decorator';

import { getOwner } from '@ember/application';
import { assert } from '@ember/debug';
import { isNone, isPresent, isEmpty } from '@ember/utils';
import { guidFor } from '@ember/object/internals';

import { isString } from 'lodash';

export default decorator(function actorDecorator(
  target,
  name,
  descriptor,
  [lookupName, options]
) {
  delete descriptor.initializer;
  delete descriptor.writable;
  delete descriptor.configurable;

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

  let { canister, canisterId } = options;
  assert(
    'You must set the canister or canisterId property on the @actor decorator options.',
    !!canister || !!canisterId
  );

  descriptor.get = function () {
    // Compute the fully qualified typename for the actor, and the singleton key. We
    // store each instance in the application so we do not create a new instance
    // each time this properties is accessed.

    const owner = getOwner(this);

    if (isEmpty(canisterId)) {
      canisterId = owner.lookup('service:dfinity').canisterFor(canister);
    }

    const typename = `actor:${lookupName}`;
    const instanceKey = `${typename}@${canisterId}`;

    let instance = owner.lookup(instanceKey, { instantiate: false });

    if (isPresent(instance)) {
      return instance;
    }

    // We have not created an instance for this container. Let's find the actor
    // instance factory, create a new instance, and register it with the application
    // so its available next time we access this property.

    const actor = owner.lookup(typename);
    assert(`The actor with name "${typename}" does not exist.`, !!actor);

    instance = actor.createInstance(options);
    owner.register(instanceKey, instance, { instantiate: false });

    return instance;
  };

  return descriptor;
});

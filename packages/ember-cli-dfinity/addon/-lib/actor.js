import { Actor as IC } from '@dfinity/agent';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

import { mapValues, isString, isArray, isPlainObject, compact } from 'lodash';

/**
 * Make the string definition to the IDL definition.
 *
 * @param IDL            Current IDL version
 * @param definition      String definition
 * @return               IDL definition
 */
function mapType(IDL, definition) {
  // Use a simple map. We may want to replace the switch for a function that transforms
  // the text term into to an IDL property.

  if (isString(definition)) {
    switch (definition) {
      case 'text':
        return IDL.Text;
      case 'blob':
        return IDL.Vec(IDL.Nat8);

      case 'principal':
        return IDL.Principal;

      case 'nat':
        return IDL.Nat;
      case 'nat8':
        return IDL.Nat8;
      case 'nat16':
        return IDL.Nat16;
      case 'nat32':
        return IDL.Nat32;
      case 'nat64':
        return IDL.Nat64;

      case 'int':
        return IDL.Int;
      case 'int8':
        return IDL.Int8;
      case 'int16':
        return IDL.Int16;
      case 'int32':
        return IDL.Int32;
      case 'int64':
        return IDL.Int64;

      case 'float32':
        return IDL.Float32;
      case 'float64':
        return IDL.Float64;

      case 'bool':
        return IDL.Bool;
      case 'null':
        return IDL.Null;

      case 'reserved':
        return IDL.Reserved;
      case 'empty':
        return IDL.Empty;

      default:
        // Let's try to handle the more complex type definitions.
        if (definition.startsWith('vec')) {
          const vectorType = term.substring(0, 3);
          return IDL.Vec(mapType(IDL, vectorType));
        } else if (definition.startsWith('opt')) {
          const optType = definition.substring(0, 3);
          return IDL.Opt(mapType(IDL, optType));
        } else {
          throw new Error(
            `We do not understand '${definition}' IDL definition type.`
          );
        }
    }
  } else if (isPlainObject(definition)) {
    const { record, service, variant, function: func } = definition;

    if (record) {
      // We are defining a record type.
      const fields = mapValues(record, (value) => mapType(IDL, value));
      return IDL.Record(fields);
    } else if (service) {
      // We are defining a service type.
      const fields = mapValues(service, (value) => mapType(IDL, value));
      return IDL.Service(fields);
    } else if (variant) {
      // We are defining a variant type.
      const fields = mapValues(variant, (value) => mapType(IDL, value));
      return IDL.Variant(fields);
    } else if (func) {
      // We are defining a function type.
      let [params, output, annotations] = func;

      if (!isArray(params)) params = [params];

      if (!isArray(output)) output = [output];

      if (!isArray(annotations)) annotations = [annotations];

      return IDL.Func(
        params.map((type) => mapType(IDL, type)),
        output.map((type) => mapType(IDL, type)),
        annotations
      );
    } else {
      throw new Error(
        `The object envelope must be one of the following types: function, record, service, variant.`
      );
    }
  } else {
    throw new Error(
      `We do not understand '${definition}' IDL definition type.`
    );
  }
}

/**
 * @class Actor
 *
 * The base class definition for all actors from the Internet Computer.
 */
export default class Actor extends EmberObject {
  @service
  dfinity;

  /**
   * Create an instance of this actor.
   *
   * @param options       Creation options
   */
  createInstance(options = {}) {
    return this.dfinity.createActorFromIdl(
      this._createIdlFactory.bind(this),
      options
    );
  }

  /**
   * Register an action on the actor.
   *
   * @param name            Name of the action.
   * @param definition       The IDL definition for the action.
   * @private
   */
  defineAction(name, definition) {
    (this._actions_ = this._actions_ || {})[name] = definition;
  }

  /**
   * Create an IDL factory for this actor.
   *
   * @param IDL
   * @returns {*}
   * @private
   */
  _createIdlFactory({ IDL }) {
    // Map each of the actions defined in this actor to its IDL definition. We then
    // use the collection of definitions to instantiate the actor service.

    const service = mapValues(this._actions_, (definition) => {
      const [input, output, type] = definition;
      const inputTypes = input.map((type) => mapType(IDL, type));
      const outputTypes = output.map((type) => mapType(IDL, type));

      return IDL.Func(inputTypes, outputTypes, type);
    });

    return IDL.Service(service);
  }
}

/**
 * Define an actor class from the idl factory. This helper method should be used when you are
 * integrating an local declaration to the application.
 *
 * @param idlFactory        The auto-generated IDL factory
 * @param name              Name of the class
 */
export function actorFromIdlFactory(idlFactory, name) {
  const Clazz = class extends Actor {
    /**
     * Create an instance of this actor.
     *
     * @param options       Creation options
     */
    createInstance(options) {
      return this.dfinity.createActorFromIdl(idlFactory, options);
    }
  };

  /*
  if (!!name) {
    Object.defineProperty (Clazz, 'name', { value: name });
  }*/

  return Clazz;
}

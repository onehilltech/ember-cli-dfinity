import { Actor as IC } from '@dfinity/agent';

/**
 * @class Actor
 *
 * The base class definition for all actors from the Internet Computer.
 */
export default class Actor {
  /**
   * Create an instance of this actor.
   *
   * @param options       Creation options
   */
  createInstance (options) {
    return IC.createActor (this._createIdlFactory.bind (this), options);
  }

  /**
   * Register an action on the actor.
   *
   * @param name            Name of the action.
   * @param definition       The IDL definition for the action.
   * @private
   */
  defineAction (name, definition) {
    (this._actions_ = this._actions_ || {})[name] = definition;
  }

  /**
   * Create an IDL factory for this actor.
   *
   * @param IDL
   * @returns {*}
   * @private
   */
  _createIdlFactory ({ IDL }) {
    // Map each of the actions defined in this actor to its IDL definition. We then
    // use the collection of definitions to instantiate the actor service.

    const service = mapValues (this._actions_, (definition) => {
      const [input, output, type] = definition;
      const inputTypes = input.map (type => mapType (IDL, type));
      const outputTypes = output.map (type => mapType (IDL, type));

      return IDL.Func (inputTypes, outputTypes, type);
    });

    return IDL.Service (service);
  }
}

/**
 * Define an actor class from the idl factory. This helper method should be used when you are
 * integrating an local declaration to the application.
 *
 * @param idlFactory        The auto-generated IDL factory
 * @param name              Name of the class
 */
export function actorFromIdlFactory (idlFactory, name) {
  const Clazz = class extends Actor {
    /**
     * Create an instance of this actor.
     *
     * @param options       Creation options
     */
    createInstance (options) {
      return IC.createActor (idlFactory, options);
    }
  };

  if (!!name) {
    Object.defineProperty (Clazz, 'name', { value: name });
  }

  return Clazz;
}
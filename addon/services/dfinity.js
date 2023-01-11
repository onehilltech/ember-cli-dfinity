import Service from '@ember/service';

import { getOwner } from '@ember/application';
import { isPresent, isNone } from '@ember/utils';
import { get } from '@ember/object';

import { Actor, HttpAgent } from "@dfinity/agent";

const DEFAULT_AGENT_NAME = '$default';

/// List of agents currently loaded into the system.
const agents = new Map ();

export default class DfinityService extends Service {
  /**
   * Create an actor.
   *
   * @param name          Name of the actor
   * @param options       Creation options
   */
  async createActor (name, options = {}) {
    const idlFactory = this.idlFactoryFor (name);
    return this.createActorFromIdl (idlFactory, options);
  }

  /**
   * Create an actor from an IDL factory.
   * *
   * @param idlFactory
   * @param options
   */
  async createActorFromIdl (idlFactory, options = {}) {
    const {
      agentName = '$default',
      canister,
      canisterId = this.canisterFor (canister),
      actorOptions = {},
    } = options;

    const agent = await this.agentFor (agentName);

    return Actor.createActor (idlFactory, {
      agent,
      canisterId,
      actorOptions,
    });
  }

  /**
   * Get the default http agent.
   */
  get defaultAgent () {
    return (async () => await this.agentFor (DEFAULT_AGENT_NAME)) ();
  }

  /**
   * Get the IDL factory for the actor.
   * *
   * @param name
   */
  idlFactoryFor (name) {

  }

  canisterFor (name) {
    const ENV = getOwner (this).resolveRegistration ('config:environment');
    return get (ENV, `dfx.canisters.${name}`);
  }

  /**
   * Get the agent by its name.
   *
   * @param name
   * @return {any}
   */
  async agentFor (name) {
    let agent = agents.get (name);

    if (isPresent (agent)) {
      return agent;
    }

    const ENV = getOwner (this).resolveRegistration ('config:environment');
    const agentOptions = get (ENV, `dfx.agents.${name}`);

    if (isNone (agentOptions)) {
      console.warn (`The configuration for agent ${name} is not defined. Fix this by adding its configuration to config/environment.js.`);
    }

    // Create a new agent, and save the agent to our collection.
    agent = new HttpAgent (agentOptions);
    agents.set (name, agent);

    const { environment } = ENV;

    if (environment !== 'production') {
      try {
        await agent.fetchRootKey ();
      }
      catch (err) {
        console.warn ("Unable to fetch root key. Check to ensure that your local replica is running");
        console.error (err);
      }
    }

    return agent;
  }
}

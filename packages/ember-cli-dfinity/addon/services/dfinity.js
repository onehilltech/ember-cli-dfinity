import Service from '@ember/service';

import { getOwner } from '@ember/application';
import { isPresent, isNone } from '@ember/utils';
import { get } from '@ember/object';
import { assert } from '@ember/debug';

import { Actor, HttpAgent } from '@dfinity/agent';

const DEFAULT_AGENT_NAME = '$default';

/// List of agents currently loaded into the system.
const agents = new Map();

export default class DfinityService extends Service {
  /**
   * Create an actor.
   *
   * @param name          Name of the actor
   * @param options       Creation options
   */
  async createActor(name, options = {}) {
    const idlFactory = this.idlFactoryFor(name);
    return this.createActorFromIdl(idlFactory, options);
  }

  /**
   * Create an actor from an IDL factory.
   * *
   * @param idlFactory
   * @param options
   */
  createActorFromIdl(idlFactory, options = {}) {
    const {
      agentName = '$default',
      canister,
      canisterId = this.canisterFor(canister),
      actorOptions = {},
    } = options;

    const agent = this.agentFor(agentName);

    return Actor.createActor(idlFactory, {
      agent,
      canisterId,
      actorOptions,
    });
  }

  /**
   * Get the default http agent.
   */
  get defaultAgent() {
    return this.agentFor(DEFAULT_AGENT_NAME);
  }

  canisterFor(name) {
    const ENV = getOwner(this).resolveRegistration('config:environment');
    const canisterId = get(ENV, `dfx.canisters.${name}`);

    assert (`The canisterId for ${name} does not exist. Please add dfx.canisters.${name} to config/environment.js.`, !!canisterId);

    return canisterId;
  }

  /**
   * Get the agent by its name.
   *
   * @param name
   * @return {any}
   */
  agentFor(name) {
    let agent = agents.get(name);

    if (isPresent(agent)) {
      return agent;
    }

    const ENV = getOwner(this).resolveRegistration('config:environment');
    const agentOptions = get(ENV, `dfx.agents.${name}`);

    if (isNone(agentOptions)) {
      console.warn(
        `The configuration for agent ${name} is not defined. Fix this by adding its configuration to config/environment.js.`
      );
    }

    // Create a new agent, and save the agent to our collection.
    agent = new HttpAgent(agentOptions);
    agents.set(name, agent);

    const { environment } = ENV;

    if (environment !== 'production') {
      agent.fetchRootKey().catch((err) => {
        console.warn(
          'Unable to fetch root key. Check to ensure that your local replica is running'
        );
        console.error(err);
      });
    }

    return agent;
  }
}

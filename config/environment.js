const { forEach, forOwn } = require('lodash');
const path = require('path');

const isCompilingDfx = !!process.env.DFX_ROOT;

function defaultHttpProtocol (network) {
  return network === 'local' ? 'http://' : 'https://';
}

/**
 * Require the canisters file for the target network.
 *
 * @param network
 * @return {*}
 */
function requireCanistersConfig(network) {
  const configFile =
    network === 'local'
      ? path.resolve(process.env.DFX_ROOT, '.dfx', 'local', 'canister_ids.json')
      : path.resolve(process.env.DFX_ROOT, 'canister_ids.json');

  return require(configFile);
}

/**
 * Require the cansiters for the network, or return an empty has is there are no
 * canister definitions.
 *
 * @param network
 */
function requireCanisters(network) {
  try {
    return requireCanistersConfig(network);
  }
  catch (err) {
    return {};
  }
}

/**
 * Require the dfx configuration.
 *
 * @return {Promise<void> | Promise<any>}
 */
function requireDfxConfig () {
  const dfxPath = path.resolve(process.env.DFX_ROOT, 'dfx.json');
  return require (dfxPath);
}

/**
 * Load the agents from the dfx configuration file.
 *
 * @param network
 */
function requireAgents (network) {
  const dfxConfig = requireDfxConfig ();
  const networks = dfxConfig.networks || {};
  const agents = {};

  forOwn (networks, (config, network) => {
    agents[network] = {
      host: `${defaultHttpProtocol (network)}${config.bind}`
    }
  })

  return agents;
}

/**
 *
 * @param registry
 * @param network
 */
function registerAgents (registry, network) {
  const agents = requireAgents (network);

  forOwn (agents, (config, name) => {
    if (!registry[name]) {
      registry[name] = config
    }
  });
}

/**
 * Register canisters for the target environment. This method will add canisters
 * if they are not already defined.
 *
 * @param registry          Canister register
 * @param environment       Target network
 */
function registerCanisters(registry, network) {
  const canisters = requireCanisters(network);

  forEach(canisters, (config, name) => {
    if (!registry[name]) {
      registry[name] = config[network];
    }
  });
}

/**
 * Update the configuration based on the execution environment.
 *
 * @param environment         The execution environment
 * @param config               Application configuration
 */
module.exports = function (environment, config) {
  if (!isCompilingDfx) {
    return {};
  }

  if (!config.dfx) {
    config.dfx = {};
  }

  if (!config.dfx.canisters) {
    config.dfx.canisters = {};
  }

  if (!config.dfx.agents) {
    config.dfx.agents = {};
  }

  const network = process.env.DFX_NETWORK || (environment === 'production' ? 'ic' : 'local');

  if (!config.dfx.defaultAgent) {
    config.dfx.defaultAgent = network;
  }

  registerAgents (config.dfx.agents, network);
  registerCanisters (config.dfx.canisters, network);

  return config;
};

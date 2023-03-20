const { forEach } = require('lodash');
const path = require('path');

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
  } catch (err) {}

  return {};
}

/**
 * Register canisters for the target environment. This method will add canisters
 * if they are not already defined.
 *
 * @param registry          Canister register
 * @param environment       Excuction environment
 */
function registerCanisters(registry, environment) {
  const network =
    process.env.DFX_NETWORK || (environment === 'production' ? 'ic' : 'local');
  const canisters = requireCanisters(network);

  forEach(canisters, (config, name) => {
    if (!registry[name]) registry[name] = config[network];
  });
}

/**
 * Update the configuration based on the execution environment.
 *
 * @param environment         The execution environment
 * @param config               Application configuration
 */
module.exports = function (environment, config) {
  if (!config.dfx) config.dfx = {};

  if (!config.dfx.canisters) config.dfx.canisters = {};

  registerCanisters(config.dfx.canisters, environment);

  return config;
};

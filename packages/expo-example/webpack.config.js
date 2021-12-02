const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['dice-ui'],
      },
    },
    argv
  );

  config.resolve.alias.react = path.join(path.resolve(__dirname), './node_modules/react');

  return config;
};

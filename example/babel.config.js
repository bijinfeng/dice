const path = require('path');
const pak = require('../packages/rn-vant/package.json');
const iconPak = require('../packages/rn-vant-icons/package.json');

module.exports = api => {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // For development, we want to alias the library to the source
            [pak.name]: path.join(__dirname, '../packages/rn-vant/', pak.source),
            [iconPak.name]: path.join(__dirname, '../packages/rn-vant-icons/', iconPak.source),
          },
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
    ],
  };
};

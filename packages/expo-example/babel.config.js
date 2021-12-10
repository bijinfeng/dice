module.exports = api => {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: ['@babel/plugin-proposal-export-namespace-from'],
  };
};

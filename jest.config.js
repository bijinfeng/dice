module.exports = {
  testEnvironment: 'node',
  testRegex: '/__tests__/.*\\.(test|spec)\\.(js|tsx?)$',
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|lodash-es|@ptomasroos/react-native-multi-slider|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  moduleNameMapper: {
    '@pingtou/rn-vant': '<rootDir>/packages/rn-vant/src',
  },
  preset: 'jest-expo',
};

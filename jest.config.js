module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: "node",
  setupTestFrameworkScriptFile: 'jest-extended',
  testRegex: '(/test/.*(test|spec))\\.(js?|ts?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
};

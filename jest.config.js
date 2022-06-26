/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const path = require("path");

const FULL_TEST = Boolean(process.env.FULL_TEST);
// jest.config.js
const { defaults } = require('jest-config');

const CONSOLE_FAIL_TYPES = ['error', 'warn'];

const ENABLE_COVERAGE = !!process.env.CI;
// Throw errors when a `console.error` or `console.warn` happens
/* by overriding the functions
CONSOLE_FAIL_TYPES.forEach((type) => {
  console[type] = (message) => {
    throw new VError.errorFromList(
      `Failing due to console.${type} while running test!\n\n${message}`,
    );
  };
});
*/
module.exports = {
  collectCoverage: FULL_TEST,
  collectCoverageFrom: [
    '__tests__/**/*.js',
    '!scripts/**/*.js',
    '!scripts/generateIndexes.js',
    'src/**/*.js',
    '!<rootDir>/node_modules/',
    '!src/prettier-comments/**/*.js',
  ],
  coverageReporters: ['clover', 'json', 'lcov'],
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['/node_modules/', '/scripts/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ['<rootDir>/tests/config/setup.js'],
  snapshotFormat: {
    escapeString: false,
    printBasicPrototype: false,
  },
  snapshotSerializers: [
    'jest-snapshot-serializer-raw',
    'jest-snapshot-serializer-ansi',
  ],
  testTimeout: 12500,
  testEnvironment: 'node',
  coverageReporters: ["text", "lcov"],
  testRegex: 'jsfmt\\.spec\\.js$|tests/unit/.*\\.js$',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

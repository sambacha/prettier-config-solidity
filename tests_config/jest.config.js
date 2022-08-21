// Simple Jest Configuration
'use strict';

const ENABLE_COVERAGE = false; // !!process.env.CI;

module.exports = {
    displayName: 'solidity',
    setupFiles: ['<rootDir>/tests-config/run-spec.js'],
    snapshotSerializers: ['<rootDir>/tests-config/raw-serializer.js'],
    testRegex: 'jspec\\.spec\\.js$|__tests__/.*\\.ts$',
    collectCoverage: ENABLE_COVERAGE,
    collectCoverageFrom: ['**/*.sol', "test/**/*.js', '!<rootDir>/node_modules/'],
    preset: 'ts-jest',
    testEnvironment: 'node',
};

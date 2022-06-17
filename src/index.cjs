/**
 * @file Prettier configuration for Solidity
 * @version 1.3.1
 * @summary base config adapted from AirBNB to reduce diff churn
 * @overrides solidity settings from Solidity Documentation
 * @note `printWidth` is not a line character capture
 * @dev `explicitTypes`
 * @solidity versions ^0.8.0 bytes1
 */

'use strict';

/**
 * @type {import('prettier').Options}
 */

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: true,
  endOfLine: 'lf',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  semi: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^@forge-std/(.*)$',
    '^ds-test/(.*)$',
    '^@openzeppelin/(.*)$',
    '^~(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 100,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: true,
        explicitTypes: 'always',
      },
    },
  ],
};

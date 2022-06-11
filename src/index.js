/**
 * @package prettier-config-solidity
 * @description Prettier configuration for Solidity
 * @version 1.8.0
 * 
 * @summary base config adapted from AirBNB to reduce AST Diff Churn.
 *    Additionally, this overrides the suggested settings from 
 *     the reference Solidity Documentation.
 *
 * @note Solidity does not support dangling commas, which would greatly
 *    improve the stated objectives of this configuration file
 * @note `printWidth` is not a line character capture
 *
 * @note `explicitTypes` are enforced for ABI conformance
 *    meaning `unit` is turned to `uint256`
 *
 * @note In Solidity versions ^0.8.0, bytes1 is removed
 *
 */

'use strict';

/** 
* @exports prettier-config-solidity 
*/

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
plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
importOrder: ["^@forge-std/(.*)$", "^ds-test/(.*)$", "^@openzeppelin/(.*)$","^~(.*)$", "^[./]"],
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

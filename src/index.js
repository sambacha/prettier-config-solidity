<<<<<<< HEAD
"use strict";
exports.__esModule = true;
exports.overrides = exports.importOrderSortSpecifiers = exports.importOrderSeparation = exports.importOrder = exports.plugins = exports.semi = exports.quoteProps = exports.trailingComma = exports.tabWidth = exports.singleQuote = exports.printWidth = exports.endOfLine = exports.bracketSameLine = exports.bracketSpacing = exports.arrowParens = void 0;
||||||| b37967c
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

=======
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

>>>>>>> defe8c1cba60ff1673f23094d1ca615e4c9ff9b1
/**
 * @type {import('prettier').Options}
 */
<<<<<<< HEAD
exports.arrowParens = 'always';
exports.bracketSpacing = true;
exports.bracketSameLine = true;
exports.endOfLine = 'lf';
exports.printWidth = 80;
exports.singleQuote = true;
exports.tabWidth = 2;
exports.trailingComma = 'all';
exports.quoteProps = 'as-needed';
exports.semi = true;
exports.plugins = [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
];
exports.importOrder = [
    '^@forge-std/(.*)$',
    '^ds-test/(.*)$',
    '^@openzeppelin/(.*)$',
    '^~(.*)$',
    '^[./]',
];
exports.importOrderSeparation = true;
exports.importOrderSortSpecifiers = true;
exports.overrides = [
||||||| b37967c
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
importOrder: ["^@forge-std/(.*)$", "^ds-test/(.*)$", "^@openzeppelin/(.*)$"","^~(.*)$", "^[./]"],
importOrderSeparation: true,
importOrderSortSpecifiers: true,
  overrides: [
=======
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
>>>>>>> defe8c1cba60ff1673f23094d1ca615e4c9ff9b1
    {
        files: '*.sol',
        options: {
            printWidth: 100,
            tabWidth: 4,
            useTabs: false,
            singleQuote: false,
            bracketSpacing: true,
            explicitTypes: 'always'
        }
    },
<<<<<<< HEAD
];
||||||| b37967c
  ],
};
/** @exports prettier-config-solidity */
=======
  ],
};
>>>>>>> defe8c1cba60ff1673f23094d1ca615e4c9ff9b1

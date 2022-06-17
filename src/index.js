/**
 * @package Prettier configuration for Solidity
 * @version 1.4.0
 * @summary base config adapted from AirBNB to reduce diff churn
 * @note  solidity settings from Solidity Documentation
 * @solidity versions ^0.8.0 bytes1
 * this.scheama = require('http://json.schemastore.org/prettierrc'),
 */

'use strict';
/** @type {import('@types/prettier')} */
module.exports = {
  /*  editorconfig: true, */
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  semi: true,
  overrides: [
    {
      files: ['*.sol', '*.t.sol'],
      /** @type {import('prettier-config-solidity/dist/index.d.ts')} */
      //      plugins: [require.resolve('prettier-plugin-solidity')],
      options: {
        /**
         *  @param printWidth
         *  @summary printWidth is not a line character capture
         *  @see {@link https://prettier.io/docs/en/rationale.html#print-width}
         */
        printWidth: 100,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: true,
        /**
         *  @param  explicitTypes
         *  @summary enforces `explicitTypes` to be `true`,
         *  @example Example: unit = unit256
         */
        explicitTypes: 'always',
      },
    },
  ],
};

/**
 * @file Prettier configuration for Solidity
 * @version 1.8.0
 * @summary base config adapted from AirBNB to reduce diff churn
 * @overrides solidity settings from Solidity Documentation
 * @note `printWidth` is not a line character capture
 * @dev `explicitTypes`
 * @solidity versions ^0.8.0 bytes1
 * @defaults {@link https://prettier.io/docs/en/configuration.html}
 * https://prettier.io/docs/en/plugins.html#defaultoptions
 *
 *  bracketSpacing: false,
 *  tabWidth: 4
 *
 */

// @ts-check
/**
 * @type {import('prettier').Options}
 */

module.exports = {
  /*  editorconfig: true, */
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
  overrides: [
    {
      files: ['*.sol', '*.t.sol'],
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

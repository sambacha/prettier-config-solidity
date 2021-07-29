/**
 * @file Prettier configuration for Solidity
 * @version 1.2.0
 * @summary base config adapted from AirBNB to reduce diff churn
 * @overrides solidity settings from Solidity Documentation
 * @note `printWidth` is not a line character capture
 * @dev `explicitTypes`
 * @solidity versions ^0.8.0 bytes1
 */

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  endOfLine: 'lf',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  proseWrap: 'always',
  semi: true,
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: true,
        explicitTypes: 'always',
      },
    },
  ],
};
/** @exports prettier-config-solidity */

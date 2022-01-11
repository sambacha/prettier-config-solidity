/**
 * @file Prettier configuration for Solidity
 * @version 2.0.0
 * @summary base config adapted from AirBNB to reduce diff churn
 * @overrides solidity settings from Solidity Documentation
 * @note `printWidth` is not a line character capture
 * @dev `explicitTypes`
 * @solidity versions ^0.8.0 bytes1
 */

"use strict";

module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  quoteProps: "as-needed",
  semi: true,
  overrides: [
    {
      files: "*.sol",
      options: {
        compiler: "^0.8.0",
        printWidth: 100,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: true,
        explicitTypes: "always",
      },
    },
    {
      files: "contracts/**/*.sol",
      options: {
        compiler: "^0.8.0",
      },
    },
    {
      files: "src/**/*.sol",
      options: {
        compiler: "^0.8.0",
      },
    },
  ],
};
/** @exports prettier-config-solidity */

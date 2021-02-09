/**
* @file Prettier configuration for Solidity
* @version 1.0.2 
* @license CC0-1.0
* @note Settings based from Solidity Documentation
*/

'use strict';

module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "auto",
  printWidth: 100,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  overrides: [
    {
      files: "*.sol",
      options: {
        printWidth: 120,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
        explicitTypes: "always",
      }
    }
  ]
};

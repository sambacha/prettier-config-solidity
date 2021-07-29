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

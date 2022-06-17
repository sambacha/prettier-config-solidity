/**
 * @type {import('prettier').Options}
 */
export const arrowParens = 'always';
export const bracketSpacing = true;
export const bracketSameLine = true;
export const endOfLine = 'lf';
export const printWidth = 80;
export const singleQuote = true;
export const tabWidth = 2;
export const trailingComma = 'all';
export const quoteProps = 'as-needed';
export const semi = true;
export const plugins = [
  require.resolve('@trivago/prettier-plugin-sort-imports'),
];
export const importOrder = [
  '^@forge-std/(.*)$',
  '^ds-test/(.*)$',
  '^@openzeppelin/(.*)$',
  '^~(.*)$',
  '^[./]',
];
export const importOrderSeparation = true;
export const importOrderSortSpecifiers = true;
export const overrides = [
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
];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = exports.importOrderSortSpecifiers = exports.importOrderSeparation = exports.importOrder = exports.plugins = exports.semi = exports.quoteProps = exports.trailingComma = exports.tabWidth = exports.singleQuote = exports.printWidth = exports.endOfLine = exports.bracketSameLine = exports.bracketSpacing = exports.arrowParens = void 0;
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

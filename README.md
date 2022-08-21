<h1 align="center">
 <br>
 prettier-config-solidity
</h1>

<p align="center">
a conformant prettier configuration for Solidity         
</p>

[![nodejs](https://github.com/sambacha/prettier-config-solidity/actions/workflows/nodejs.yml/badge.svg)](https://github.com/sambacha/prettier-config-solidity/actions/workflows/nodejs.yml)
[![codecov](https://codecov.io/gh/sambacha/prettier-solidity-config/branch/master/graph/badge.svg?token=1k3OYjAl8C)](https://codecov.io/gh/sambacha/prettier-solidity-config)

- [Quickstart](#quickstart)
- [Overview](#overview)
- [Motivation](#motivation)
  - [Reducing AST Churn](#whitespace)
    - [whitespace](#whitespace)
    - [arrow-parens](#arrow-parens)
    - [one var](#one-var)
- [Install](#install)
  - [Prettier](#prettier)
  - [with SolHint](#with-solhint)
- [License](#license)

## Quickstart

See the [dappspec format](https://github.com/sambacha/dappspec) for additional style guide directives 

#### Prettier & Plugin+Config

>**Warning**
>A Major Semver release for prettier is upcoming, ensure you are using compatible versions

```bash
npm i -D prettier@^2 prettier-plugin-solidity@latest prettier-config-solidity@latest  --save-exact
```


#### create `prettier.config.js` file

```javascript
'use strict';
const prettierConfig = require('prettier-config-solidity');
module.exports = prettierConfig;
```

#### Editorconfig 

```cfg
# Stop the editor from looking for .editorconfig files in the parent directories
# root = true

[*]
# Non-configurable Prettier behaviors
charset = utf-8
insert_final_newline = true
# Caveat: Prettier won’t trim trailing whitespace inside template strings, but your editor might.
# trim_trailing_whitespace = true

# Configurable Prettier behaviors
# (change these if your Prettier config differs)
end_of_line = lf
indent_style = space
indent_size = 2
max_line_length = 80

# Solidity
# https://github.com/sambacha/prettier-config-solidity
[*.sol]
indent_size = 4
indent_style = space

# Ignore fixtures and vendored files
[{dist,artifacts,vendor,test,fixtures,tests,cache,__snapshot__,}/**]
charset = unset
end_of_line = unset
indent_size = unset
indent_style = unset
insert_final_newline = unset
trim_trailing_spaces = unset
```

## Overview

Prettier configuration for Solidity

## Motivation

This configuration is optimized to reduce **diff churn** and improve AST
results.

The following rules are employed, with specific reasonings to their choice
(source: airbnb style guide):

## `printWidth`

The behavior of `printWidth` is located here:
[prettier-solidity/prettier-plugin-solidity/blob/b504261047d0019c924d53a2b9ab0738b1e05703/src/nodes/FunctionDefinition.js#L99](https://github.com/prettier-solidity/prettier-plugin-solidity/blob/b504261047d0019c924d53a2b9ab0738b1e05703/src/nodes/FunctionDefinition.js#L99)

See more here
[prettier-plugin-solidity/issues/474#issuecomment-823670541](https://github.com/prettier-solidity/prettier-plugin-solidity/issues/474#issuecomment-823670541)

### whitespace

[source@airbnb/javascript#whitespace--in-braces](https://github.com/airbnb/javascript#whitespace--in-braces)

- 19.12 Add spaces inside curly braces. eslint: object-curly-spacing

```jsx
// bad
const foo = { clark: 'kent' };

// good
const foo = { clark: 'kent' };
```

#### arrow-parens

- 8.4 Always include parentheses around arguments for clarity and consistency.
  eslint: arrow-parens

[source@airbnb/javascript#arrows--one-arg-parens](https://github.com/airbnb/javascript#arrows--one-arg-parens)

> Why? Minimizes diff churn when adding or removing arguments.

```jsx
// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map(
  (number) =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`,
);

// good
[1, 2, 3].map(
  (number) =>
    `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`,
);

// bad
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

#### one var

- 13.2 Use one const or let declaration per variable or assignment. eslint:
  one-var

> Why? It’s easier to add new variable declarations this way, and you never have
> to worry about swapping out a ; for a , or introducing punctuation-only diffs.
> You can also step through each declaration with the debugger, instead of
> jumping through all of them at once.

##### [ref:eslint/rules/one-var](https://eslint.org/docs/rules/one-var)

```jsx
// bad
const items = getItems(),
  goSportsTeam = true,
  dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
  goSportsTeam = true;
dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

#### 20.2 Additional trailing comma: Yup. eslint: comma-dangle

    Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the trailing comma problem in legacy browsers.

```diff
// bad - git diff without trailing comma
const hero = {
     firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
     firstName: 'Florence',
     lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
```

#### 8.6 Enforce the location of arrow function bodies with implicit returns. eslint: implicit-arrow-linebreak

```js
// bad
(foo) => bar;

(foo) => bar;

// good
(foo) => bar;
(foo) => bar;
(foo) => bar;
```

## Install

#### Prettier

```bash
npm i -D prettier prettier-plugin-solidity@latest prettier-config-solidity  --save-exact
```

```bash
npm i -D prettier prettier-plugin-solidity@latest prettier-config-solidity  --save-exact --legacy-peer-deps
```

or

```bash
yarn add -D prettier prettier-plugin-solidity@latest prettier-config-solidity  --save-exact
```

#### with SolHint

```bash
npm install --save-dev solhint solhint-plugin-prettier prettier prettier-plugin-solidity --save-exact
```

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## License

SPDX-License-Identifier: Apache-2.0

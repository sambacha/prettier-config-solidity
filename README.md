# prettier-solidity-config

## Overview

Prettier configuration for Solidity

## Abstract

This configuration is optimized to reduce **diff churn** and improve AST results. 

The following rules are employed, with specific reasonings to their choice (source: airbnb style guide):

###  whitespace

[source@airbnb/javascript#whitespace--in-braces](https://github.com/airbnb/javascript#whitespace--in-braces)

- 19.12 Add spaces inside curly braces. eslint: object-curly-spacing

```jsx



    // bad
    const foo = {clark: 'kent'};

    // good
    const foo = { clark: 'kent' };

```

#### arrow-parens

- 8.4 Always include parentheses around arguments for clarity and consistency. eslint: arrow-parens

[source@airbnb/javascript#arrows--one-arg-parens](https://github.com/airbnb/javascript#arrows--one-arg-parens)

 > Why? Minimizes diff churn when adding or removing arguments.
```jsx
    // bad
    [1, 2, 3].map(x => x * x);

    // good
    [1, 2, 3].map((x) => x * x);

    // bad
    [1, 2, 3].map(number => (
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
    ));

    // good
    [1, 2, 3].map((number) => (
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
    ));

    // bad
    [1, 2, 3].map(x => {
      const y = x + 1;
      return x * y;
    });

    // good
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
```

##### one var

- 13.2 Use one const or let declaration per variable or assignment. eslint: one-var

> Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a ; for a , 
> or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

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
    (foo) =>
      bar;

    (foo) =>
      (bar);

    // good
    (foo) => bar;
    (foo) => (bar);
    (foo) => (
       bar
    )
```


## Usage

Install both prettier and prettier-plugin-solidity:

```bash
npm install --save-dev prettier prettier-plugin-solidity prettier-config-solidity --exact
```

> Note:the `--exact` flag, as prettier versioning does not follow semver and different versions may produce different linting results

Run prettier in your contracts:

```bash
npx prettier --write 'contracts/**/*.sol'
```

You can add a script for running prettier on all your contracts:

```json
"prettier": "prettier --write 'contracts/**/*.sol'"
```

Or you can use it as part of your linting to check that all your code is prettified:

```json
"lint": "prettier --list-different 'contracts/**/*.sol'"
```

## License

CC0-1.0 or ISC

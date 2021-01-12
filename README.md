# prettier-solidity-config

## Overview

Prettier configuration for Solidity

## Usage

Install both prettier and prettier-plugin-solidity:

```bash
npm install --save-dev prettier prettier-plugin-solidity --exact
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

# prettier-solidity-config

## Overview

Prettier configuration for Solidity

## Quickstart

Grab the configuration directly, instead of installing it as a dep.

```bash
wget https://gist.githubusercontent.com/sambacha/714ef36dd85af5178220859c50eede2a/raw/fc1d305b5a10303a35b7dba18001abd5aa933a6d/.prettierrc.js
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

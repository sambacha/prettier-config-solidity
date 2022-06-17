#!/usr/bin/env bash
node --trace-warnings node_modules/.bin/prettier --loglevel=debug --config src/index.js --parser solidity-parser test_validate/src/contracts/*.sol
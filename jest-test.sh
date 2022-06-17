#!/usr/bin/env bash

set -o errexit
echo "Starting jest testing..."
node --expose-gc node_modules/.bin/jest --coverage --globals "{\"coverage\":true}" /
sleep 1
echo "Process script terminated"
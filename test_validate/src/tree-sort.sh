#!/usr/bin/env bash
set -euo pipefail
tree --version
tree --sort=name src/ -f -J > tree.json
exit 0

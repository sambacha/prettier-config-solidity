#!/usr/bin/env bash
export LC_ALL=C
tests_to_run=$(find src/ -name "*.sol" ! -path "src/" | LC_ALL=C sort)

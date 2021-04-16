#!/bin/bash
export CODECOV_TOKEN='6ec88e00-584c-438e-b5a2-c220fc764ee4'
export NODE_ENV='test'
export FULL_TEST=1
npm run test -- -u

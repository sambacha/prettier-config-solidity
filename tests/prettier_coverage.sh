#!/bin/bash
export CODECOV_TOKEN='6ec88e00-584c-438e-b5a2-c220fc764ee4'
echo "Staring GitHub CI"
echo "action_state=yellow" >> $GITHUB_ENV
echo "${{ env.action_state }}"
echo "::debug::Get the Git SHA"
echo $GITHUB_SHA
echo "::debug::Get the Git REF"
echo $GITHUB_BASE_REF
echo "::debug::Set the CI Locales"
export LANG en_US.UTF-8
export LANGUAGE en_US.UTF-8
export LC_ALL en_US.UTF-8
echo "::debug::Run npm ci"
npm ci
echo "::debug::Execute testing"
npx jest -u
echo "::debug::Run codecov"
npx codecov
echo "::debug::Finish CI testing"

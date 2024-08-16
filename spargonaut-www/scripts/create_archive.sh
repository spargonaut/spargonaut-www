#!/usr/bin/env bash

set -euo pipefail

SHORT_HASH=$(git rev-parse --short HEAD)

echo ${SHORT_HASH} > ./public/commit.txt
tar zcf ./spargonaut.${1}_${SHORT_HASH}.tgz ./public
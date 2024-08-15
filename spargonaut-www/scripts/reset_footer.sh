#!/usr/bin/env bash

set -euo pipefail

FILES_TO_RESET=$(git diff --name-only)

for FILE in $FILES_TO_RESET; do
  sed -i 's/<p>to be incredibly lazy<\/p>/<p>working really hard<\/p>/' ${FILE/spargonaut-www\//}
done

# stage files with more than just whitespace-only changes
if [[ $(git diff -w --no-color | wc -l) -ne 0 ]]; then
  git diff -w --no-color | git apply --cached --ignore-whitespace
fi

# the only files not staged at this point should whitespace only changes
git checkout -- .

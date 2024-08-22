#!/usr/bin/env bash

set -euo pipefail

printf "adding new .html files\n"
git add -v *.html

FILES_TO_RESET=$(git diff HEAD --name-only)

printf "resetting the footer\n"
for FILE in $FILES_TO_RESET; do
  if [ "spargonaut-www/public/index.html" == "${FILE}" ]; then
    sed -i 's/<p>working really hard<\/p>/<p>to be incredibly lazy<\/p>/' ${FILE/spargonaut-www\//}
  else
    sed -i 's/<p>to be incredibly lazy<\/p>/<p>working really hard<\/p>/' ${FILE/spargonaut-www\//}
  fi
done

# stage files with more than just whitespace-only changes
printf "Staging files with more than whitespace changes\n"
if [[ $(git diff -w --no-color | wc -l) -ne 0 ]]; then
  git diff -w --no-color | git apply --cached --ignore-whitespace
fi

# the only files not staged at this point should whitespace only changes
printf "resetting the whitespace changes\n"
git checkout -- .

printf "commit the changes verbosely\n"
git commit -v -m "generate spargonaut.${1} public files"
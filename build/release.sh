git checkout master
git merge dev

#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

# commit
git add -A
git commit -m "[build] $VERSION"

git push origin master
fi

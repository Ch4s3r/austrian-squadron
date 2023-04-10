#!/usr/bin/env sh
set -e
yarn install
yarn run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:ch4s3r/austrian-squadron.git main:gh-pages
cd -
rm -rf dist
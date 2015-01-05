#!/usr/bin/env bash

git push

grunt build

git branch -D gh-pages
git push origin :gh-pages
git checkout --orphan gh-pages
git reset

./make_photos.py dist/images dist/photos.json
cp -r dist/* .

git add -f index.html 404.html bower_components/ favicon.ico images/ photos.json scripts/ styles/ views/
git commit -m "deploying pages"
git push origin gh-pages
git clean -fxd -e node_modules -e bower_components
git checkout master

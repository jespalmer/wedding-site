#!/usr/bin/env bash

git push

npm install
bower install
grunt build

git branch -D gh-pages
git push origin :gh-pages
git checkout --orphan gh-pages
git reset

./make_photos.py dist/images dist/photos.json
cp -r dist/* .
rm .gitignore

git add index.html 404.html bower_components/ favicon.ico images/ photos.json scripts/ styles/ views/
git commit -m "deploying pages"
git push origin gh-pages
git clean -fd
git checkout master

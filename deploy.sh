#!/usr/bin/env bash

git branch -D gh-pages
git push origin :gh-pages
git checkout --orphan gh-pages
git reset

grunt build
cp -r dist/* .
rm .gitignore

git add index.html 404.html bower_components/ favicon.ico images/ photos.json scripts/ styles/ views/
git commit -m "deploying pages"
git push origin gh-pages
git clean -fd
git checkout master

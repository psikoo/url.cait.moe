#!/bin/bash

echo "> url"
git pull
chmod +x ./build.sh
rm -rf ./out
rsync -Rr ./ ./out/
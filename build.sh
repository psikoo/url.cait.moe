#!/bin/bash

echo "> cmd"
git pull
chmod +x ./build.sh
rm -rf ./out
rsync -Rr ./ ./out/
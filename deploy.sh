#!/bin/bash

echo "compiling less files"
lessc ./src/less/styles.less ./prod/styles.css

echo "copying html files to prod"
cp ./src/*.html ./prod/

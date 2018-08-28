#!/bin/bash

echo "compiling less files"
lessc ./src/less/styles.less ./prod/styles/styles.css

echo "copying html files to prod"
cp ./src/*.html ./prod/

echo "copying the js files"
cp ./src/js/*.js ./prod/js/

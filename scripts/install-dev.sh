#!/usr/bin/env bash

# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

# Installing dependencies
echo "Preparing PHP dependencies..."
$SCRIPT_DIR/backend.sh composer install
echo ""
echo "Preparing JavaScript/CSS dependencies..."
echo ""
$SCRIPT_DIR/frontend.sh yarn
echo ""
echo "Regenerating frontend files with each source update."
echo 'Wait untill you see "DONE Compiled successfully"'
echo "Press CTRL+C to exit from terminal (error after exiting this way – is expected)"
echo ""
$SCRIPT_DIR/frontend.sh yarn run encore dev --watch
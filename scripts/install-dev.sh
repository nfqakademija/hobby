#!/usr/bin/env bash

# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

set -e

# Updating .env.local file to set APP_ENV variable
if [ -f "$SCRIPT_DIR/../.env.local" ]; then
    if [ `grep "APP_ENV=dev" "$SCRIPT_DIR/../.env.local" | wc -l` -eq "1" ]; then
        echo "File .env.local already have APP_ENV=dev"
    elif [ `grep "APP_ENV=prod" "$SCRIPT_DIR/../.env.local" | wc -l` -eq "1" ]; then
        echo "Updating .env.local file: Switching from PROD to DEV..."
        cat "$SCRIPT_DIR/../.env.local" > "$SCRIPT_DIR/../.env.tmp"
        cat "$SCRIPT_DIR/../.env.tmp" | sed "s/APP_ENV=prod/APP_ENV=dev/" > "$SCRIPT_DIR/../.env.local"
        rm -f "$SCRIPT_DIR/../.env.tmp"
    else
        echo >&2 "You need to configure APP_ENV=dev in .env.local";
        echo >&2 "to switch to development configuration";
        exit 1
    fi
fi

# Installing dependencies
echo "Preparing PHP dependencies..."
$SCRIPT_DIR/backend.sh composer install
echo ""
echo "Preparing JavaScript/CSS dependencies..."
echo ""
$SCRIPT_DIR/frontend.sh yarn
echo ""
echo "Regenerating frontend files with each source update."
echo 'Wait until you see "DONE Compiled successfully"'
echo "Press CTRL+C to exit from terminal (error message after exiting this way – is known issue #5457)"
echo ""
$SCRIPT_DIR/frontend.sh yarn run encore dev --watch
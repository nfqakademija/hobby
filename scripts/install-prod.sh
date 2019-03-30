#!/usr/bin/env bash


# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

set -e

# Updating .env.local file to set APP_ENV variable
if [ -f "$SCRIPT_DIR/../.env.local" ]; then
    if [[ `grep "APP_ENV=prod" "$SCRIPT_DIR/../.env.local" | wc -l` -eq "1" ]]; then
        echo "File .env.local already have APP_ENV=prod"
    elif [[ `grep "APP_ENV=dev" "$SCRIPT_DIR/../.env.local" | wc -l` -eq "1" ]]; then
        echo "Updating .env.local file: Switching from DEV to PROD..."
        cat "$SCRIPT_DIR/../.env.local" > "$SCRIPT_DIR/../.env.tmp"
        cat "$SCRIPT_DIR/../.env.tmp" | sed "s/APP_ENV=dev/APP_ENV=prod/" > "$SCRIPT_DIR/../.env.local"
        rm -f "$SCRIPT_DIR/../.env.tmp"
    else
        echo >&2 "You need to configure APP_ENV=prod in .env.local";
        echo >&2 "to switch to production configuration";
        exit 1
    fi
else
    echo "Generating .env.local file..."
    cat "$SCRIPT_DIR/../.env" | sed "s/APP_ENV=dev/APP_ENV=prod/" > "$SCRIPT_DIR/../.env.local"
fi

# Installing dependencies
echo "Preparing PHP dependencies..."
APP_ENV=prod $SCRIPT_DIR/backend.sh composer install --no-dev
echo ""
echo "Preparing JavaScript/CSS dependencies..."
echo ""
$SCRIPT_DIR/frontend.sh yarn
echo ""
echo "Preparing JavaScript/CSS dependencies..."
echo ""
$SCRIPT_DIR/frontend.sh yarn run encore production

echo "Open your browser at http://127.0.0.1:8000"
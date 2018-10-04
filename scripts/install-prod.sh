#!/usr/bin/env bash


# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

# Check for common configuration error
if [ `grep "APP_ENV=dev" "$SCRIPT_DIR/../.env" | wc -l` != "1" ]; then
    echo >&2 "You need to configure APP_ENV=prod in .env";
    echo >&2 "to switch to production configuration";
    exit 1
fi

set -e

# Installing dependencies
echo "Preparing PHP dependencies..."
$SCRIPT_DIR/backend.sh composer install
echo ""
echo "Preparing JavaScript/CSS dependencies..."
echo ""
$SCRIPT_DIR/frontend.sh yarn
echo ""
echo "Preparing JavaScript/CSS dependencies..."
echo ""
$SCRIPT_DIR/frontend.sh yarn run encore production

echo "Open your browser at http://127.0.0.1:8000"
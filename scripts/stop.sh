#!/usr/bin/env bash

# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

# Stop server
echo "Stopping docker containers..."
docker-compose -f "$SCRIPT_DIR/docker-compose.yml" kill
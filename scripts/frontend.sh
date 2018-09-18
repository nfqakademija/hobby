#!/usr/bin/env bash

# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

# Prerequisits
docker --version > /dev/null 2>&1 || { echo >&2 "Docker not found. Please install it via https://docs.docker.com/install/"; exit 1; }
docker-compose --version > /dev/null 2>&1 || { echo >&2 "Docker-compose not found. Please install it via https://docs.docker.com/compose/install/"; exit 1; }

# Entering into PHP container (simulating SSH/terminal)
echo "JavaScript/CSS dependencies can be installed via: yarn"
echo "Assect compiling for production: yarn run encore production"
echo "Assect compiling during development: yarn run encore dev --watch"
echo 'Type "exit" to get out of terminal'
docker-compose -f "$SCRIPT_DIR/docker-compose-tools.yml" run frontend.symfony
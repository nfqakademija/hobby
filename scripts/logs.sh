#!/usr/bin/env bash

# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

# Prerequisits
docker --version > /dev/null 2>&1 || { echo >&2 "Docker not found. Please install it via https://docs.docker.com/install/"; exit 1; }
docker-compose --version > /dev/null 2>&1 || { echo >&2 "Docker-compose not found. Please install it via https://docs.docker.com/compose/install/"; exit 1; }

echo "For symfony logs, check var/log folder"
echo "Pres CTRL+C to exit terminal (error after exiting is expected)"
echo "Infrastructure logs"
docker-compose -f "$SCRIPT_DIR/docker-compose.yml" logs -f

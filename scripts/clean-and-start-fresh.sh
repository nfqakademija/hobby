#!/usr/bin/env bash

# Make us independent from working directory
pushd `dirname $0` > /dev/null
SCRIPT_DIR=`pwd`
popd > /dev/null

echo "This will remove Datase content, remove logs and remove downloaded dependencies!"
read -p "Are you sure (Y/n)? " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "If it fails, you may need to run this with sudo"
    set -x

    echo "Removing cached files..."
    sudo rm -Rf $SCRIPT_DIR/../.docker/*
    sudo mkdir -p -m 777 $SCRIPT_DIR/../.docker/ide-home
    touch $SCRIPT_DIR/../.docker/ide-home/.gitkeep

    echo "Removing symfony cache..."
    sudo rm -Rf $SCRIPT_DIR/../var/cache/*

    echo "Removing downloaded dependencies..."
    rm -Rf $SCRIPT_DIR/../vendor
    rm -Rf $SCRIPT_DIR/../node_modules

    echo "Removing docker containers..."
    docker rm -f php.symfony
    docker rm -f nginx.symfony
    docker rm -f mysql.symfony
    docker rm -f frontend.symfony
    docker rm -f ide.symfony

    echo "Pulling newest container images..."
    docker-compose -f "$SCRIPT_DIR/docker-compose.yml" pull
    docker-compose -f "$SCRIPT_DIR/docker-compose-tools.yml" pull

    echo "Everything cleared"
    echo "You can start fresh with: scripts/start.sh && scripts/install-dev.sh"
else
    echo "Leaving old stuff"
    exit 1
fi
#!/usr/bin/env bash

# To pass parameers into container
ARGS=$@

# Prerequisits
docker --version > /dev/null 2>&1 || { echo >&2 "Docker not found. Please install it via https://docs.docker.com/install/"; exit 1; }
docker-compose --version > /dev/null 2>&1 || { echo >&2 "Docker-compose not found. Please install it via https://docs.docker.com/compose/install/"; exit 1; }

if [ `docker ps | grep php.symfony | wc -l` != "1" ]; then
    echo >&2 "Docker containers not started. Execute scripts/start.sh first"
    exit 1
fi

# Entering into PHP container (simulating SSH/terminal)
if [ "$ARGS" != "" ]; then
    echo "Executing in PHP container: $ARGS"
    docker exec -it php.symfony bash -c "$ARGS"
else
    echo "Dependencies can be installed via: composer install"
    echo "Many Symfony tools can be accessed via: bin/console"
    echo 'Type "exit" to get out of terminal'
    docker exec -it php.symfony bash
fi
#!/usr/bin/env bash

# This script prepares all dependent files to be deployed to server as a single .tar file
# This script intended to be executed in Jenkins CI, but likelly to be extended by you.

set -e # Stop on error
set -x # Show commands being executed

# Downloading dependencies and building frontend
APP_ENV=prod composer install --no-dev --no-scripts --no-interaction --optimize-autoloader
yarn
yarn run encore production

# <-- This is a good place to add custom commands for your project

# Generating deployment artifact (one file with everything you need to be deployed on the server)
tar czf project.tar.gz --owner 0 --group 0 --anchored $( \
    ls -a | tail -n +3 \
    | grep -v "node_modules" \
    | grep -v ".git" \
    | grep -v ".deploy" \
    | grep -v ".docker" \
    | grep -v ".idea" \
)

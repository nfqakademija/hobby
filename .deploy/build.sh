#!/usr/bin/env bash

# This script prepares all dependent files to be deployed to server as a single .tar file
# This script intended to be executed in Jenkins CI, but likelly to be extended by you.

set -e # Stop on error
set -x # Show commands being executed

# Downloading dependencies and building frontend
composer install --no-dev --no-scripts --no-interaction --optimize-autoloader
yarn
yarn run encore production

# <-- This is a good place to add custom commands for your project

# Generating deployment artifact (one file with everything you need to be deployed on the server)
tar czf project.tar.gz * --exclude="node_modules" --exclude=".git" --owner 0 --group 0 --anchored

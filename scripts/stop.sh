#!/usr/bin/env bash

# Stop server
echo "Stopping docker containers..."
docker-compose -f "$SCRIPT_DIR/docker-compose.yml" kill
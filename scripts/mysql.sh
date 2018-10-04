#!/usr/bin/env bash

# Prerequisits
docker --version > /dev/null 2>&1 || { echo >&2 "Docker not found. Please install it via https://docs.docker.com/install/"; exit 1; }
docker-compose --version > /dev/null 2>&1 || { echo >&2 "Docker-compose not found. Please install it via https://docs.docker.com/compose/install/"; exit 1; }

if [ `docker ps | grep mysql.symfony | wc -l` != "1" ]; then
    echo >&2 "Docker containers not started. Execute scripts/start.sh first"
fi

PASSWORD="p9iijKcfgENjBWDYgSH7"
USER="root"
HOST=$(docker port mysql.symfony 3306/tcp | cut -d ":" -f 1)
PORT=$(docker port mysql.symfony 3306/tcp | cut -d ":" -f 2)
echo "Login credentials to MySql server:"
echo "User: $USER"
echo "Password: $PASSWORD"
echo "Host: $HOST"
echo "Port: $PORT"
echo ""
echo 'Type "exit" to get out of MySql terminal'
echo ""
docker exec -it mysql.symfony mysql -uroot -h127.0.0.1 --password=p9iijKcfgENjBWDYgSH7

#!/bin/bash

docker-compose down --volumes --remove-orphans
docker system prune -af
docker-compose up --build

#!/bin/bash

# Build API Server Image
docker build -t assignment-api-server-image .

# Start Containers
docker-compose up

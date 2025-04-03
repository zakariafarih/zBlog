#!/bin/bash

APP_NAME=zblog-frontend

echo ">> Logging into Heroku Container Registry..."
heroku container:login

echo ">> Pushing Docker image to Heroku..."
heroku container:push web --app $APP_NAME

echo ">> Releasing Docker image..."
heroku container:release web --app $APP_NAME

echo ">> Done! Opening app..."
heroku open --app $APP_NAME

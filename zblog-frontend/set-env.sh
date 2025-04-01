#!/bin/bash
# This script reads the .env file in the project root and sets each key=value pair
# to the Heroku app named "zblog-frontend".

ENV_FILE=".env"
HEROKU_APP="zblog-frontend"

if [ ! -f "$ENV_FILE" ]; then
  echo "❌ .env file not found at $ENV_FILE"
  exit 1
fi

echo "🔧 Setting environment variables for Heroku app: $HEROKU_APP..."

while IFS='=' read -r key value
do
  # Skip blank lines and comments (lines starting with #)
  if [[ -z "$key" ]] || [[ "$key" =~ ^# ]]; then
    continue
  fi

  # Remove any surrounding quotes from the value
  clean_value=$(echo "$value" | sed -e 's/^"//' -e 's/"$//')

  echo "Setting $key..."
  heroku config:set "$key=$clean_value" --app "$HEROKU_APP" > /dev/null
done < "$ENV_FILE"

echo "✅ All environment variables have been set for $HEROKU_APP."

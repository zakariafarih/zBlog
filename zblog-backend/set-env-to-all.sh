#!/bin/bash

# The path to your master .env file
ENV_FILE=".env"

# List of Heroku app names
HEROKU_APPS=(
  zblog-post-core
  zblog-user-core
  zblog-comment-core
  zblog-s3-core
)

if [ ! -f "$ENV_FILE" ]; then
  echo "❌ .env file not found at $ENV_FILE"
  exit 1
fi

for app in "${HEROKU_APPS[@]}"; do
  echo "🔧 Setting env vars for: $app"

  while IFS='=' read -r key value
  do
    # Skip comments and blank lines
    if [[ "$key" =~ ^#.*$ ]] || [[ -z "$key" ]]; then
      continue
    fi

    # Strip surrounding quotes
    clean_value=$(echo "$value" | sed -e 's/^"//' -e 's/"$//')

    heroku config:set "$key=$clean_value" --app "$app" > /dev/null
  done < "$ENV_FILE"

  echo "✅ Done setting vars for $app"
done

echo "🎉 All Heroku apps configured!"

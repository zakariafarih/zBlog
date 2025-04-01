#!/bin/bash

# Define mapping: local directory => Heroku app name
declare -A SERVICES=(
  ["zblog-user-core"]="zblog-user-core"
  ["zblog-post-core"]="zblog-post-core"
  ["zblog-comment-core"]="zblog-comment-core"
  ["s3-core"]="zblog-s3-core"   # ⚠️ Custom mapping here
)

BASE_DIR="$(pwd)/zblog-backend"

echo "🚀 Starting build, push, and release for all services..."

for DIR in "${!SERVICES[@]}"; do
  HEROKU_APP="${SERVICES[$DIR]}"
  SERVICE_PATH="$BASE_DIR/$DIR"

  echo ""
  echo "📦 Building $DIR (Heroku: $HEROKU_APP)..."
  cd "$SERVICE_PATH" || { echo "❌ Failed to access $SERVICE_PATH"; exit 1; }

  ./mvnw clean package -DskipTests || { echo "❌ Maven build failed for $DIR"; exit 1; }

  echo "🐳 Pushing Docker image to Heroku for $HEROKU_APP..."
  heroku container:push web --app "$HEROKU_APP" || { echo "❌ Docker push failed for $HEROKU_APP"; exit 1; }

  echo "🚢 Releasing on Heroku app $HEROKU_APP..."
  heroku container:release web --app "$HEROKU_APP" || { echo "❌ Release failed for $HEROKU_APP"; exit 1; }

  echo "✅ Successfully deployed $HEROKU_APP"
  echo "--------------------------------------"
done

echo "🎉 All services deployed successfully!"

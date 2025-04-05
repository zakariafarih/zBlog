# sync-envs.sh
#!/bin/bash

set -e

echo "Syncing GitHub secrets from .env files..."

echo "Backend secrets:"
while IFS= read -r line || [[ -n "$line" ]]; do
  [[ "$line" == \#* || -z "$line" ]] && continue
  IFS='=' read -r key value <<< "$line"
  gh secret set "$key" --body "$value" --repo zakariafarih/zBlog
done < zblog-backend/.env

echo "Frontend secrets:"
while IFS= read -r line || [[ -n "$line" ]]; do
  [[ "$line" == \#* || -z "$line" ]] && continue
  IFS='=' read -r key value <<< "$line"
  gh secret set "$key" --body "$value" --repo zakariafarih/zBlog
done < zblog-frontend/.env

echo "VPS-wide secrets:"
while IFS= read -r line || [[ -n "$line" ]]; do
  [[ "$line" == \#* || -z "$line" ]] && continue
  IFS='=' read -r key value <<< "$line"
  gh secret set "$key" --body "$value" --repo zakariafarih/zBlog
done < .env

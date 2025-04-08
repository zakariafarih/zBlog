#!/usr/bin/env bash
# --------------- deploy-all.sh ---------------
# One-click script that cleans, builds, and spins up everything.

set -e

echo -e "\033[1;36m===========================================================\033[0m"
echo -e "\033[1;36m              zBlog Full Deployment Script                \033[0m"
echo -e "\033[1;36m===========================================================\033[0m"

# 1. Clean
echo -e "\033[1;33m[1/3] Cleaning up existing containers...\033[0m"
./clean.sh <<< "all ON" || true

# 2. Build all
echo -e "\033[1;34m[2/3] Building all services...\033[0m"
./build.sh <<< "all ON"

# 3. Up all
echo -e "\033[1;32m[3/3] Bringing up all services...\033[0m"
./up.sh <<< "all ON"

echo -e "\033[1;32mDeployment complete! All services should now be running.\033[0m"

#!/usr/bin/env bash
# --------------- build.sh ---------------
# Builds Docker images for selected services.
set -e

if ! command -v whiptail &> /dev/null; then
    echo "whiptail could not be found, please install it or use dialog."
    exit 1
fi

# =============== Optional Maven build ===============
if whiptail --title "Maven Build" --yesno "Do you want to run Maven clean build for all backend services before building Docker images?" 10 60; then
    echo -e "\033[1;34mRunning Maven clean package...\033[0m"
    (cd zblog-backend && mvn clean package -DskipTests)
    echo -e "\033[1;32mMaven build completed.\033[0m"
else
    echo -e "\033[1;33mSkipping Maven build.\033[0m"
fi

# =============== Docker Build Selection ===============
SERVICES=("zblog-user-core" "zblog-post-core" "zblog-comment-core" "s3-core" "python-classifier" "zblog-frontend" "zblog-gateway")

CHOICES=$(
    whiptail --title "Select Services to BUILD" --checklist \
    "Choose which services to build. Use SPACE to select, ENTER to confirm." 20 78 8 \
    "all" "Build all services" OFF \
    "${SERVICES[0]}" "${SERVICES[0]}" OFF \
    "${SERVICES[1]}" "${SERVICES[1]}" OFF \
    "${SERVICES[2]}" "${SERVICES[2]}" OFF \
    "${SERVICES[3]}" "${SERVICES[3]}" OFF \
    "${SERVICES[4]}" "${SERVICES[4]}" OFF \
    "${SERVICES[5]}" "${SERVICES[5]}" OFF \
    "${SERVICES[6]}" "${SERVICES[6]}" OFF \
    3>&1 1>&2 2>&3
)

if [ -z "$CHOICES" ]; then
    echo "No services selected. Exiting."
    exit 0
fi

CHOICES=($CHOICES)

if [[ " ${CHOICES[*]} " =~ "all" ]]; then
    echo -e "\033[1;34mBuilding ALL services...\033[0m"
    docker-compose build
    echo -e "\033[1;32mAll services built successfully!\033[0m"
    exit 0
fi

echo -e "\033[1;34mBuilding selected services...\033[0m"
docker-compose build "${CHOICES[@]}"
echo -e "\033[1;32mSelected services built successfully!\033[0m"

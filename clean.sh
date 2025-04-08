#!/usr/bin/env bash
# --------------- clean.sh ---------------
# Stops and removes selected containers, images, networks, and volumes.

set -e

# Ensure whiptail is installed
if ! command -v whiptail &> /dev/null; then
    echo "whiptail could not be found, please install it or use dialog."
    exit 1
fi

# List all possible services
SERVICES=("zblog-user-core" "zblog-post-core" "zblog-comment-core" "s3-core" "python-classifier" "zblog-frontend" "zblog-gateway")

CHOICES=$(
    whiptail --title "Select Services to CLEAN" --checklist \
    "Choose which services to stop/remove. Use SPACE to select, ENTER to confirm." 20 78 7 \
    "all" "All services (plus volumes, networks, images)" OFF \
    "${SERVICES[0]}" "${SERVICES[0]}" OFF \
    "${SERVICES[1]}" "${SERVICES[1]}" OFF \
    "${SERVICES[2]}" "${SERVICES[2]}" OFF \
    "${SERVICES[3]}" "${SERVICES[3]}" OFF \
    "${SERVICES[4]}" "${SERVICES[4]}" OFF \
    "${SERVICES[5]}" "${SERVICES[5]}" OFF \
    "${SERVICES[6]}" "${SERVICES[6]}" OFF \
    3>&1 1>&2 2>&3
)

# Cancel if no choice
if [ -z "$CHOICES" ]; then
    echo "No services selected. Exiting."
    exit 0
fi

# Convert whiptail's string output to array
CHOICES=($CHOICES)

# If user selected "all"
if [[ " ${CHOICES[*]} " =~ "all" ]]; then
    echo -e "\033[1;33mStopping and removing ALL containers, images, networks, volumes...\033[0m"
    docker-compose down --volumes --remove-orphans
    # Optional: remove images (be cautious in real environments!)
    # docker rmi $(docker images -q) -f || true
    # Remove the network (it will be recreated on next up)
    # docker network rm zblog-net || true
    echo -e "\033[1;32mAll services cleaned successfully!\033[0m"
    exit 0
fi

# Stop and remove each selected service
for SERVICE in "${CHOICES[@]}"; do
    if [ "$SERVICE" == "all" ]; then
        continue
    fi
    echo -e "\033[1;33mStopping $SERVICE...\033[0m"
    docker-compose stop "$SERVICE" || true
    echo -e "\033[1;33mRemoving $SERVICE...\033[0m"
    docker-compose rm -f "$SERVICE" || true
done

echo -e "\033[1;32mSelected services cleaned successfully!\033[0m"

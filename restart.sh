#!/usr/bin/env bash
# --------------- restart.sh ---------------
# Restart selected services.

set -e

if ! command -v whiptail &> /dev/null; then
    echo "whiptail could not be found, please install it or use dialog."
    exit 1
fi

SERVICES=("zblog-user-core" "zblog-post-core" "zblog-comment-core" "s3-core" "python-classifier" "zblog-frontend" "zblog-gateway")

CHOICES=$(
    whiptail --title "Select Services to RESTART" --checklist \
    "Choose which services to restart. Use SPACE to select, ENTER to confirm." 20 78 7 \
    "all" "Restart all services" OFF \
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
    echo -e "\033[1;34mRestarting ALL services...\033[0m"
    docker-compose restart
    echo -e "\033[1;32mAll services restarted successfully!\033[0m"
    exit 0
fi

echo -e "\033[1;34mRestarting selected services...\033[0m"
docker-compose restart "${CHOICES[@]}"
echo -e "\033[1;32mSelected services restarted successfully!\033[0m"

#!/usr/bin/env bash
set -euo pipefail

adb wait-for-device
adb shell cmd location set-location-enabled true
adb shell settings put secure location_mode 3 || true
adb shell settings put secure location_providers_allowed +gps,+network || true
adb shell settings put secure network_location_opt_in 1 || true

echo "location_mode = $(adb shell settings get secure location_mode 2>/dev/null || echo unknown)"

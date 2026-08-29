#!/bin/sh
set -eu

docker exec -i analytics-umami-db-1 psql -U umami -d umami < /opt/analytics/prune-auspicious.sql

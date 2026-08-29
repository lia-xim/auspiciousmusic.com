#!/bin/sh
set -eu

docker exec -i analytics-umami-db-1 psql -X -v ON_ERROR_STOP=1 -U umami -d umami < /opt/analytics/prune-all-websites.sql

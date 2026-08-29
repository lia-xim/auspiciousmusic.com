\set ON_ERROR_STOP on

BEGIN;

WITH deleted AS (
  DELETE FROM event_data
  WHERE website_id = 'e9631720-29b7-4778-bdd8-5835d93319c7'
    AND created_at < CURRENT_TIMESTAMP - INTERVAL '14 months'
  RETURNING 1
) SELECT 'event_data' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM revenue
  WHERE website_id = 'e9631720-29b7-4778-bdd8-5835d93319c7'
    AND created_at < CURRENT_TIMESTAMP - INTERVAL '14 months'
  RETURNING 1
) SELECT 'revenue' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM website_event
  WHERE website_id = 'e9631720-29b7-4778-bdd8-5835d93319c7'
    AND created_at < CURRENT_TIMESTAMP - INTERVAL '14 months'
  RETURNING 1
) SELECT 'website_event' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM session_data
  WHERE website_id = 'e9631720-29b7-4778-bdd8-5835d93319c7'
    AND created_at < CURRENT_TIMESTAMP - INTERVAL '14 months'
  RETURNING 1
) SELECT 'session_data' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM session_replay
  WHERE website_id = 'e9631720-29b7-4778-bdd8-5835d93319c7'
    AND created_at < CURRENT_TIMESTAMP - INTERVAL '14 months'
  RETURNING 1
) SELECT 'session_replay' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM session_replay_saved
  WHERE website_id = 'e9631720-29b7-4778-bdd8-5835d93319c7'
    AND created_at < CURRENT_TIMESTAMP - INTERVAL '14 months'
  RETURNING 1
) SELECT 'session_replay_saved' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM session s
  WHERE s.website_id = 'e9631720-29b7-4778-bdd8-5835d93319c7'
    AND s.created_at < CURRENT_TIMESTAMP - INTERVAL '14 months'
    AND NOT EXISTS (SELECT 1 FROM website_event e WHERE e.session_id = s.session_id)
    AND NOT EXISTS (SELECT 1 FROM session_data d WHERE d.session_id = s.session_id)
    AND NOT EXISTS (SELECT 1 FROM session_replay r WHERE r.session_id = s.session_id)
  RETURNING 1
) SELECT 'session' AS table_name, count(*) AS deleted_rows FROM deleted;

COMMIT;

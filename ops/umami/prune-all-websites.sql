\set ON_ERROR_STOP on

BEGIN;

SELECT pg_advisory_xact_lock(hashtext('umami-global-retention'));

WITH deleted AS (
  DELETE FROM event_data
  WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '24 months'
  RETURNING 1
) SELECT 'event_data' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM revenue
  WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '24 months'
  RETURNING 1
) SELECT 'revenue' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM website_event
  WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '24 months'
  RETURNING 1
) SELECT 'website_event' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM session_data
  WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '24 months'
  RETURNING 1
) SELECT 'session_data' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM session_replay
  WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '24 months'
  RETURNING 1
) SELECT 'session_replay' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM session_replay_saved
  WHERE created_at < CURRENT_TIMESTAMP - INTERVAL '24 months'
  RETURNING 1
) SELECT 'session_replay_saved' AS table_name, count(*) AS deleted_rows FROM deleted;

WITH deleted AS (
  DELETE FROM "session" s
  WHERE s.created_at < CURRENT_TIMESTAMP - INTERVAL '24 months'
    AND NOT EXISTS (SELECT 1 FROM website_event e WHERE e.session_id = s.session_id)
    AND NOT EXISTS (SELECT 1 FROM session_data d WHERE d.session_id = s.session_id)
    AND NOT EXISTS (SELECT 1 FROM session_replay r WHERE r.session_id = s.session_id)
  RETURNING 1
) SELECT 'session' AS table_name, count(*) AS deleted_rows FROM deleted;

COMMIT;

-- Optimized query for fetching unread notifications
SELECT 
    id, 
    type, 
    message, 
    created_at, 
    is_read
FROM notifications 
WHERE student_id = %s 
  AND is_read = false 
ORDER BY created_at DESC 
LIMIT %s;

-- Query for Priority Inbox (with type filter)
SELECT * FROM notifications 
WHERE student_id = %s 
ORDER BY 
    CASE type 
        WHEN 'Placement' THEN 1 
        WHEN 'Result' THEN 2 
        WHEN 'Event' THEN 3 
    END, 
    created_at DESC 
LIMIT 50;
# Notification System Design

## Stage 1 - REST API Design
**GET** `http://4.224.186.213/evaluation-service/notifications?limit=20&page=1&notification_type=Result`

**POST** `/notifications/mark-read`  
**POST** `/notifications/mark-all-read`

## Stage 2 - Database (PostgreSQL)
```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id INTEGER NOT NULL,
    type VARCHAR(20) CHECK (type IN ('Event','Result','Placement')),
    message TEXT NOT NULL,
    metadata JSONB,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_student_unread_time ON notifications(student_id, is_read, created_at DESC);
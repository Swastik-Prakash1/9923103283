'use client';
import { useEffect, useState } from 'react';
import NotificationCard from '../../components/NotificationCard';
import { get_priority_notifications } from '../../../priority-inbox/priority_notifications';

export default function PriorityInbox() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [priorityNotifs, setPriorityNotifs] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://4.224.186.213/evaluation-service/notifications?limit=100')
      .then(res => res.json())
      .then(data => {
        const notifs = data.notifications || [];
        setNotifications(notifs);
        setPriorityNotifs(get_priority_notifications(notifs, 10));
      })
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🔥 Priority Inbox (Top 10)</h1>
      <p>Most important notifications first</p>
      
      {priorityNotifs.map((notif) => (
        <NotificationCard key={notif.id} notif={notif} />
      ))}
    </div>
  );
}
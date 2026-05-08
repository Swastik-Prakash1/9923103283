'use client';
import { useEffect, useState } from 'react';
import NotificationCard from '../components/NotificationCard';
import { fetchNotifications } from '../lib/api';

export default function Home() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications(50, 1)
      .then(data => {
        setNotifications(data.notifications || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>All Notifications</h1>
      {loading ? <p>Loading...</p> : 
        notifications.map(notif => (
          <NotificationCard key={notif.id} notif={notif} />
        ))
      }
    </div>
  );
}
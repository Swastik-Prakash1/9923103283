'use client';
import NotificationCard from './NotificationCard';

export default function NotificationList({ notifications }: { notifications: any[] }) {
  return (
    <div>
      {notifications.map((notif) => (
        <NotificationCard key={notif.id} notif={notif} />
      ))}
    </div>
  );
}
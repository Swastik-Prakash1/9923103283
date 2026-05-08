const API_BASE = "http://4.224.186.213/evaluation-service/notifications";

export interface Notification {
  id: string;
  type: "Event" | "Result" | "Placement";
  message: string;
  timestamp: string;
  isRead: boolean;
}

export const fetchNotifications = async (
  limit: number = 20,
  page: number = 1,
  notification_type?: string
): Promise<{ notifications: Notification[] }> => {
  let url = `${API_BASE}?limit=${limit}&page=${page}`;
  if (notification_type) {
    url += `&notification_type=${notification_type}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch notifications");
  return res.json();
};
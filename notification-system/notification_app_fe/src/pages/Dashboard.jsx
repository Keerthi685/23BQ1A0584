import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/notificationService";
import NotificationCard from "../components/NotificationCard";

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data = await fetchNotifications();
    setNotifications(data || []);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications Dashboard</h1>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}
    </div>
  );
};

export default Dashboard;
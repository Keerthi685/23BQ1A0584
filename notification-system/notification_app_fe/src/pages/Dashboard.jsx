import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";

const sampleData = [
  {
    ID: 1,
    Type: "Placement",
    Message: "CSX Corporation hiring",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: 2,
    Type: "Result",
    Message: "Mid Semester Results Published",
    Timestamp: "2026-04-21 10:00:00",
  },
  {
    ID: 3,
    Type: "Event",
    Message: "Tech Fest Registration Open",
    Timestamp: "2026-04-20 09:30:00",
  },
];

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(sampleData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications Dashboard</h1>

      <h2>Priority Inbox</h2>

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
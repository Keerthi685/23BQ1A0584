import NotificationCard from "./NotificationCard";

function PriorityInbox({ notifications }) {
  return (
    <div>
      <h2>Priority Inbox</h2>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default PriorityInbox;